import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuardGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

canActivate(context: ExecutionContext): boolean {
  // Pass the decorator reference and the execution context handler
  const roles = this.reflector.get('rol', context.getHandler());

  console.log(roles); // Output: ['admin', 'manager']

  const req         = context.getArgByIndex(0);
  let {rol}         = req.user;
  console.log('__ROLES__', rol );

  let arRoles = rol.split(',');

  const isAllow = arRoles.some((rol) => roles.includes(rol) );


  return isAllow;
}
}
