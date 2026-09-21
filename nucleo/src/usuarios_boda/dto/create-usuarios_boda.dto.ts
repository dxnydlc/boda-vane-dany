import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateUsuariosBodaDto {

    // ************************************************

    @ApiProperty({
        description : 'IdBoda',
        default     : '0',
    })
    @IsNotEmpty({message : 'Ingrese IdBoda'})
    IdBoda : number = 0 

    // ************************************************

    @ApiProperty({
        description : 'IdUsuario',
        default     : '12345678',
    })
    @IsNotEmpty({message : 'Ingrese IdUsuario'})
    IdUsuario : number = 0

    // ************************************************

}
