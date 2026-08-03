import { Injectable } from '@nestjs/common';
import { CreateUsuariosBodaDto } from './dto/create-usuarios_boda.dto';
import { UpdateUsuariosBodaDto } from './dto/update-usuarios_boda.dto';

@Injectable()
export class UsuariosBodaService {
  create(createUsuariosBodaDto: CreateUsuariosBodaDto) {
    return 'This action adds a new usuariosBoda';
  }

  findAll() {
    return `This action returns all usuariosBoda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosBoda`;
  }

  update(id: number, updateUsuariosBodaDto: UpdateUsuariosBodaDto) {
    return `This action updates a #${id} usuariosBoda`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosBoda`;
  }
}
