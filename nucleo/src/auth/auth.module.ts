import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UtilidadesModule } from 'src/utilidades/utilidades.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy ],
  imports : [
    JwtModule.registerAsync({
      useFactory : () =>{
        return {
          global: true,
          signOptions: { expiresIn: '180d' },
          secret: process.env.JWT_SECRET,
        };
      }
    }),
    UsersModule , 
    UtilidadesModule , 
  ],
})
export class AuthModule {}
