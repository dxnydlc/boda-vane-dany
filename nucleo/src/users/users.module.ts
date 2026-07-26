import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports : [
    TypeOrmModule.forFeature([
      UserModel 
    ]) , 
    UtilidadesModule , 
  ],
  exports     : [UsersService],
})
export class UsersModule {}
