import { Column, Entity } from "typeorm";
import { Base } from "./base";


@Entity("province")
export class Province extends Base{
    @Column({
        nullable: false
    })
    name!: string
}