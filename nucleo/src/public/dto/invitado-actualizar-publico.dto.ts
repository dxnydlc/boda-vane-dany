import { PartialType } from '@nestjs/mapped-types';
import { CreateInvitadoPublicoDto } from './invitado-publico.dto';


export class UpdateInvitadoDto extends PartialType(CreateInvitadoPublicoDto) {}