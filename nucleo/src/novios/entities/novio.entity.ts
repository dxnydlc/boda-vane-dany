
import { BeforeInsert, BeforeUpdate, Column, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_novios' })
export class NovioModel {

    @PrimaryGeneratedColumn() 
    id! : number

    @Column()
    @Generated("uuid")
    uu_id! : string

    @Column()
    Nombre! : string

    @Column()
    Apellidos : string = ''

    @Column()
    Email! : string

    @Column()
    DNI! : string

    @Column()
    IdBoda : number = 0

    @Column()
    Tipo : string  = '' // Novio/Novia

    @Column()
    deleted_at! : string

    @Column()
    created_at! : string

    @Column()
    updated_at! : string

    @Column()
    DniUsuarioMod! : string
    
    @Column()
    UsuarioMod! : string

    @BeforeInsert()
    @BeforeUpdate()
    normalize() {
        this.Nombre         = this.Nombre?.toUpperCase();
        this.Apellidos      = this.Apellidos?.toUpperCase();
    }

}
