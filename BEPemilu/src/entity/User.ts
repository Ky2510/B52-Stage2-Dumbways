import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Gender {
    male = "Male",
    female = "Female"
}

export enum Role {
    admin = "admin",
    user = "user",
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
    
    @Column({ nullable: true, type: "enum",  enum: Role})
    role: Role

    @Column({ nullable: true, type: "enum",  enum: Gender})
    gender: Gender
}
