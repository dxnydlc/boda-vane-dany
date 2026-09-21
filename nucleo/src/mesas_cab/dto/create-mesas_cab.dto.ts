import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"


export class CreateMesasCabDto {

    @Optional()
    NroInvitados : number = 0

    @Optional()
    Color : string = ''

    // ************************************************

    @ApiProperty({
        description : 'Nombre',
        default     : 'Mesa 1',
    })
    @IsNotEmpty({message : 'Ingrese Nombre'})
    Nombre: string = '';

    // ************************************************

    @ApiProperty({
        description : 'IdBoda',
        default     : '1',
    })
    @IsNotEmpty({message : 'Ingrese IdBoda'})
    IdBoda: number = 0;

    // ************************************************
  

}
