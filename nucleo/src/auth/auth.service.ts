import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
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
  async login(dto: LoginAuthDto) {
  try {
    const { Password_hash, Email, DNI } = dto;

    // 1. Buscar usuario
    const dataUsuario = await this.srvUser.login(Email, DNI);
    if (!dataUsuario) {
      throw new BadRequestException('Usuario no existe');
    }

    // 2. Verificar contraseña
    const isCheck = await comprareHash(Password_hash, dataUsuario.Password_hash);
    if (!isCheck) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    // 3. Generar Payload y Token
    const nombreMayuscula = dataUsuario.Nombre.toUpperCase();
    const payLoad = {
      id: dataUsuario.id,
      DNI: dataUsuario.DNI,
      Nombre: nombreMayuscula,
      Roles: dataUsuario.Rol
    };
    
    const token = this.jwtService.sign(payLoad);

    // 4. Retornar respuesta exitosa..
    return {
      data: {
        token,
        user: {
          id: dataUsuario.id,
          DNI: dataUsuario.DNI,
          Nombre: nombreMayuscula,
          Roles: dataUsuario.Rol
        }
      },
      version: '1',
      msg: { titulo: 'Correcto', texto: 'Acceso correcto', clase: 'success', call: 'tostada2' }
    };

  } catch (error) {
    // Para depuración local
    varDump(error); 

    // SI EL ERROR YA ES DE NESTJS (ej. BadRequestException), LO RELANZAMOS DIRECTO
    if (error instanceof HttpException) {
      throw error;
    }

    // SI ES UN ERROR INESPERADO (ej. caída de BD, error de sintaxis), ENVIAMOS UN 500
    throw new InternalServerErrorException({
      message: 'Error en el servicio de autenticación',
      cause: error // Mantiene el rastro del error original en logs internos
    });
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