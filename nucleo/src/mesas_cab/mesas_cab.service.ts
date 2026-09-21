import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMesasCabDto } from './dto/create-mesas_cab.dto';
import { UpdateMesasCabDto } from './dto/update-mesas_cab.dto';


import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');



import { v4 as uuidv4 } from 'uuid';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MesasCabModel } from './entities/mesas_cab.entity';
import { Repository } from 'typeorm';
import { MesasDetService } from 'src/mesas_det/mesas_det.service';

require('colors');


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