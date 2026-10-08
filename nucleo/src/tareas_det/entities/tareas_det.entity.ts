
import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_tareas_det' })
export class TareasDetModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    uu_id: string = '';

    // -----------------------------
    // Relaciones
    // -----------------------------

    @Index('fk_detalle_tarea')
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

    // -----------------------------
    // Datos del invitado
    // -----------------------------

    @Column({ type: 'varchar', length: 150, nullable: true })
    Tarea : string = ''

    @Column({
        type: 'enum',
        enum: ['activo', 'anulado', 'pausado', 'no-podra', 'confirmado'],
        default: 'activo',
    })
    Estado: string = '';

    @Column({ type: 'varchar', length: 50, nullable: true })
    Inicio : string = ''

    @Column({ type: 'varchar', length: 100, nullable: true })
    Fin : string = ''

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
