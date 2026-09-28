import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {

    @IsOptional()
    @IsString()
    Password_hash?: string; // Se recibe como 'password' y es de solo lectura

    // ************************************************

    @ApiProperty({
        description : 'Nombre',
        default     : 'Nombre',
    })
    @IsNotEmpty({message : 'Ingrese Nombre'})
    Nombre! : string

    // ************************************************

    @ApiProperty({
        description : 'Email',
        default     : 'Email',
    })
    @IsNotEmpty({message : 'Ingrese Email'})
    Email! : string

    // ************************************************

    @ApiProperty({
        description : 'DNI',
        default     : 'DNI',
    })
    @IsNotEmpty({message : 'Ingrese DNI'})
    DNI! : string

    // ************************************************

}
