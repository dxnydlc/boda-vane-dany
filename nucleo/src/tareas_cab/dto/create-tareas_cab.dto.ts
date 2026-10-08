import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateTareasCabDto {

    // ************************************************

    @ApiProperty({
        description : 'Nombre',
        default     : 'Nombre',
    })
    @IsNotEmpty({message : 'Ingrese Nombre'})
    Nombre : string = ''

    // ************************************************

    @ApiProperty({
        description : 'IdBoda',
        default     : '2',
    })
    @IsNotEmpty({message : 'Ingrese IdBoda'})
    IdBoda: number = 0;

    // ************************************************

}
