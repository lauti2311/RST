import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base";
import { Town } from "./town";

@Entity("address")
export class Address extends Base{
    @Column({
        nullable: false,
    })
    street!: string

    @Column({
        nullable:false,


    })
    number!: number;

    @ManyToOne(()=> Town)
    @JoinColumn({name: "townId"})
    town!: Town

    @Column()
    townId!: string;
}