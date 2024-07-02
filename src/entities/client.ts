import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base";
import { Address } from "./address";
import { Facture } from "./facture";


@Entity("client")
export class Client extends Base{

    @Column({
        nullable:false,


    })
    name!: string;
    @Column({
        nullable:false,


    })
    lastName!: string;
    @Column({
        nullable:false,
        unique:true,

    })
    cuit!: number;

    @ManyToOne(()=> Address)
    @JoinColumn({name: "addressId"})
    address!: Facture;

    @Column()
    addressId!: string;
    
}