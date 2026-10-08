import { PartialType } from '@nestjs/swagger';
import { CreateTareasCabDto } from './create-tareas_cab.dto';

export class UpdateTareasCabDto extends PartialType(CreateTareasCabDto) {}
