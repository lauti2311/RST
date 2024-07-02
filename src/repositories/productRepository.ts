import { Product } from "../entities/product";
import { BaseRepository } from "./baseRepository";

export class ProductRepository extends BaseRepository<Product>{
    constructor(){
        super(Product)
    }
}
