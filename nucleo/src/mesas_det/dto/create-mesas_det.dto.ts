import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateMesasDetDto {

    // ************************************************

    @ApiProperty({
        description : 'IdMesa',
        default     : '2',
    })
    @IsNotEmpty({message : 'Ingrese IdMesa'})
    IdMesa : number = 0

    // ************************************************

    @ApiProperty({
        description : 'IdInvitado',
        default     : '1',
    })
    @IsNotEmpty({message : 'Ingrese IdInvitado'})
    IdInvitado : number = 0

    // ************************************************

}
