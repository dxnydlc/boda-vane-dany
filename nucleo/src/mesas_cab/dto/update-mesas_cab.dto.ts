import { PartialType } from '@nestjs/swagger';
import { CreateMesasCabDto } from './create-mesas_cab.dto';

export class UpdateMesasCabDto extends PartialType(CreateMesasCabDto) {}
