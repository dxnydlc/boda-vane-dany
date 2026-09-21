import { PartialType } from '@nestjs/swagger';
import { CreateHistoriaDto } from './create-historia.dto';

export class UpdateHistoriaDto extends PartialType(CreateHistoriaDto) {}
