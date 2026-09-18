
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_programa_boda' })
export class ProgramaModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id : number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    uu_id : string = '';

    @Index('idx_descri_programa')
    @Column({ type: 'varchar', length: 150 })
    Descripcion : string = '';

    // -----------------------------
    // Relaciones
    // -----------------------------

    @Index('fk_programa_boda')
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

    // -----------------------------
    // Datos del invitado
    // -----------------------------

    @Column({ type: 'varchar', length: 100, unique: true })
    Hora : string = '';

    @Column({ type: 'varchar', length: 150, unique: true })
    Icono : string = '';

    @Column({
        type: 'enum',
        enum: ['activo', 'anulado', 'pausado', 'no-podra', 'confirmado'],
        default: 'activo',
    })
    Estado: string = '';

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
