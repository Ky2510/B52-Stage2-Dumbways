import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    username: String    

    @Column()
    password: String

    // @Column()
    // status_vote: Boolean
}
