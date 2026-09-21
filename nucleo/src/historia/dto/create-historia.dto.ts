
// ************************************************

import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

    
export class CreateHistoriaDto {

    @ApiProperty({
        description : 'Titulo',
        default     : '[Titulo]',
    })
    @IsNotEmpty({message : 'Ingrese Titulo'})
    Titulo : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Historia',
        default     : '[Historia]',
    })
    @IsNotEmpty({message : 'Ingrese Historia'})
    Historia : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Boda',
        default     : '[Boda]',
    })
    @IsNotEmpty({message : 'Ingrese Boda'})
    IdBoda: number = 0;

    // ************************************************

}
