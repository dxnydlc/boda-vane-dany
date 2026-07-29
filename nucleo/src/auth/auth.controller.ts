import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')




@Controller('auth')
export class AuthController {
  // ...................................................................
  // ...................................................................
  constructor(private readonly authService: AuthService) {}
  // ...................................................................
  // ...................................................................
  @Post('login')
  @HttpCode(200)
  create(@Body() dto : LoginAuthDto) {
    return this.authService.login( dto );
  }
  // ...................................................................
  // ...................................................................
  @Post('registrar')
  @HttpCode(200)
  async Registar(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.registrar(createAuthDto);
  }
  // ...................................................................
  // ...................................................................
}
