import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    chairman: string

    @Column()
    vision_mission: string

    @Column()
    address: string

    @OneToMany(() => Partai, (partai) => partai.id )
    partai_id: Partai[]
}
