import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Voter } from "./Voter"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: String

    @Column()
    chairman: String

    @Column()
    vision_mission: String

    @Column()
    address: String

    @ManyToOne(() => Voter, (voter) => voter.partai_id)
    partai: Voter
}
