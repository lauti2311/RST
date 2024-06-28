import { Column, Entity } from "typeorm";
import { Base } from "./base";


@Entity("provider")
export class Provider extends Base{
    @Column({
        nullable: false,
        unique: true,
    })
    name!: string;

    @Column({
        nullable: false,
        unique:true,
    })
    cuit!: string;
}