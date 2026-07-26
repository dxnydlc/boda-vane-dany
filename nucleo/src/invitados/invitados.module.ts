import { Module } from '@nestjs/common';
import { InvitadosService } from './invitados.service';
import { InvitadosController } from './invitados.controller';

@Module({
  controllers: [InvitadosController],
  providers: [InvitadosService],
})
export class InvitadosModule {}
