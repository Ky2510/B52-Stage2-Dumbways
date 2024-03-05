import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Voter } from "./Voter"

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

    @ManyToOne(() => Voter, (voter) => voter.paslon_id)
    paslon: Voter
}
