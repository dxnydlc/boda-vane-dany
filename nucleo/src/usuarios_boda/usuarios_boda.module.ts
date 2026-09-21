import { Module } from '@nestjs/common';
import { UsuariosBodaService } from './usuarios_boda.service';
import { UsuariosBodaController } from './usuarios_boda.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { UsuariosBodaModel } from './entities/usuarios_boda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsuariosBodaController],
  providers: [UsuariosBodaService],
  imports : [
    TypeOrmModule.forFeature([
      UsuariosBodaModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [UsuariosBodaService],

})
export class UsuariosBodaModule {}
