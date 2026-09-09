import { PartialType } from '@nestjs/swagger';
import { CreateMesasDetDto } from './create-mesas_det.dto';

export class UpdateMesasDetDto extends PartialType(CreateMesasDetDto) {}
