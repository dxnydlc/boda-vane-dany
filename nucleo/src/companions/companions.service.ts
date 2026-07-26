import { Injectable } from '@nestjs/common';
import { CreateCompanionDto } from './dto/create-companion.dto';
import { UpdateCompanionDto } from './dto/update-companion.dto';

@Injectable()
export class CompanionsService {
  create(createCompanionDto: CreateCompanionDto) {
    return 'This action adds a new companion';
  }

  findAll() {
    return `This action returns all companions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companion`;
  }

  update(id: number, updateCompanionDto: UpdateCompanionDto) {
    return `This action updates a #${id} companion`;
  }

  remove(id: number) {
    return `This action removes a #${id} companion`;
  }
}
