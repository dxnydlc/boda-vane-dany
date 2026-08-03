import { Module } from '@nestjs/common';
import { UsuariosBodaService } from './usuarios_boda.service';
import { UsuariosBodaController } from './usuarios_boda.controller';

@Module({
  controllers: [UsuariosBodaController],
  providers: [UsuariosBodaService],
})
export class UsuariosBodaModule {}
