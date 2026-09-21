import { Module } from '@nestjs/common';
import { MesasDetService } from './mesas_det.service';
import { MesasDetController } from './mesas_det.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesasDetModel } from './entities/mesas_det.entity';

@Module({
  controllers: [MesasDetController],
  providers: [MesasDetService],
  imports : [
    TypeOrmModule.forFeature([
      MesasDetModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [MesasDetService],
})
export class MesasDetModule {}
