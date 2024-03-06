import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @Column()
    serial_number: String

    @Column()
    vision_mission: String

    @OneToMany(() => Paslon, (paslon) => paslon.id)
    paslon_id: Paslon[]

    @ManyToOne(() => Partai, (partai) => partai.id)
    partai: Partai
}
