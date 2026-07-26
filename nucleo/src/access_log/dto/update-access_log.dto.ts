import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessLogDto } from './create-access_log.dto';

export class UpdateAccessLogDto extends PartialType(CreateAccessLogDto) {}
