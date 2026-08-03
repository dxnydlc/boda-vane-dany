import { PartialType } from '@nestjs/swagger';
import { CreateBodaDto } from './create-boda.dto';

export class UpdateBodaDto extends PartialType(CreateBodaDto) {}
