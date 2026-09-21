import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateInvitadoPublicoDto {

    @Optional()
    IdInvitado : number = 0

    @Optional()
    id : number = 0

    // ************************************************

    @ApiProperty({
        description : 'Nombre',
        default     : 'Nombre invitado',
    })
    @IsNotEmpty({message : 'Ingrese invitado'})
    Nombre : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Boda',
        default     : '0',
    })
    @IsNotEmpty({message : 'Seleccione Boda'})
    IdBoda : number = 0

    // ************************************************

}
