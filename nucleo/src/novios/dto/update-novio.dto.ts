import { PartialType } from '@nestjs/swagger';
import { CreateNovioDto } from './create-novio.dto';

export class UpdateNovioDto extends PartialType(CreateNovioDto) {}
