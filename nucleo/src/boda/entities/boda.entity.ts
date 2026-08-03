import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: 'orq_datos' })

export class BodaModel {

    @PrimaryGeneratedColumn() 
    id! : number

    @Column()
    @Generated("uuid")
    uu_id! : string

    @Column()
    Nombre! : string

    @Column()
    Fecha! : string

    @Column()
    Estado : string = 'activo'

    @Column()
    IdUsuario! : number

    @Column()
    DniUsuarioMod! : string
    
    @Column()
    UsuarioMod! : string

    @Column()
    Fecha_Creacion! : string

    @Column()
    deleted_at! : string

    @Column()
    created_at! : string

    @Column()
    updated_at! : string

}
