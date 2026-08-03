import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateBodaDto {

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
