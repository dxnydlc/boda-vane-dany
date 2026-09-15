import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateProgramaDto {

    // ************************************************

    @ApiProperty({
        description : 'Descripcion',
        default     : 'Brindis',
    })
    @IsNotEmpty({message : 'Ingrese Descripcion'})
    Descripcion : string = '';

    // ************************************************

    @ApiProperty({
        description : 'Hora',
        default     : '11:30',
    })
    @IsNotEmpty({message : 'Ingrese Hora'})
    Hora : string = '';

    // ************************************************

    @ApiProperty({
        description : 'Boda',
        default     : '[Boda]',
    })
    @IsNotEmpty({message : 'Ingrese Boda'})
    IdBoda: number = 0;

    // ************************************************

}
