import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {BaseEntity} from "./BaseEntity";
import {User} from "./User";

@Entity()
export class NewsFeed extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: false, length: 100})
    title: string;

    @Column('varchar', {nullable: false, length: 10000})
    description: string;

    @Column('varchar', {nullable: true})
    imageUrl: string;

    @ManyToOne(() => User)
    user: User;

}
