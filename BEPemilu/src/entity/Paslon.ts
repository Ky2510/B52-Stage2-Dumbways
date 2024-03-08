import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Partai } from "./Partai"
import { Voter } from "./Voter"

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

    @OneToMany(() => Voter, (voter) => voter.paslon)
    voter: Voter []
}
