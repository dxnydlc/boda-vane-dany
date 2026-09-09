import { Module } from '@nestjs/common';
import { InvitadosService } from './invitados.service';
import { InvitadosController } from './invitados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { InvitadoModel } from './entities/invitado.entity';

@Module({
  controllers: [InvitadosController],
  providers: [InvitadosService],
  imports : [
    TypeOrmModule.forFeature([
      InvitadoModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [InvitadosService],
})
export class InvitadosModule {}
