import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Paslon } from "./Paslon"
import { Partai } from "./Partai"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: Number
            
    @OneToMany(() => Paslon, (paslon) => paslon.id)
    paslon_id: Paslon[]
    
    @OneToMany(() => Partai, (partai) => partai.id)
    partai_id: Partai[]
}
