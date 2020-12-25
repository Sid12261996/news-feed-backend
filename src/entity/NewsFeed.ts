import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class NewsFeed {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    imageUrl: string;

}
