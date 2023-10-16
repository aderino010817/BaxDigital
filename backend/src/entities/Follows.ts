import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm"
import { User } from "./Users";

@Entity({ name: "follows" })
export class Follow {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.following)
    followed: User;
  
    @ManyToOne(() => User, (user) => user.followers)
    following: User;
    
    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
