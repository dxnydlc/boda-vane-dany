import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { comprareHash, generateHash } from 'src/utils/handleBcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  // ...................................................................
  // ...................................................................
  constructor(
    private readonly jwtService :  JwtService , 
    private srvUser : UsersService , 
  ){}
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  // ...................................................................
  async login(dto : LoginAuthDto) {

    try {

      let { Password_hash , Email , DNI } = dto;

      let dataUsuario = await this.srvUser.login( dto );

      if(! dataUsuario ) throw new HttpException( 'Usuario no existe' , HttpStatus.BAD_REQUEST );

      const isCheck = await comprareHash( Password_hash , dataUsuario.Password_hash );
      if(! isCheck ) throw new HttpException( 'Contraseña incorrecta' , HttpStatus.BAD_REQUEST );

      let userFlat = dataUsuario;
      if( dataUsuario ){
        //
      }

      // Payload
      const payLoad = {
        id        : dataUsuario.id ,
        DNI       : dataUsuario.DNI ,

        Nombre    : `${dataUsuario.Nombre.toUpperCase()}` ,
        Roles     : dataUsuario.Rol
      };
      const token = this.jwtService.sign( payLoad );
      const data = {
        token ,
        user : {
          id        : dataUsuario.id ,
          DNI       : dataUsuario.DNI ,
          Nombre    : `${dataUsuario.Nombre.toUpperCase()}` ,
          Roles     : dataUsuario.Rol
        }
      };

      return {
        data : data ,
        version : '1' ,
        msg : { titulo : 'Correcto' , texto : 'Registros cargados' , clase : 'success' , call : 'tostada2' }
      }

    } catch (error) {

      varDump( error );
      throw new HttpException( 'error' , HttpStatus.CONFLICT );

    }

  }
  // ...................................................................
  // ...................................................................
  async registrar( dto : CreateAuthDto ) {
    let { Password_hash } = dto;

    let Encriptado = await generateHash( Password_hash );

    dto.Password_hash = Encriptado;

    return await this.srvUser.guardar( dto );

  }
  // ...................................................................
  // ...................................................................
}
// ...................................................................
function varDump( e ){
  console.log( e );
}
// ...................................................................
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// ...................................................................
function Dump1( e , color )
{
// rojo, verde, amarillo, negrita_verde, negrita_verde_u
switch ( color ) {
    case 'rojo':
    console.log(  e.red );
    break;
    case 'verde':
    console.log(  e.green );
    break;
    case 'amarillo':
    console.log(  e.yellow );
    break;
    case 'negrita_verde':
    console.log(  e.green );
    break;
    case 'negrita_verde_u':
    console.log(  e.green.bold );
    break;
    default:
    //
    break;
}
}
// ..............................................................................