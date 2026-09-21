import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_boda' })

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
    Hora : string = '00:00'

    @Column({type:'text'})
    MapaLink : string = ''

    @Column({type:'text'})
    Direccion : string = ''

    @Column()
    Estado : string = 'activo'

    @Column()
    Portada! : string

    @Column()
    IdUsuario : number = 0

    @Column()
    Musica : string = ''

    @Column()
    DniUsuarioMod! : string
    
    @Column()
    UsuarioMod! : string

    @Column()
    deleted_at! : string

    @Column()
    created_at! : string

    @Column()
    updated_at! : string

}
