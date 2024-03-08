import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    serial_number: string

    @Column()
    vision_mission: string

    @OneToMany(() => Partai, (partai) => partai.paslon)
    partai: Partai[]
}
