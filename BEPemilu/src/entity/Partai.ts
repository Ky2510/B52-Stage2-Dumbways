import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

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

    @OneToMany(() => Partai, (partai) => partai.id )
    partai_id: Partai[]
}
