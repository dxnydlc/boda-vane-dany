import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateFotoDto {

    // ************************************************

    /*@ApiProperty({
        description : 'NombreArchivo',
        default     : 'NombreArchivo',
    })
    @IsNotEmpty({message : 'Ingrese NombreArchivo'})
    NombreArchivo : string = ''*/

    // ************************************************

    @ApiProperty({
        description : 'Descripcion',
        default     : 'Monitoreo',
    })
    @IsNotEmpty({message : 'Ingrese Tipo'})
    Tipo : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Boda',
        default     : 'Civil',
    })
    @IsNotEmpty({message : 'Ingrese Boda'})
    IdBoda: number = 0;

    // ************************************************

}
