import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvitadosModule } from './invitados/invitados.module';
import { RsvpModule } from './rsvp/rsvp.module';
import { CompanionsModule } from './companions/companions.module';
import { AccessLogModule } from './access_log/access_log.module';
import { UsersModule } from './users/users.module';
import { EventosModule } from './eventos/eventos.module';
import { AdminLogModule } from './admin_log/admin_log.module';

import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import { UtilidadesModule } from './utilidades/utilidades.module';
import { NoviosModule } from './novios/novios.module';
import { BodaModule } from './boda/boda.module';
import { UsuariosBodaModule } from './usuarios_boda/usuarios_boda.module';
import { MesasCabModule } from './mesas_cab/mesas_cab.module';
import { MesasDetModule } from './mesas_det/mesas_det.module';
import { PublicModule } from './public/public.module';
import { ProgramaModule } from './programa/programa.module';
import { HistoriaModule } from './historia/historia.module';
import { FotosModule } from './fotos/fotos.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),//para llamar al index.html de public
    }),
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_host,
      port: 3306,
      username: process.env.DB_user,
      password: process.env.DB_password,
      database: process.env.DB_database,
      entities: [__dirname + '/**/*entity{.ts,.js}'],
      //logging  : true
    }),
    InvitadosModule, RsvpModule, CompanionsModule, AccessLogModule, UsersModule, EventosModule, AdminLogModule, AuthModule, UtilidadesModule, NoviosModule, BodaModule, UsuariosBodaModule, MesasCabModule, MesasDetModule, PublicModule, ProgramaModule, HistoriaModule, FotosModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
