import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateUserDto {

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
