import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MinLength } from "class-validator"

export class LoginAuthDto {

  // ************************************************
  
  @ApiProperty({
      description : 'DNI',
      default     : '12452365',
  })
  @IsNotEmpty({message : 'Ingrese DNI'})
  DNI!: string

  // ************************************************

  @ApiProperty({
      description : 'Email',
      default     : 'aaa@aa.com',
  })
  @IsNotEmpty({message : 'Ingrese Email'})
  Email! : string

  // ************************************************

  @ApiProperty({
      description : 'Contraseña',
      default     : '123456789',
  })
  @IsNotEmpty({message : 'Ingrese Contraseña'})
  Password_hash!: string

  // ************************************************

}