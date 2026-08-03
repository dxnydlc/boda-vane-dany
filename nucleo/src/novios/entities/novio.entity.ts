
import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

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
    Email! : string

    @Column()
    DNI! : string

    @Column()
    IdBoda : number = 0

    @Column()
    Tipo : string  = ''

    @Column()
    deleted_at! : string

    @Column()
    created_at! : string

    @Column()
    updated_at! : string

}
