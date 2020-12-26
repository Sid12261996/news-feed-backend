import {CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn} from "typeorm";

export class BaseEntity {

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date;

    @DeleteDateColumn()
    deletedDate: Date;
}
