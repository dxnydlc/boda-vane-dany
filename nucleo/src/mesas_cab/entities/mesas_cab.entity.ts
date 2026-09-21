
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_mesas_cab' })
export class MesasCabModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    @Generated("uuid")
    uu_id: string = '';

    @Index('idx_invitado_nombre')
    @Column({ type: 'varchar', length: 150 })
    Nombre: string = '';

    @Column({type : 'int'})
    NroInvitados : number = 0

    @Column({ type: 'varchar', length: 150, nullable: true })
    Color : string = ''

    @Column({
        type: 'enum',
        enum: ['activo', 'anulado', 'pausado', 'no-podra', 'confirmado'],
        default: 'activo',
    })
    Estado: string = '';

    // Relaciones
    // -----------------------------

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

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

    @Column({ type: 'varchar', length: 50 })
    DniUsuarioMod   : string = '';

    @Column({ type: 'varchar', length: 150 })
    UsuarioMod      : string = '';

}
