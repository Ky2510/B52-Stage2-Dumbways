import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Article } from "./Article"

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

    @OneToMany(() => Article, (article) => article.user)
    article: Article[]
}
