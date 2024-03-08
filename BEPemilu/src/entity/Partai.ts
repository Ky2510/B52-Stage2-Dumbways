import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

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

    @ManyToOne(() => Paslon, (paslon) => paslon.partai)
    paslon: Paslon 
}
