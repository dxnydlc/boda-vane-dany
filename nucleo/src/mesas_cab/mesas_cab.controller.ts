import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, UsePipes, HttpCode, Req } from '@nestjs/common';
import { MesasCabService } from './mesas_cab.service';
import { CreateMesasCabDto } from './dto/create-mesas_cab.dto';
import { UpdateMesasCabDto } from './dto/update-mesas_cab.dto';


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

@ApiTags('Datos')
@ApiBearerAuth()
@UsePipes( new ValidationPipe )


// CreateMesasCabDto | UpdateMesasCabDto
@Controller('mesas-cab')
export class MesasCabController {
  // constructor(private readonly mesasCabService: MesasCabService) {}
  // ................................................................
  // ................................................................
  constructor(
    private readonly mesasCabService: MesasCabService , 
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
  @Post('nro-invitados')
  @HttpCode(200)
  async setInvitados( @Body('IdMesa') IdMesa : number , @Body('Cantidad') Cantidad : number )
  {
    return this.mesasCabService.setNroInvitados( IdMesa , Cantidad );
  }
  // ................................................................
  // ................................................................
  @Post('color')
  @HttpCode(200)
  async setColor( @Body('IdMesa') IdMesa : number , @Body('Color') Color : string )
  {
    return this.mesasCabService.setColor( IdMesa , Color );
  }
  // ................................................................
  // ................................................................
  @Get('get-lista/:IdBoda')
  @HttpCode(200)
  async getMesasBoda( @Param('IdBoda') IdBoda : number = 0 ) {
    return this.mesasCabService.getMesas( IdBoda );
  }
  // ................................................................
  // ................................................................
  @Post('guardar')
  @HttpCode(200)
  async guardar(@Body() dto : CreateMesasCabDto , @Req() req : express.Request ) {
    
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

    return this.mesasCabService.guardar( bodyProocolo );
  }
  // ................................................................
  // ................................................................
  @Get('get-todos')
  @HttpCode(200)
  async getTodos() {
    return this.mesasCabService.getTodos();
  }
  // ................................................................
  // ................................................................
  @Get('get-by-id/:id')
  @HttpCode(200)
  async getbyId( @Param('id') id : number ) {
    return this.mesasCabService.getbyId( id );
  }
  // ................................................................
  // ................................................................
  @Patch('actualizar/:uuid')
  @HttpCode(200)
  async Actualizar( @Param('uuid') uuid : string, @Body() dto : UpdateMesasCabDto , @Req() req : express.Request ) {
    
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
    return this.mesasCabService.Actualizar( uuid , bodyProocolo);
  }
  // ................................................................
  // ................................................................
  @Delete('anular-by-id/:id')
  @HttpCode(200)
  async Anular( @Param('id') id  : number ) {
    return this.mesasCabService.AnularbyId( id );
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
