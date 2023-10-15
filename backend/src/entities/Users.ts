import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Follow } from "./Follows"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string
    
    @Column()
    email: string

    @ManyToMany(() => Follow, (follow) => follow.following)
    @JoinTable()
    following: Follow[];

    @ManyToMany(() => Follow, (follow) => follow.followed)
    @JoinTable()
    followers: Follow[];
    
    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
