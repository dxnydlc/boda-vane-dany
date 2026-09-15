import { Module } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { HistoriaController } from './historia.controller';
import { HistoriaModel } from './entities/historia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';

@Module({
  controllers: [HistoriaController],
  providers: [HistoriaService],
  imports : [
    TypeOrmModule.forFeature([
      HistoriaModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [HistoriaService],
})
export class HistoriaModule {}
