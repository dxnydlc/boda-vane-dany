import { Module } from '@nestjs/common';
import { ProgramaService } from './programa.service';
import { ProgramaController } from './programa.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramaModel } from './entities/programa.entity';

@Module({
  controllers: [ProgramaController],
  providers: [ProgramaService],
  imports : [
    TypeOrmModule.forFeature([
      ProgramaModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [ProgramaService],

})
export class ProgramaModule {}
