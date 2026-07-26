import { Module } from '@nestjs/common';
import { UtilidadesService } from './utilidades.service';
import { UtilidadesController } from './utilidades.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers : [UtilidadesController],
  providers   : [UtilidadesService],
  imports     : [
    JwtModule.registerAsync({
      useFactory : () =>{
        return {
          global: true,
          signOptions: { expiresIn: '90d' },
          secret: process.env.JWT_SECRET,
        };
      }
    }),
  ],
  exports     : [ UtilidadesService ],
})
export class UtilidadesModule {}
