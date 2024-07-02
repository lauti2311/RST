import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base";
import { Province } from "./province";


@Entity("town")
export class Town extends Base{
    @Column({
        nullable: false,
    })
    name!: string

    @ManyToOne(()=> Province )
    @JoinColumn({name: "provinceId"})
    province!: Province;

    @Column()
    provinceId!: string;
}