import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateBodaDto {

    @Optional()
    Musica : string = ''

    @Optional()
    id : number = 0

    // ************************************************

    @ApiProperty({
        description : 'Nombre',
        default     : 'Nombre',
    })
    @IsNotEmpty({message : 'Ingrese Nombre'})
    Nombre! : string

    // ************************************************

    @ApiProperty({
        description : 'Fecha',
        default     : 'Fecha',
    })
    @IsNotEmpty({message : 'Ingrese Fecha'})
    Fecha! : string

    // ************************************************

}
