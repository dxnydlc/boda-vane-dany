import { Module } from '@nestjs/common';
import { MesasCabService } from './mesas_cab.service';
import { MesasCabController } from './mesas_cab.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { MesasCabModel } from './entities/mesas_cab.entity';
import { MesasDetModule } from 'src/mesas_det/mesas_det.module';

@Module({
  controllers: [MesasCabController],
  providers: [MesasCabService],
  imports : [
    TypeOrmModule.forFeature([
      MesasCabModel 
    ]) , 
    UtilidadesModule , 
    MesasDetModule , 
  ],
  exports     : [MesasCabService],
})
export class MesasCabModule {}
