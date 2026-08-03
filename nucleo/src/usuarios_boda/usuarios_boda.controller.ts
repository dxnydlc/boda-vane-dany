import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosBodaService } from './usuarios_boda.service';
import { CreateUsuariosBodaDto } from './dto/create-usuarios_boda.dto';
import { UpdateUsuariosBodaDto } from './dto/update-usuarios_boda.dto';

@Controller('usuarios-boda')
export class UsuariosBodaController {
  constructor(private readonly usuariosBodaService: UsuariosBodaService) {}

  @Post()
  create(@Body() createUsuariosBodaDto: CreateUsuariosBodaDto) {
    return this.usuariosBodaService.create(createUsuariosBodaDto);
  }

  @Get()
  findAll() {
    return this.usuariosBodaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosBodaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosBodaDto: UpdateUsuariosBodaDto) {
    return this.usuariosBodaService.update(+id, updateUsuariosBodaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosBodaService.remove(+id);
  }
}
