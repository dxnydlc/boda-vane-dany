

import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_users' })
export class UserModel {

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
    Password_hash! : string

    @Column()
    Rol! : string

    @Column()
    Estado! : string

    @Column()
    deleted_at! : string

    @Column()
    created_at! : string

    @Column()
    updated_at! : string

}
