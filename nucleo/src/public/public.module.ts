import { Module } from '@nestjs/common';
import { PublicService } from './public.service';
import { PublicController } from './public.controller';
import { InvitadosModule } from 'src/invitados/invitados.module';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';

@Module({
  controllers : [PublicController],
  providers   : [PublicService],
  imports     : [
    InvitadosModule , 
    UtilidadesModule , 
  ],
  exports     : [PublicService],
})
export class PublicModule {}
