import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInvitadoDto } from './dto/create-invitado.dto';
import { UpdateInvitadoDto } from './dto/update-invitado.dto';


import { readFileSync, writeFileSync } from 'fs';
const execShPromise = require("exec-sh").promise;

//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';
import { InvitadoModel } from './entities/invitado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { NoviosService } from 'src/novios/novios.service';
import { BodaService } from 'src/boda/boda.service';
import { FotosService } from 'src/fotos/fotos.service';
import { ProgramaService } from 'src/programa/programa.service';
import { HistoriaService } from 'src/historia/historia.service';

require('colors');


// CreateInvitadoDto | UpdateInvitadoDto
@Injectable()
export class InvitadosService {
  // ...................................................................
  // ...................................................................
  constructor(
    @InjectRepository( InvitadoModel )private readonly datosModel : Repository<InvitadoModel> ,
    private util : UtilidadesService , 
    private readonly srvNovios : NoviosService , 
    private readonly srvBoda   : BodaService , 
    private readonly srvFotos  : FotosService , 
    private readonly srvPrograma : ProgramaService , 
    private readonly srvHistoria : HistoriaService , 
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
        message: 'Error en el servicio de Invitados',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async guardar( dto : CreateInvitadoDto ) {
    try {

      //Comprobar si el codigo ya existe
      const mipPlagaInit = await this.datosModel.findOne({
        where: {
          Nombre : dto.Nombre , IdBoda : dto.IdBoda
        }
      });

      if (mipPlagaInit) throw new BadRequestException('El invitado ya existe' );
      
      const newArea = await this.datosModel.create( dto );
      let dataSave  = await this.datosModel.save( newArea );

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
        message: 'Error en el servicio de Invitados',
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
        message: 'Error en el servicio de Invitados',
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
        "b.Nombre as Novio_a" , 
        "c.Nombre as Nombre" , 
        "c.group_name as Grupo" , 
        "c.Email as Email" , 
        "c.phone as Celular" , 
        "c.max_companions as Adicional" , 
        "c.Estado as Estado" , 
        "c.IdNovio as IdNovio" , 
        "c.IdBoda as IdBoda" , 
        "c.Foto as Foto" , 
      ])
      .innerJoin( "tbl_boda" , "b" , " c.IdBoda = b.id " )
      .innerJoin( "tbl_novios" , "n" , " c.IdNovio = n.id " )
      .where(" c.Estado <> 'anulado' ")
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
        message: 'Error en el servicio de Invitados',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }

  }
  // ...................................................................
  // ...................................................................
  async getListabyIdBoda( IdBoda : number ) {
    try {
      
      // URL_PROYECTO.
      let urlProyeto              = `${process.env.URL_PROYECTO}`;

      let data = await this.datosModel.createQueryBuilder('c')
      .select([ 
        "c.id as id" , 
        "c.Nombre as Nombre" , 
        "c.group_name as Tipo" , 
        `CONCAT( '${urlProyeto}' , c.Foto) as Foto` , 
        "c.Estado as Estado"
      ])
      .where(" c.Estado <> 'anulado' AND c.IdBoda = :IdBoda " , { IdBoda } )
      .getRawMany();

      let dataout: Array<{
        id: number;
        Nombre: string;
        Tipo: string;
        Foto: string;
        Estado : string;
      }> = [];


      for (let index = 0; index < data.length; index++) {
        const rs = data[index];
        let o = {
          id      : parseInt( rs.id ) , 
          Nombre  : rs.Nombre , 
          Tipo    : rs.Tipo , 
          Foto    : rs.Foto , 
          Estado : rs.Estado , 
        };
        dataout.push( o );
      }
  
      return {
        data : dataout , 
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
        message: 'Error en el servicio de Invitados',
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
        message: 'Error en el servicio de Invitados',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  async Actualizar( uuID : string , dto : UpdateInvitadoDto ) {
    try {

      // Primero ver si esta activo o no {-.-}
      let data1 = await this.datosModel.findOne({
        where: {
          uu_id: uuID,
        },
      });

      if( data1!.Estado != 'activo' )throw new HttpException( `Documento no disponible: ${data1!.Estado}` , HttpStatus.CONFLICT);

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
        message: 'Error en el servicio de Invitados',
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
        message: 'Error en el servicio de Invitados',
        cause: error // Mantiene el rastro del error original en logs internos
      });

    }
  }
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async getInvitado( uu_id : string = '' ) {
    try {

      let data = await this.datosModel.createQueryBuilder('i')
      .where(" i.uu_id = :uu_id " , { uu_id } )
      .innerJoin( "tbl_boda" , "b" , " b.id = i.IdBoda " )
      .select([
        "i.id as id" , 
        "i.uu_id as uu_id" , 
        "i.Nombre as Nombre" , 
        "i.max_companions as NComp" , 
        "i.group_name as Grupo" , 
        "i.Estado as Estado" , 
        "b.Nombre" , 
        "b.id as IdBoda" , 
        "i.IdNovio as IdNovio" 
      ])
      .getRawOne();

      if(!data)
        throw new BadRequestException('No existe invitado');
  
      // Data Invitado
      let IdBoda = data.IdBoda;
      // Data Novios
      let dataNovios   = await this.srvNovios.getActivosfromIdBoda( IdBoda );
      // Data Boda
      let dataBoda     = await this.srvBoda.getbyId( IdBoda );
      // Fotos Boda
      let dataFoto     = await this.srvFotos.getFotosBoda( IdBoda );
      // Programa Boda
      let dataPrograma = await this.srvPrograma.getbyBoda( IdBoda );
      // Historia Boda
      let dataHistoria = await this.srvHistoria.getbyBoda( IdBoda );

      return {
        data , novios : dataNovios.data , boda : dataBoda.data , fotos : dataFoto.data , programa : dataPrograma.data , 
        historia : dataHistoria.data , 
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
        message: 'Error en el servicio de Invitados',
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