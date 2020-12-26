import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class NewsFeed {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: false, length: 100})
    title: string;

    @Column('varchar', {nullable: false, length: 500})
    description: string;

    @Column('varchar', {nullable: true})
    imageUrl: string;

}
