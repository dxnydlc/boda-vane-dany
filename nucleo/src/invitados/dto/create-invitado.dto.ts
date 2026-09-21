import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateInvitadoDto {

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
