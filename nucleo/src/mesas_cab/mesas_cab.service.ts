import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMesasCabDto } from './dto/create-mesas_cab.dto';
import { UpdateMesasCabDto } from './dto/update-mesas_cab.dto';


import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';


import { v4 as uuidv4 } from 'uuid';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MesasCabModel } from './entities/mesas_cab.entity';
import { Repository } from 'typeorm';
import { MesasDetService } from 'src/mesas_det/mesas_det.service';

import PDFDocument from 'pdfkit';

require('colors');



import sharp from 'sharp';


export interface InvitadoData {
  id: string | number;
  invitado: string;
  mesa: number;
}

export interface Invitado {
  id: number;
  Nombre: string;
  Tipo: string;
  Foto: string;
  Estado: string;
}

export interface Mesa {
  id: number;
  Nombre: string;
  color: string;
  invitados: Invitado[];
}

interface InvitadoMesa {
  IdMesa: number;
  NombreMesa: string; // Nombre de la mesa
  NroInvitados: number;
  Invitado: string;
  Tipo: string;
  Novio: string;
}

export interface InvitadoGenerado {
  id: string | number;
}

// CreateMesasCabDto | UpdateMesasCabDto
@Injectable()
export class MesasCabService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( MesasCabModel )private readonly datosModel : Repository<MesasCabModel> ,
    private util : UtilidadesService , 
    private readonly srvDetalle : MesasDetService , 
  ){}
  // ...................................................................
  // ...................................................................
  // Variables de control
  private readonly config = {
    tamanoTextoNombre : 130,
    tamanoTextoMesa   : 110,
    
    // Coordenadas Y (El eje X se centrará automáticamente al 50%)
    coordYNombre      : 850, 
    coordYMesa        : 1300,   
    
    colorTexto: '#4a5e4b',
    
    // Nombre de la fuente instalada en el sistema
    fuenteCursiva: 'Great Vibes, cursive', 
  };
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async demoFuncion() {
    

    try {
      
      let data = await this.datosModel.find({
        take : 200 ,
        order : {
          id : 'DESC'
        }
      });
  
      // throw new BadRequestException('Usuario no existe');

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async guardar( dto : CreateMesasCabDto ) {

    try {

      //Comprobar si el codigo ya existe
      const mipPlagaInit = await this.datosModel.findOne({
        where: {
          Nombre: dto.Nombre , IdBoda : dto.IdBoda
        }
      });

      if (mipPlagaInit) throw new BadRequestException('La mesa ya existe' );
      
      const newArea = await this.datosModel.create( dto );
      let dataSave  = await this.datosModel.save( newArea );
      //let Codigo = await this.util.addZeros( dataSave.id , 4 );
      //await this.datosModel.update({ id : dataSave.id },{ Codigo : `RM${Codigo}` });

      let data = await this.datosModel.find({
        where : { IdBoda : dto.IdBoda }
      });

      let mesas : Mesa[] = [];

      for (let index = 0; index < data.length; index++) {
        const rs                  = data[index];
        // Invitados asignados
        let dataInvitadosMeasa    = await this.srvDetalle.invitadoMesa( rs.id );
        let invitados: Invitado[] = [];
        for (let indexD = 0; indexD < dataInvitadosMeasa.data.length; indexD++) {
          const rsD = dataInvitadosMeasa.data[indexD];
          let i = {
            id      : parseInt( rsD.id ) , 
            Nombre  :  rsD.Nombre , 
            Tipo    : rsD.Tipo , 
            Foto    : rsD.Foto , 
            Estado  : rsD.Estado
          };
          invitados.push( i );
        }
        let m = {
          id : rs.id , 
          Nombre : rs.Nombre , 
          color : rs.Color , 
          invitados : invitados 
        };
        mesas.push( m );
      }

      return {
        data : mesas , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Mesa agregada' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {
      
      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async getTodos() {
    try {
      
      let data = await this.datosModel.createQueryBuilder('c')
      .innerJoin( "tbl_boda" , "b" , " b.id = c.IdBoda" )
      .select([ 
        "c.id as id" , "c.Nombre as Nombre" , 
        "c.NroInvitados as NroInvitados" , 
        "c.IdBoda as IdBoda" ,
        "b.Nombre as Boda" , 
        "c.Descripcion as Descripcion" , 
        "c.Color as Color" , 
        "c.Estado as Estado" , 
        "DATE_FORMAT( c.created_at , '%Y-%m-%d %H:%i:%s') as created_at" , 
      ])
      .getRawMany();
  
      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async getbyId( id : number ) {

    try {

      let data = await this.datosModel.findOne({
        where : {
          id
        }
      });

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registro recibido' , clase : 'success' , call : 'tostada2' }
      }
      
    } catch (error) {
      
      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async Actualizar( uuID : string , dto : UpdateMesasCabDto ) {
    try {

      // Primero ver si esta activo o no {-.-}
      let data1 = await this.datosModel.findOne({
        where: {
          uu_id: uuID,
        },
      });

      if( data1!.Estado != 'activo' )throw new HttpException( 'Documento no disponible', HttpStatus.CONFLICT);

      delete dto.id;
      await this.datosModel.update({ uu_id : uuID } , dto );
      let dataP = await this.datosModel.findOne({
        where : {
          uu_id : uuID
        }
      });

      return {
        data : dataP , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registro actualizado' , clase : 'success' , call : 'tostada2' }
      }
      
    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });
      
    }

  }
  // ...................................................................
  // ...................................................................
  async AnularbyId( id : number ) {

    try {

      const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

      await this.datosModel.update({ id } , { Estado : 'Anulado' , deleted_at : updatedAt , updated_at : updatedAt } );
      let data = await this.datosModel.findOne({
        where : {
          id 
        }
      });

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registro anulado' , clase : 'success' , call : 'tostada2' }
      }
      
    } catch (error) {
      
      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async getMesas( IdBoda : number ) {

    try {
      
      let data = await this.datosModel.find({
        where : { IdBoda }
      });

      let mesas : Mesa[] = [];

      for (let index = 0; index < data.length; index++) {
        const rs                  = data[index];
        // Invitados asignados
        let dataInvitadosMeasa    = await this.srvDetalle.invitadoMesa( rs.id );
        let invitados: Invitado[] = [];
        for (let indexD = 0; indexD < dataInvitadosMeasa.data.length; indexD++) {
          const rsD = dataInvitadosMeasa.data[indexD];
          let i = {
            id      : parseInt( rsD.id ) , 
            Nombre  :  rsD.Nombre , 
            Tipo    : rsD.Tipo , 
            Foto    : rsD.Foto , 
            Estado  : rsD.Estado , 
            
          };
          invitados.push( i );
        }
        let m = {
          id : rs.id , 
          Nombre : rs.Nombre , 
          color : rs.Color , 
          invitados : invitados , 
          Descripcion : rs.Descripcion 
        };
        mesas.push( m );
      }

      return {
        data : mesas , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async setColor( id : number = 0 , Color : string ) {
    try {
      
      let data = await this.datosModel.update({ id },{ Color });
  
      // throw new BadRequestException('Usuario no existe');

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async setNroInvitados( id : number = 0 , NroInvitados : number ) {
    try {
      
      let data = await this.datosModel.update({ id },{ NroInvitados });
  
      // throw new BadRequestException('Usuario no existe');

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // Exportar a excel
  async exportarExcel( IdBoda : number = 0 ) {
    try {
      
      let _URL_PROYECTO       = process.env.URL_PROYECTO;

      let invitados = await this.datosModel.createQueryBuilder('c')
      .select([
        "c.id as IdMesa" , 
        "c.Nombre as NombreMesa", 
        "c.NroInvitados as NroInvitados" , 
        "i.Nombre as Invitado" , 
        "i.group_name as Tipo" , 
        "n.Nombre as Novio"
      ])
      .innerJoin( "tbl_mesas_det" , "d" , " d.IdMesa = c.id " )
      .innerJoin( "tbl_invitados" , "i" , " i.id = d.IdInvitado " )
      .innerJoin( "tbl_novios" , "n", " i.IdNovio = n.id " )
      .where(" c.IdBoda = :IdBoda " , { IdBoda } )
      .getRawMany();
  
      // ==============================================================
      const workbook = new ExcelJS.Workbook();

      /**
      * =========================================
      * HOJA MESAS
      * =========================================
      */
      const wsMesas = workbook.addWorksheet('Mesas');
      
      wsMesas.columns = [
      { header: 'IdMesa', key: 'IdMesa', width: 15 },
      { header: 'Mesa', key: 'NombreMesa', width: 40 },
      { header: 'NroInvitados', key: 'NroInvitados', width: 15 },
      ];
      
      const mesas = [
        ...new Map(
        invitados.map(item => [
        item.IdMesa,
        {
        IdMesa        : item.IdMesa,
        NombreMesa    : item.NombreMesa,
        NroInvitados  : item.NroInvitados,
        },
        ]),
        ).values(),
      ].sort((a, b) => a.IdMesa - b.IdMesa);
      
      wsMesas.addRows(mesas);
      
      /**
      * =========================================
      * HOJA INVITADOS
      * =========================================
      */
      const wsInvitados = workbook.addWorksheet('Invitados');
      
      wsInvitados.columns = [
      { header: 'IdMesa', key: 'IdMesa', width: 15 },
      { header: 'Mesa', key: 'NombreMesa', width: 40 },
      { header: 'Invitado', key: 'Invitado', width: 40 },
      { header: 'Tipo', key: 'Tipo', width: 20 },
      { header: 'Novio', key: 'Novio', width: 15 },
      ];
      
      const invitadosOrdenados = [...invitados].sort((a, b) => {
        const mesaCompare =
        a.NombreMesa.localeCompare(b.NombreMesa);
        
        if (mesaCompare !== 0) {
        return mesaCompare;
        }
        
        return a.Invitado.localeCompare(b.Invitado);
      });
      
      wsInvitados.addRows(invitadosOrdenados);
      
      /**
      * =========================================
      * ESTILOS
      * =========================================
      */
      for (const sheet of workbook.worksheets) {
        sheet.getRow(1).font = {
          bold  : true,
          color : { argb: 'FFFFFF' },
        };
      
        sheet.getRow(1).fill = {
        type    : 'pattern',
        pattern : 'solid',
        fgColor : { argb: '1F4E78' },
        };
      
        sheet.views = [
        {
          state : 'frozen',
          ySplit: 1,
        },
        ];
      }
      
      /**
      * =========================================
      * EXPORTAR A DISCO
      * =========================================
      */
      const exportsDir = path.join(
      process.cwd(),
      'public',
      'exports',
      );
      
      if (!fs.existsSync(exportsDir)) {
        fs.mkdirSync(exportsDir, { recursive: true });
      }

      // Archivo de descarga
      let archivoDescarga     = `mesas-invitados-${Date.now()}.xlsx`;
      
      const filePath = path.join(
      exportsDir,
      archivoDescarga,
      );
      
      await workbook.xlsx.writeFile( filePath );
      // ==============================================================

      return {
        data : invitados , archivo : `exports/${archivoDescarga}` , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // generar imagen mesa mini
  async generarImagenesPeques( IdBoda : number = 0 ) {
    

    try {
      
      let invitados = await this.datosModel.createQueryBuilder('c')
      .select([
        "d.IdInvitado as id" , 
        "c.Nombre as mesa", 
        "i.Nombre as invitado" , 
      ])
      .innerJoin( "tbl_mesas_det" , "d" , " d.IdMesa = c.id " )
      .innerJoin( "tbl_invitados" , "i" , " i.id = d.IdInvitado " )
      .where(" c.IdBoda = :IdBoda " , { IdBoda } )
      .getRawMany();
  
      varDump(`>>> generar tarjetitas ${invitados.length}`);
      await this.generarImagenesConSharp( invitados );
      // generar un pdf
      let archivoSalida = `tarjetas_impresion_${Date.now()}.pdf`;
      await this.generarGridPDF( invitados , 3 , archivoSalida );

      return {
        data : {} , 
        archivo : `pdfs/${archivoSalida}` ,
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Tarjetitas generadas' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      // Para depuración local
      varDump(error); 

      // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
      if (error instanceof HttpException) {
        throw error;
      }

      // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
      throw new InternalServerErrorException({
        message: 'Error en el servicio de Mesas Cab',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async generarImagenesConSharp( invitados: InvitadoData[]): Promise<string[]> {
    const rutaPlantilla         = path.join(process.cwd(), 'public/img', 'plantilla-tarjetita.jpeg' );
    const directorioSalida      = path.join(process.cwd(), 'public', 'tarjetas_generadas');
    const rutasGeneradas: string[] = [];

    if (!fs.existsSync(directorioSalida)) {
      fs.mkdirSync(directorioSalida, { recursive: true });
    }

    // Obtener dimensiones reales de la plantilla para el tamaño del SVG
    const metadata              = await sharp(rutaPlantilla).metadata();
    const width                 = metadata.width || 1200;
    const height                = metadata.height || 800;

    for (const dato of invitados) {
      //varDump(`||| Generando imagen de invitado ${dato.invitado} de ${invitados.length}`);
      // Crear el texto como una imagen vectorial (SVG)
      // text-anchor: middle y x="50%" centran el texto automáticamente
      const svgText = `
        <svg width="${width}" height="${height}">
          <style>
            .nombre { 
              fill: ${this.config.colorTexto}; 
              font-size: ${this.config.tamanoTextoNombre}px; 
              font-family: ${this.config.fuenteCursiva};
              text-anchor: middle; 
            }
            .mesa { 
              fill: ${this.config.colorTexto}; 
              font-size: ${this.config.tamanoTextoMesa}px; 
              font-family: Arial, serif;
              text-anchor: middle; 
            }
          </style>
          <text x="50%" y="${this.config.coordYNombre}" class="nombre">${dato.invitado}</text>
          <text x="50%" y="${this.config.coordYMesa}" class="mesa">${dato.mesa}</text>
        </svg>
      `;

      const nombreArchivo = `${dato.id}.png`;
      const rutaGuardado = path.join(directorioSalida, nombreArchivo);

      // Superponer el SVG generado sobre la imagen base y guardarla
      await sharp(rutaPlantilla)
        .composite([
          {
            input: Buffer.from(svgText),
            top: 0,
            left: 0,
          },
        ])
        .png() // Exportar el resultado final como PNG
        .toFile(rutaGuardado);

      rutasGeneradas.push(rutaGuardado);
    }

    return rutasGeneradas;
  }
  // ...................................................................
  // ...................................................................
  async generarGridPDF(
    invitados: InvitadoGenerado[],
    columnas: number = 3,
    nombreArchivo: string = `tarjetas_impresion_${Date.now()}.pdf`
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      // Documento tamaño A4 sin márgenes automáticos
      const doc = new PDFDocument({ size: 'A4', margin: 0 });
      
      const directorioSalida = path.join(process.cwd(), 'public', 'pdfs');
      if (!fs.existsSync(directorioSalida)) {
        fs.mkdirSync(directorioSalida, { recursive: true });
      }

      const rutaSalida = path.join(directorioSalida, nombreArchivo);
      const stream = fs.createWriteStream(rutaSalida);

      doc.pipe(stream);
      stream.on('finish', () => resolve(rutaSalida));
      stream.on('error', reject);
      doc.on('error', reject);

      // Constantes de dimensiones de una hoja A4 en puntos (PDFKit)
      const anchoA4 = 595.28;
      const altoA4 = 841.89;
      
      // Márgenes de la hoja para que la impresora no corte los bordes
      const margenX = 20; 
      const margenY = 30;

      // Cálculo dinámico de dimensiones
      const anchoDisponible = anchoA4 - (margenX * 2);
      const tarjetaAncho = anchoDisponible / columnas;
      // Mantenemos la proporción de la tarjeta original (120 de alto x 180 de ancho)
      const tarjetaAlto = tarjetaAncho * (120 / 180); 

      const altoDisponible = altoA4 - (margenY * 2);
      const filasPorPagina = Math.floor(altoDisponible / tarjetaAlto);
      const tarjetasPorPagina = columnas * filasPorPagina;

      invitados.forEach((dato, index) => {
        const rutaImagen = path.join(process.cwd(), 'public', 'tarjetas_generadas', `${dato.id}.png`);
        
        // Validación de seguridad por si una imagen no se generó
        if (!fs.existsSync(rutaImagen)) {
          console.warn(`Imagen no encontrada para ID: ${dato.id}`);
          return; 
        }

        // Insertar salto de página cuando se llena la cuadrícula
        if (index > 0 && index % tarjetasPorPagina === 0) {
          doc.addPage();
        }

        // Calcular posición en la cuadrícula de la página actual
        const indexEnPagina = index % tarjetasPorPagina;
        const col = indexEnPagina % columnas;
        const fila = Math.floor(indexEnPagina / columnas);

        // Calcular coordenadas X e Y exactas
        const x = margenX + (col * tarjetaAncho);
        const y = margenY + (fila * tarjetaAlto);

        // Estampar la imagen individual en el PDF
        doc.image(rutaImagen, x, y, { width: tarjetaAncho, height: tarjetaAlto });
      });

      // Cerrar y guardar el documento
      doc.end();
    });
  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
}
// ...................................................................
function varDump( e ){
  console.log( e );
}
// ...................................................................
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// ...................................................................
function Dump1( e , color )
{
// rojo, verde, amarillo, negrita_verde, negrita_verde_u
switch ( color ) {
    case 'rojo':
    console.log(  e.red );
    break;
    case 'verde':
    console.log(  e.green );
    break;
    case 'amarillo':
    console.log(  e.yellow );
    break;
    case 'negrita_verde':
    console.log(  e.green );
    break;
    case 'negrita_verde_u':
    console.log(  e.green.bold );
    break;
    default:
    //
    break;
}
}
// ..............................................................................