import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { UserModel } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';

require('colors');


// CreateUserDto || UpdateUserDto
@Injectable()
export class UsersService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( UserModel )private readonly datosModel : Repository<UserModel> ,
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
  
      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
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
  async guardar( dto : CreateUserDto ) {
    
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
  async getActivos() {
    
    try {
      
      let data = await this.datosModel.createQueryBuilder('c')
      .select([ 'id as id' , 'uu_id as uu_id' , 'Nombre as Nombre' , 'DNI as DNI' , 'Email as Email' , 'Rol as Rol' , 'Estado as Estado' ])
      .getRawMany();
  
      return {
        data , 
        version : '1' , 
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
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
  async Actualizar( uuID : string , dto : UpdateUserDto ) {
    
    try {

      // Primero ver si esta activo o no {-.-}
      let data1 = await this.datosModel.findOne({
        where: {
          uu_id: uuID,
        },
      });

      if( data1!.Estado != 'Activo' )throw new HttpException( 'Documento no disponible', HttpStatus.CONFLICT);

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
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async login( Email : string , DNI : string ) {
    
    try {
      
      let data = await this.datosModel.findOne({
        where : {
          Email : Email , DNI : DNI
        }
      });
  
      return data;

    } catch (error) {

      varDump( error );
      throw new HttpException( 'Error' , HttpStatus.CONFLICT );

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
  // IMPRESION CLIENTE
  async generarHTML01(IdsOT: string) {

    let css = '';//await this.util.getcss_ot01();
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