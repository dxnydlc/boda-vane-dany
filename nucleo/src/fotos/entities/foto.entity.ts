

import { Column, Entity, Generated, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tbl_fotos' })
export class FotoModel {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id : number = 0;

    @Column({ type: 'varchar', length: 50, unique: true })
    uu_id : string = '';

    @Index('fk_fotos_boda')
    @Column({ type: 'bigint', unsigned: true, nullable: true })
    IdBoda: number = 0;

    // -----------------------------
    // Datos del archivo
    // -----------------------------

    @Column({ type: 'text' })
    RutaFisica : string = '';

    @Column({ type: 'text' })
    RutaThumb : string = '';

    @Column({ type: 'varchar', length: 150, nullable: true })
    Tipo : string = ''

    @Column({ type: 'varchar', length: 150, nullable: true })
    NombreArchivo : string = ''

    @Column({ type: 'varchar', length: 150, nullable: true })
    Peso : string = ''

    @Column({ type: 'varchar', length: 150, nullable: true })
    NombreFisico : string = ''

    @Column({ type: 'varchar', length: 150, nullable: true })
    Extension : string = ''

    @Column({ type: 'text' })
    Url : string = '';

    @Column({ type: 'text' })
    urlThumb : string = '';

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
