import { Product } from "../entities/product";
import { Provider } from "../entities/provider";
import { BaseRepository } from "./baseRepository";


export class ProviderRepository extends BaseRepository<Provider>{
    constructor(){
        super(Product)
    }
}