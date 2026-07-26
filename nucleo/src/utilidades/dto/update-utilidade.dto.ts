import { PartialType } from '@nestjs/swagger';
import { CreateUtilidadeDto } from './create-utilidade.dto';

export class UpdateUtilidadeDto extends PartialType(CreateUtilidadeDto) {}
