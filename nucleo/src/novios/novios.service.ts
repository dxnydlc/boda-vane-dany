import { BadRequestException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNovioDto } from './dto/create-novio.dto';
import { UpdateNovioDto } from './dto/update-novio.dto';



import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { InjectRepository } from '@nestjs/typeorm';
import { NovioModel } from './entities/novio.entity';
import { Repository } from 'typeorm';

require('colors');



// CreateNovioDto | UpdateNovioDto
@Injectable()
export class NoviosService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( NovioModel )private readonly datosModel : Repository<NovioModel> ,
    private util : UtilidadesService , 
  ){}
  // ...................................................................
  // ...................................................................
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
        message: 'Error en el servicio de Novios',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async guardar( dto : CreateNovioDto ) {

    try {

      //Comprobar si el codigo ya existe
      const mipPlagaInit = await this.datosModel.findOne({
        where: {
          IdBoda: dto.IdBoda , DNI : dto.DNI
        }
      });

      let NombreTipo = dto.Tipo == 'Novio' ? `El` : `La`;

      if (mipPlagaInit) throw new BadRequestException( `${NombreTipo} ya existe en el sistema.` );
      
      const newArea = await this.datosModel.create( dto );
      let dataSave  = await this.datosModel.save( newArea );
      //let Codigo = await this.util.addZeros( dataSave.id , 4 );
      //await this.datosModel.update({ id : dataSave.id },{ Codigo : `RM${Codigo}` });

      let data = await this.datosModel.findOne({
        where : {
          id : dataSave.id
        }
      });

      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registro guardado' , clase : 'success' , call : 'tostada2' }
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
        message: 'Error en el servicio de autenticación',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async getTodos() {
    


    try {
      
      let data = await this.datosModel.find({
        take : 200 ,
        order : {
          id : 'DESC'
        }
      });
  
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
        message: 'Error en el servicio de autenticación',
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
        message: 'Error en el servicio de autenticación',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async Actualizar( uuID : string , dto : UpdateNovioDto ) {

    try {

      // Primero ver si esta activo o no {-.-}
      let data1 = await this.datosModel.findOne({
        where: {
          uu_id: uuID,
        },
      });

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
        message: 'Error en el servicio de autenticación',
        cause: error // Mantiene el rastro del error original en logs internos
      });
      
    }

  }
  // ...................................................................
  // ...................................................................
  async AnularbyId( id : number ) {

    try {

      const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

      
      let data = await this.datosModel.findOne({
        where : {
          id 
        }
      });

      await this.datosModel.delete({ id });

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
        message: 'Error en el servicio de autenticación',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
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
  // IMPRESION CLIENTE
  async generarHTML01(IdsOT: string) {

    let css = '';
    let Salto = `<div style="page-break-after:always;" ></div>`;

    let html = ``;

    // TERMINAMOS DE ESCRIBIR EL ARCHIVO
    let _uuid = uuidv4();
    let _URL_PROYECTO = process.env.URL_PROYECTO;
    let NombreArchivo = `OT01_${_uuid}`;
    let pathPhp = `${_URL_PROYECTO}public/html/${NombreArchivo}.html`;
    varDump(pathPhp);
    writeFileSync(pathPhp, html);
    //
    await sleep(2000); // Wait for one second
    await this.transformarHtml(NombreArchivo);
    //
    return {
      file: `${NombreArchivo}`,
      version: 1,
    };

  }
  // ...................................................................
  // ...................................................................
  async transformarHtml(file: string) {
    //

    let out;

    try {
      let _URL_PROYECTO = process.env.URL_PROYECTO;
      // Tal vez en tu equipo se necesite usar otro comando, lo defines en el .env, key "COMANDO_PDF"
      let COMANDO_PDF = process.env.COMANDO_PDF;
      if(!COMANDO_PDF){
      COMANDO_PDF = `xvfb-run wkhtmltopdf --enable-local-file-access`;
      }
      let comando = `${COMANDO_PDF} ${_URL_PROYECTO}public/html/${file}.html ${_URL_PROYECTO}public/html/${file}.pdf`;
      out = await execShPromise(comando, true);
    } catch (e) {
      console.log('Error: ', e);

      return e;
    }

    console.log('out: ', out.stdout, out.stderr);

    return {
      data: 'ok'
    };

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
  async maxId()
  {
    let MaxId = await this.datosModel.createQueryBuilder('areas').select("MAX(areas.CodArea)", "max").getRawOne();
    return MaxId.max + 1;
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