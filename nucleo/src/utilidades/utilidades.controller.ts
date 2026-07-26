import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilidadesService } from './utilidades.service';
import { CreateUtilidadeDto } from './dto/create-utilidade.dto';
import { UpdateUtilidadeDto } from './dto/update-utilidade.dto';

@Controller('utilidades')
export class UtilidadesController {
  constructor(private readonly utilidadesService: UtilidadesService) {}

  
}
