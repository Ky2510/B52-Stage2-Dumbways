import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: Number

    @Column({type: "int"})
    user_id: Number

    @Column({default: false})
    status_vote: Boolean
}
