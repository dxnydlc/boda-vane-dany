import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes, HttpCode, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';






const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import * as express from 'express';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { JwtGuardGuard } from 'src/guards/jwt-guard/jwt-guard.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.hadle';

import * as path from 'path';
import sharp from 'sharp';

// Para activar el auth JwTokenAuth
@UseGuards( JwtGuardGuard )

@ApiTags('Historia')
@ApiBearerAuth()
@UsePipes( new ValidationPipe )




// CreateHistoriaDto | UpdateHistoriaDto
@Controller('historia')
export class HistoriaController {
  //constructor(private readonly historiaService: HistoriaService) {}
  // ................................................................
  // ................................................................
  constructor(
    private readonly historiaService: HistoriaService , 
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
  @Post('upload')
    @UseInterceptors(FileInterceptor('formData', { storage }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
  
      const originalPath    = file.path; // ruta del archivo subido
      const ext             = path.extname(file.filename); // extensión
      const nameOnly        = file.filename.replace(ext, ''); // nombre sin extensión
  
      const resizedName     = `${nameOnly}-200x200${ext}`;
      const resizedPath     = path.join(path.dirname(originalPath), resizedName);
  
      // Crear la versión redimensionada
      await sharp(originalPath)
        .resize(200, 200)
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
    return this.historiaService.getActivos();
  }
  // ................................................................
  // ................................................................
  @Post('guardar')
  @HttpCode(200)
  async guardar(@Body() dto : CreateHistoriaDto , @Req() req : express.Request ) {
    
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
      Estado: 'activo',
      DniUsuarioMod: IdUsuario,
      UsuarioMod: Usuario,
    };

    return this.historiaService.guardar( bodyProocolo );
  }
  // ................................................................
  // ................................................................
  @Get('get-todos')
  @HttpCode(200)
  async getTodos() {
    return this.historiaService.getTodos();
  }
  // ................................................................
  // ................................................................
  @Get('get-by-id/:id')
  @HttpCode(200)
  async getbyId( @Param('id') id : number ) {
    return this.historiaService.getbyId( id );
  }
  // ................................................................
  // ................................................................
  @Patch('actualizar/:uuid')
  @HttpCode(200)
  async Actualizar( @Param('uuid') uuid : string, @Body() dto : UpdateHistoriaDto , @Req() req : express.Request ) {
    
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
    return this.historiaService.Actualizar( uuid , bodyProocolo);
  }
  // ................................................................
  // ................................................................
  @Delete('anular-by-id/:id')
  @HttpCode(200)
  async Anular( @Param('id') id  : number ) {
    return this.historiaService.AnularbyId( id );
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
