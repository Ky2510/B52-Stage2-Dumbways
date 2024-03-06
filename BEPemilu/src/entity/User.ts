import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Gender {
    male = "Male",
    female = "Female"
}

@Entity()
export class User { 
    
    @PrimaryGeneratedColumn()
    id: Number
    
    @Column()
    fullname: String  
    
    @Column()
    address: String
    
    @Column()
    username: String    
    
    @Column()
    password: String
    
    @Column({ nullable: true, type: "enum",  enum: Gender})
    gender: Gender
}
