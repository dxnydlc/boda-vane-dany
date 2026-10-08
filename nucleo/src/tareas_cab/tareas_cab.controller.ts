import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes, HttpCode, Req } from '@nestjs/common';
import { TareasCabService } from './tareas_cab.service';
import { CreateTareasCabDto } from './dto/create-tareas_cab.dto';
import { UpdateTareasCabDto } from './dto/update-tareas_cab.dto';




//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import * as express from 'express';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { JwtGuardGuard } from 'src/guards/jwt-guard/jwt-guard.guard';


// Para activar el auth JwTokenAuth
@UseGuards( JwtGuardGuard )

@ApiTags('Tareas')
@ApiBearerAuth()
@UsePipes( new ValidationPipe )



// CreateTareasCabDto | UpdateTareasCabDto
@Controller('tareas-cab')
export class TareasCabController {
  //constructor(private readonly tareasCabService: TareasCabService) {}
  // ................................................................
  // ................................................................
  constructor(
    private readonly servicio: TareasCabService , 
    private readonly util : UtilidadesService , 
  ) {}
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // private readonly util : UtilidadesService , 
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  @Get('get-activos')
  @HttpCode(200)
  async getActivos() {
    return this.servicio.getActivos();
  }
  // ................................................................
  // ................................................................
  @Post('guardar')
  @HttpCode(200)
  async guardar(@Body() dto : CreateTareasCabDto , @Req() req : express.Request ) {
    
    const createdAt   = moment().format('YYYY-MM-DD HH:mm:ss');
    let Usuario       = '' , IdUsuario = '0';

    let a             = req.user;
    console.log('_____+++', a);
    if( a ){
      IdUsuario       = a['DNI'];
      Usuario         = a['Nombre'];
    }
    console.log( 'Usuario'   , Usuario );
    console.log( 'IdUsuario' , IdUsuario );

    const bodyProocolo = {
      ...dto , 
      created_at : createdAt , 
      updated_at : createdAt , 
      Estado: 'Activo',
      DniUsuarioMod: IdUsuario,
      UsuarioMod: Usuario,
    };

    return this.servicio.guardar( bodyProocolo );
  }
  // ................................................................
  // ................................................................
  @Get('get-todos')
  @HttpCode(200)
  async getTodos() {
    return this.servicio.getTodos();
  }
  // ................................................................
  // ................................................................
  @Get('get-by-id/:id')
  @HttpCode(200)
  async getbyId( @Param('id') id : number ) {
    return this.servicio.getbyId( id );
  }
  // ................................................................
  // ................................................................
  @Patch('actualizar/:uuid')
  @HttpCode(200)
  async Actualizar( @Param('uuid') uuid : string, @Body() dto : UpdateTareasCabDto , @Req() req : express.Request ) {
    
    const createdAt   = moment().format('YYYY-MM-DD HH:mm:ss');
    let Usuario       = '' , IdUsuario = '0';

    let a             = req.user;
    console.log('_____+++', a);
    if( a ){
      IdUsuario       = a['DNI'];
      Usuario         = a['Nombre'];
    }
    console.log( 'Usuario'   , Usuario );
    console.log( 'IdUsuario' , IdUsuario );

    const bodyProocolo = {
      ...dto , 
      updated_at : createdAt , 
      DniUsuarioMod: IdUsuario,
      UsuarioMod: Usuario,
    };
    return this.servicio.Actualizar( uuid , bodyProocolo);
  }
  // ................................................................
  // ................................................................
  @Delete('anular-by-id/:id')
  @HttpCode(200)
  async Anular( @Param('id') id  : number ) {
    return this.servicio.AnularbyId( id );
  }
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
}
