import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanionsService } from './companions.service';
import { CreateCompanionDto } from './dto/create-companion.dto';
import { UpdateCompanionDto } from './dto/update-companion.dto';

@Controller('companions')
export class CompanionsController {
  constructor(private readonly companionsService: CompanionsService) {}

  @Post()
  create(@Body() createCompanionDto: CreateCompanionDto) {
    return this.companionsService.create(createCompanionDto);
  }

  @Get()
  findAll() {
    return this.companionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanionDto: UpdateCompanionDto) {
    return this.companionsService.update(+id, updateCompanionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companionsService.remove(+id);
  }
}
