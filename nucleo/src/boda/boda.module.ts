import { Module } from '@nestjs/common';
import { BodaService } from './boda.service';
import { BodaController } from './boda.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { BodaModel } from './entities/boda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BodaController],
  providers: [BodaService],
  imports : [
    TypeOrmModule.forFeature([
      BodaModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [BodaService],
})
export class BodaModule {}
