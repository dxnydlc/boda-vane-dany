import { PartialType } from '@nestjs/swagger';
import { CreateUsuariosBodaDto } from './create-usuarios_boda.dto';

export class UpdateUsuariosBodaDto extends PartialType(CreateUsuariosBodaDto) {}
