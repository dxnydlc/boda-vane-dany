import { Module } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { FotosController } from './fotos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { FotoModel } from './entities/foto.entity';

@Module({
  controllers: [FotosController],
  providers: [FotosService],
  imports : [
    TypeOrmModule.forFeature([
      FotoModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [FotosService],
})
export class FotosModule {}
