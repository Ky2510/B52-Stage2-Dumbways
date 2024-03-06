import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Gender {
    male = "Male",
    female = "Female"
}

@Entity()
export class User { 
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    fullname: string  
    
    @Column()
    address: string
    
    @Column()
    username: string    
    
    @Column()
    password: string
    
    @Column({ nullable: true, type: "enum",  enum: Gender})
    gender: Gender
}
