import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';


import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { FotoModel } from './entities/foto.entity';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { Not, Repository } from 'typeorm';

require('colors');


// CreateFotoDto | UpdateFotoDto
@Injectable()
export class FotosService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( FotoModel )private readonly datosModel : Repository<FotoModel> ,
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
        message: 'Error en el servicio de fotos',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async guardar( dto : CreateFotoDto ) {
    try {

      //Comprobar si el codigo ya existe
      
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
        message: 'Error en el servicio de fotos',
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
        message: 'Error en el servicio de fotos',
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
        message: 'Error en el servicio de fotos',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async Actualizar( uuID : string , dto : UpdateFotoDto ) {
    try {

      // Primero ver si esta activo o no {-.-}
      let data1 = await this.datosModel.findOne({
        where: {
          uu_id: uuID,
        },
      });

      if( data1!.Estado != 'activo' )throw new HttpException( 'Documento no disponible', HttpStatus.CONFLICT);

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
        message: 'Error en el servicio de fotos',
        cause: error // Mantiene el rastro del error original en logs internos
      });
      
    }

  }
  // ...................................................................
  // ...................................................................
  async AnularbyId( id : number ) {
    try {

      const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

      await this.datosModel.update({ id } , { Estado : 'anulado' , deleted_at : updatedAt , updated_at : updatedAt } );
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
        message: 'Error en el servicio de fotos',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async getActivos() {

    try {

      let _URL_PROYECTO     = process.env.URL_PROYECTO;
      let preimagen         = `CONCAT( '<a href="${_URL_PROYECTO}',c.Url,'" data-fx><img style="width:150px;" src="${_URL_PROYECTO}',c.urlThumb,'" ></a>') as Foto`;
      
      let data = await this.datosModel.createQueryBuilder('c')
      .select([ 
        "c.id as id" , 
        "c.uu_id as uu_id" , 
        "b.Nombre as Boda" , 
        "c.Tipo as Tipo" , 
        "c.NombreArchivo as Nombre" , 
        "c.Extension as Extension" , 
        "c.Url as Url" , 
        preimagen , 
        "c.Estado as Estado" , 
        "c.UsuarioMod as UsuarioMod" , 
        "DATE_FORMAT( c.created_at , '%Y-%m-%d %H:%i:%s') as created_at" 
      ])
      .innerJoin( "tbl_boda" , "b" , " c.IdBoda = b.id " )
      .where(" c.Estado = 'activo' ")
      .orderBy( "c.id" , "DESC" )
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
        message: 'Error en el servicio de Novios',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async cargar(data: any) {
  
    try {

      let result = [];

      const newArea     = await this.datosModel.create(data);
      let dataInsertada = await this.datosModel.save(newArea);

      varDump( `##############################################` );
      varDump( `GuARDAR FOTO` );
      varDump( dataInsertada );
      varDump( `##############################################` );

      return {
        data : [] , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Foto cargada' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      varDump( error );
      throw new HttpException(
        'Error en el servicio', 
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error } // Optional: passes the original error for debugging logs
      );

    }
  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async getFotosBoda( IdBoda : number = 0 ) {
    try {

      //[ "Principal", "Novio", "Novia", "Momentos", "Registro" ]

      
      let datosJson = await this.datosModel.find({
        where : {
          IdBoda , 
          Estado: Not('anulado') // Agrega esta línea
        } ,
        order : {
          id : 'DESC'
        }
      });

      const categorias = [ "Principal", "Novio", "Novia", "Momentos", "Registro" ];

      // Ejemplo de tu arreglo JSON de entrada
      /*const datosJson = [
        { id: 1, nombre: "Banner de bienvenida", Tipo: "Principal" },
        { id: 2, nombre: "Traje", Tipo: "Novio" },
        { id: 3, nombre: "Vestido", Tipo: "Novia" },
        { id: 4, nombre: "Primer baile", Tipo: "Momentos" },
        { id: 5, nombre: "Confirmación de asistencia", Tipo: "Registro" },
        { id: 6, nombre: "Anillos", Tipo: "Principal" }
      ];*/

      // 1. Inicializamos el objeto agrupador para que contenga todas tus categorías como arrays vacíos
      const datosAgrupados = categorias.reduce((acumulador, categoria) => {
        acumulador[categoria] = [];
        return acumulador;
      }, {});

      // 2. Iteramos el JSON para acomodar cada fila en su categoría correspondiente
      datosJson.forEach(fila => {
        const tipo = fila.Tipo;
        
        // Verificamos que el 'Tipo' de la fila realmente exista en tu arreglo de categorías
        if (datosAgrupados[tipo]) {
          datosAgrupados[tipo].push(fila);
        }
      });
  
      // throw new BadRequestException('Usuario no existe');

      return {
        data : datosAgrupados , 
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
        message: 'Error en el servicio de fotos',
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