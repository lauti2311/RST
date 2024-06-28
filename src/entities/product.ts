import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./base";
import { Provider } from "./provider";

@Entity("product")
export class Product extends Base{

    @Column({
        nullable: false,
        unique: true,
           
    })
    name!: string;

    @Column({
        nullable: false,          
    })
    pricePerUnit!: number;

    @ManyToOne(()=> Provider)
    @JoinColumn({name: "providerId"})
    provider!: Provider;

    @Column() // Agrega esta línea si necesitas referenciar el ID del proveedor directamente
    providerId!: string; 

}
