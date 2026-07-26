import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { ValidationPipe, VersioningType } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create(AppModule , {
    cors : true
  });

  app.use(json({limit: '60mb'}));

  //Version
  app.enableVersioning({
    defaultVersion : '1' ,
    type : VersioningType.URI
  });

  const config = new DocumentBuilder()
    .setTitle('Boda de Dany y Vane')
    .setDescription('Boda.pe API description')
    .setVersion('1.0')
    .addTag('Usuarios')
    .addTag('Auth')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, documentFactory);

  app.useGlobalPipes( new ValidationPipe() );

  console.log(`___env___ ${process.env.PUERTO}`);

  await app.listen(process.env.PUERTO ?? 3000);
}
bootstrap();
