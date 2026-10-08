import { PartialType } from '@nestjs/swagger';
import { CreateTareasDetDto } from './create-tareas_det.dto';

export class UpdateTareasDetDto extends PartialType(CreateTareasDetDto) {}
