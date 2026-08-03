import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateNovioDto {

    @Optional()
    IdBoda :  number = 0;

    @Optional()
    Tipo : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Tipo',
        default     : 'Monitoreo',
    })
    @IsNotEmpty({message : 'Ingrese Tipo'})
    Nombre : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Descripcion',
        default     : 'Monitoreo',
    })
    @IsNotEmpty({message : 'Ingrese Tipo'})
    DNI! : string

    // ************************************************

}
