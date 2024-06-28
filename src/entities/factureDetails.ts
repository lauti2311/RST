import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base";
import { Product } from "./product";
import { Facture } from "./facture";


@Entity("factureDetails")
export class FactureDetails extends Base{
    @Column({
        nullable: false,
    })
    quantity!: number;

    @Column({
        nullable: false,
    })
    pricePerUnit!: number;

    @ManyToOne(() => Product)
    @JoinColumn({name: "productId"})
    product!: Product;

    @Column()
    productId!: string;

    @ManyToOne(() => Facture)
    @JoinColumn({name: "factureId"})
    facture!: Facture;

    @Column()
    factureId!: string;
    
}