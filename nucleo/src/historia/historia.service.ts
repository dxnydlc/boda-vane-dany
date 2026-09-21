import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';



import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';
import { HistoriaModel } from './entities/historia.entity';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilidadesService } from 'src/utilidades/utilidades.service';

require('colors');


// CreateHistoriaDto | UpdateHistoriaDto
@Injectable()
export class HistoriaService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( HistoriaModel )private readonly datosModel : Repository<HistoriaModel> ,
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
        message: 'Error en el servicio de Historia',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async guardar( dto : CreateHistoriaDto ) {
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
        message: 'Error en el servicio de Historia',
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
        message: 'Error en el servicio de Historia',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async getActivos() {
    try {
      
      let data = await this.datosModel.createQueryBuilder('c')
      .select([ 
        "c.id as id" , 
        "c.uu_id as uu_id" , 
        "b.Nombre as Boda" , 
        "c.Titulo as Titulo" , 
        "DATE_FORMAT( c.Fecha , '%Y-%m-%d') as Fecha" , 
        "c.Estado as Estado" , 
        "c.UsuarioMod as UsuarioMod" , 
        "DATE_FORMAT( c.created_at , '%Y-%m-%d %H:%i:%s') as created_at" 
      ])
      .innerJoin( "tbl_boda" , "b" , " c.IdBoda = b.id " )
      .where(" c.Estado = 'activo' ")
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
        message: 'Error en el servicio de Historia',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async Actualizar( uuID : string , dto : UpdateHistoriaDto ) {
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
        message: 'Error en el servicio de Historia',
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
        message: 'Error en el servicio de Historia',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async getbyBoda( IdBoda : number = 0 ) {
      try {
        
        let datosJson = await this.datosModel.find({
          where : {
            IdBoda , 
            Estado: Not('anulado') // Agrega esta línea
          } ,
          order : {
            id : 'DESC'
          }
        });
    
        // throw new BadRequestException('Usuario no existe');
  
        return {
          data : datosJson , 
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
          message: 'Error en el servicio de historia',
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