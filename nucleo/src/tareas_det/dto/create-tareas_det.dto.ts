import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTareasDetDto {

    // ************************************************

    @ApiProperty({
        description : 'IdBoda',
        default     : '2',
    })
    @IsNotEmpty({message : 'Ingrese IdBoda'})
    IdBoda: number = 0;

    // ************************************************

    @ApiProperty({
        description : 'Tarea',
        default     : 'Tarea',
    })
    @IsNotEmpty({message : 'Ingrese Tarea'})
    Tarea : string = ''

    // ************************************************
  
}
