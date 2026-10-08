

import { Column, Entity, Generated, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: 'orq_datos' })

export class TareasCabModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    uu_id: string = '';

    // -----------------------------
    // Relaciones
    // -----------------------------

    @Index('fk_tarea_boda')
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

    // -----------------------------
    // Datos del invitado
    // -----------------------------

    @Column({ type: 'varchar', length: 150, nullable: true })
    Nombre : string = ''

    @Column({
        type: 'enum',
        enum: [ 'activo', 'anulado', 'realizado' ],
        default: 'activo',
    })
    Estado: string = '';

    @Column({ type: 'text', unsigned: true})
    Descripcion : string = ''

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
