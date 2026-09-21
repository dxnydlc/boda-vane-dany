
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_mesas_det' })
export class MesasDetModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Generated("uuid")
    uu_id: string = '';

    @Column({type : 'double'})
    IdMesa : number = 0

    @Column({type : 'double'})
    IdInvitado : number = 0


    // -----------------------------
    // Auditoría
    // -----------------------------

    @Column({
        type        : 'timestamp',
        default     : () => 'CURRENT_TIMESTAMP',
    })
    created_at: string = '';

    @Column({
        type        : 'timestamp',
        nullable    : true,
        onUpdate    : 'CURRENT_TIMESTAMP',
    })
    updated_at      : string = '';

    @Column({ type: 'timestamp', nullable: true })
    deleted_at      : string = '';



}
