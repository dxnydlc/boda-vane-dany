import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, UsePipes, HttpCode, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BodaService } from './boda.service';
import { CreateBodaDto } from './dto/create-boda.dto';
import { UpdateBodaDto } from './dto/update-boda.dto';




//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import * as express from 'express';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { JwtGuardGuard } from 'src/guards/jwt-guard/jwt-guard.guard';


import { Multer } from 'multer'; // Importa el tipo si es necesario
import { storage } from 'src/utils/media.hadle';
import * as path from 'path';
import sharp from 'sharp';
import { FileInterceptor } from '@nestjs/platform-express';

// Para activar el auth JwTokenAuth..
@UseGuards( JwtGuardGuard )

@ApiTags('Boda')
@ApiBearerAuth()
@UsePipes( new ValidationPipe )



// CreateBodaDto | UpdateBodaDto
@Controller('boda')
export class BodaController {
  // constructor(private readonly bodaService: BodaService) {}
  // ................................................................
  // ................................................................
  constructor(
    private readonly bodaService: BodaService , 
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
  @Post('musica')
  @UseInterceptors( FileInterceptor('formData', { storage }))
  async uploadMusica( @UploadedFile() file: Express.Multer.File) {

    // 1200 x 630 píxeles

    const originalPath    = file.path; // ruta del archivo subido
    const ext             = path.extname(file.filename); // extensión
    const nameOnly        = file.filename.replace(ext, ''); // nombre sin extensión

    const resizedName     = `${nameOnly}-200x200${ext}`;
    const resizedPath     = path.join(path.dirname(originalPath), resizedName);

    return {
      message   : 'Archivo subido y redimensionado',
      original  : `uploads/${file.filename}`,
      resized   : `uploads/${resizedName}`,
      resizedPath
    };
  }
  // ................................................................
  // ................................................................
  // ................................................................
  // ................................................................
  @Post('upload')
  @UseInterceptors( FileInterceptor('formData', { storage }))
  async uploadFile( @UploadedFile() file: Express.Multer.File) {

    // 1200 x 630 píxeles

    const originalPath    = file.path; // ruta del archivo subido
    const ext             = path.extname(file.filename); // extensión
    const nameOnly        = file.filename.replace(ext, ''); // nombre sin extensión

    const resizedName     = `${nameOnly}-200x200${ext}`;
    const resizedPath     = path.join(path.dirname(originalPath), resizedName);

    // Crear la versión redimensionada
    await sharp(originalPath)
      .resize(1200 , 630 )
      .toFile(resizedPath);

    return {
      message   : 'Archivo subido y redimensionado',
      original  : `uploads/${file.filename}`,
      resized   : `uploads/${resizedName}`,
      resizedPath
    };
  }
  // ................................................................
  // ................................................................
  @Get('get-activos')
  @HttpCode(200)
  async getActivos() {
    return this.bodaService.getActivos();
  }
  // ................................................................-
  // ................................................................
  // ................................................................
  // ................................................................
  @Post('guardar')
  @HttpCode(200)
  async guardar(@Body() dto : CreateBodaDto , @Req() req : express.Request ) {
    
    const createdAt   = moment().format('YYYY-MM-DD HH:mm:ss');
    let Usuario       = '' , IdUsuario = '0' , IdU = '0';

    let a             = req.user;
    console.log('_____+++', a);
    if( a ){
      IdUsuario       = a['DNI'];
      Usuario         = a['Nombre'];
      IdU             = a["id"]
    }
    console.log( 'Usuario'   , Usuario );
    console.log( 'IdUsuario' , IdUsuario );

    const bodyProocolo = {
      ...dto , 
      created_at : createdAt , 
      updated_at : createdAt , 
      Estado: 'activo',
      DniUsuarioMod: IdUsuario,
      UsuarioMod: Usuario,
      IdUsuario : IdU , 
    };

    console.log( bodyProocolo );

    return this.bodaService.guardar( bodyProocolo );
  }
  // ................................................................
  // ................................................................
  @Get('get-todos')
  @HttpCode(200)
  async getTodos() {
    return this.bodaService.getTodos();
  }
  // ................................................................
  // ................................................................
  @Get('get-by-id/:id')
  @HttpCode(200)
  async getbyId( @Param('id') id : number ) {
    return this.bodaService.getbyId( id );
  }
  // ................................................................
  // ................................................................
  @Patch('actualizar/:uuid')
  @HttpCode(200)
  async Actualizar( @Param('uuid') uuid : string, @Body() dto : UpdateBodaDto , @Req() req : express.Request ) {
    
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
    return this.bodaService.Actualizar( uuid , bodyProocolo);
  }
  // ................................................................
  // ................................................................
  @Delete('anular-by-id/:id')
  @HttpCode(200)
  async Anular( @Param('id') id  : number ) {
    return this.bodaService.AnularbyId( id );
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
