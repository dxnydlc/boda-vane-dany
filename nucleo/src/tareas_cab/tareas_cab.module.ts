import { Module } from '@nestjs/common';
import { TareasCabService } from './tareas_cab.service';
import { TareasCabController } from './tareas_cab.controller';
import { TareasCabModel } from './entities/tareas_cab.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';

@Module({
  controllers: [TareasCabController],
  providers: [TareasCabService],
  imports : [
    TypeOrmModule.forFeature([
      TareasCabModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [ TareasCabService ],
})
export class TareasCabModule {}
