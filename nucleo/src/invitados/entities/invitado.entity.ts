
import { BodaModel } from "src/boda/entities/boda.entity";
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: 'tbl_invitados' })
export class InvitadoModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    uu_id: string = '';

    // @Column({ type: 'varchar', length: 100, unique: true })
    // token: string = '';

    @Index('idx_invitado_nombre')
    @Column({ type: 'varchar', length: 150 })
    Nombre: string = '';

    // -----------------------------
    // Relaciones
    // -----------------------------

    @Index('idx_invitado_boda')
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

    @Column({type : 'double'})
    IdNovio : number = 0

    // -----------------------------
    // Datos del invitado
    // -----------------------------

    @Column({ type: 'varchar', length: 150, nullable: true })
    email : string = ''

    @Column({ type: 'varchar', length: 50, nullable: true })
    phone : string = ''

    @Column({ type: 'varchar', length: 100, nullable: true })
    group_name : string = ''

    @Column({ type: 'varchar', length: 150 })
    Foto : string = ''

    @Column({
        type: 'enum',
        enum: ['activo', 'anulado', 'pausado', 'no-podra', 'confirmado'],
        default: 'activo',
    })
    Estado: string = '';

    @Column({ type: 'int', unsigned: true, default: 0 })
    max_companions : number = 0

    @Column({ type: 'datetime', nullable: true })
    invitation_sent_at : string = ''

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
