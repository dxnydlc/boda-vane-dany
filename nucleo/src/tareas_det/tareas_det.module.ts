import { Module } from '@nestjs/common';
import { TareasDetService } from './tareas_det.service';
import { TareasDetController } from './tareas_det.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { TareasDetModel } from './entities/tareas_det.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TareasDetController],
  providers: [TareasDetService],
  imports : [
    TypeOrmModule.forFeature([
      TareasDetModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [ TareasDetService ],
})
export class TareasDetModule {}
