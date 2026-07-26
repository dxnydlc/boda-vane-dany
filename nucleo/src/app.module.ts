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
    InvitadosModule, RsvpModule, CompanionsModule, AccessLogModule, UsersModule, EventosModule, AdminLogModule, AuthModule, UtilidadesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
