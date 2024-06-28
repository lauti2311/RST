import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class Base{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @DeleteDateColumn({nullable: false})
    deletedAt!: Date;

    @CreateDateColumn({nullable: false})
    createdAt!: Date;
}