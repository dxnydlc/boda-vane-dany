import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminLogDto } from './create-admin_log.dto';

export class UpdateAdminLogDto extends PartialType(CreateAdminLogDto) {}
