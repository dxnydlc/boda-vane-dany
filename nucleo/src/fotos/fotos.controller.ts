import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes, HttpCode, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';


import sharp from 'sharp';



//import * as moment from 'moment';
//import 'moment/locale/pt-br';

const moment = require('moment');

import { v4 as uuidv4 } from 'uuid';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import * as express from 'express';
import { UtilidadesService } from 'src/utilidades/utilidades.service';
import { JwtGuardGuard } from 'src/guards/jwt-guard/jwt-guard.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/media.hadle';


// Para activar el auth JwTokenAuth
@UseGuards( JwtGuardGuard )

@ApiTags('Fotos')
@ApiBearerAuth()
@UsePipes( new ValidationPipe )


// CreateFotoDto | UpdateFotoDto
@Controller('fotos')
export class FotosController {
  // constructor(private readonly fotosService: FotosService) {}
  // ................................................................
  // ................................................................
  constructor(
    private readonly servicio: FotosService , 
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
  //
  //   * 
  //   * @param formData 
  //   * @param Tipo, IdBoda
  //   * @param req 
  //   * @returns 
  //
    @Post('upload')
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('formData', { storage }))
    async handleUpload( @UploadedFile() file: Express.Multer.File, @Body() body: CreateFotoDto, @Req() req : express.Request ) {
      //
      varDump( `##############################################` );
      varDump( `CARGAR  FOTOS` );
      varDump( `##############################################` );
      const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    
      let Usuario       = '' , IdUsuario = '0';

      let a             = req.user;
      console.log('_____+++', a);
      if( a ){
        IdUsuario       = a['DNI'];
        Usuario         = a['Nombre'];
      }
      console.log( 'Usuario'   , Usuario );
      console.log( 'IdUsuario' , IdUsuario );

    //console.log( headerToken );
    let _URL_PROYECTO           = process.env.URL_PROYECTO;
    let PATH_PROYECTO           = process.env.PATH_PROYECTO;
    console.log('path: ' + _URL_PROYECTO + file.path);
    let filename                = file.filename;
    console.log('filename: ' + file.filename);
    let extension               = file.mimetype;
    extension                   = extension.toLowerCase();
    let reAncho                 = 140;
    let reAlto                  = 140;
    console.log(`MimeType: ${extension}`);


    // Origin: https://stackoverflow.com/questions/10865347/node-js-get-file-extension
    let extFile = filename
      .split('.')
      .filter(Boolean) // removes empty extensions (e.g. `filename...txt`)
      .slice(1)
      .join('.');
    console.log(`Extensión: ${extFile}`);

    let urlThumb          = `uploads/${file.filename}`;
    let url_compress      = `uploads/${file.filename}`;
    let foto_quemada      = `uploads/${file.filename}`;

    let RutaFisica        = `uploads/${file.filename}`;
    let RutaThumb         = `uploads/thumbnails-${file.filename}`;
    let pathThumb         = `${PATH_PROYECTO}public/${RutaThumb}`;
    varDump( pathThumb );


    let xUrl              = `uploads/${file.filename}`;

    switch (extFile.toLocaleLowerCase()) {
      case 'jpg':
      case 'png':
      case 'jpeg':
        urlThumb          = `uploads/thumbnails-${file.filename}`;
        url_compress      = `uploads/thumbnails-${file.filename}`;
        if( body.Tipo == 'Momentos' ){
          reAncho                 = 600;
          reAlto                  = 650;
        }
        await sharp(PATH_PROYECTO + file.path).resize( reAncho , reAlto ).toFile( pathThumb , (err, resizeImage) => {
          if (err) {
            console.log(err);
          } else {
            console.log(resizeImage);
          }
        });
        // Quemar foto

        break;
        // =========================================
    }

    let _data = {
      uu_id               : uuidv4() , 
      RutaFisica          : RutaFisica , 
      RutaThumb           : RutaThumb , 
      Tipo                : body.Tipo , 
      IdBoda              : body.IdBoda , 
      NombreArchivo       : file.originalname , 
      Peso                : file.size , 
      NombreFisico        : file.filename , 
      Extension           : extFile , 
      Url                 : xUrl , 
      urlThumb            : urlThumb , 
      Estado              : 'activo' , 
      created_at          : createdAt , 
      updated_at          : createdAt , 
      DniUsuarioMod       : IdUsuario , 
      UsuarioMod          : Usuario , 
    };
    return this.servicio.cargar(_data);
    }
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
  async guardar(@Body() dto : CreateFotoDto , @Req() req : express.Request ) {
    
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
  async Actualizar( @Param('uuid') uuid : string, @Body() dto : UpdateFotoDto , @Req() req : express.Request ) {
    
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
// ...................................................................
function varDump( e ){
  console.log( e );
}
// ...................................................................