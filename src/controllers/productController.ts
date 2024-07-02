import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/productRepository";
import { BaseController } from "./baseController";

export class ProductController extends BaseController<Product>{

    private productRepository: ProductRepository;

    constructor(){
        super(Product);

        this.productRepository = new ProductRepository;
    }
}