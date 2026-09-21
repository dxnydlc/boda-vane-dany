
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
//import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest    : ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration  : false,
      secretOrKey       : `${process.env.JWT_SECRET}`,
    });
  }

  async validate(payload: any) {
    // Esto se define en: auth.service.ts
    return {
        id          : payload.id ,
        DNI         : payload.DNI ,
        IdCompany   : payload.IdCompany ,
        Nombre      : payload.Nombre ,
        rol         : payload.Roles ,
    };
  }
}