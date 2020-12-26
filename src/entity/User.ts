import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "./BaseEntity";


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('varchar', {unique: true})
    email: string;

    @Column()
    password: string;

}
