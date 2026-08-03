import { Module } from '@nestjs/common';
import { NoviosService } from './novios.service';
import { NoviosController } from './novios.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { NovioModel } from './entities/novio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [NoviosController],
  providers: [NoviosService],
  imports : [
    TypeOrmModule.forFeature([
      NovioModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [ NoviosService ],
})
export class NoviosModule {}
