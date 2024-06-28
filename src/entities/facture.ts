import { Column, Entity } from "typeorm";
import { Base } from "./base";

@Entity("facture")
export class Facture extends Base{
    @Column({
        nullable:false,
    })
    date!: Date;


}