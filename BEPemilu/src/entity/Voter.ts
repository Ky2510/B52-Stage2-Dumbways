import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: Number

    @Column({type: "int"})
    user_id: Number

    @Column({default: false})
    status_vote: Boolean

    @ManyToOne(() => Paslon, (paslon) => paslon.id)
    paslon_id: Paslon
}
