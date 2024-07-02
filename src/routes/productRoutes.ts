import { ProductController } from "../controllers/productController";
import { Product } from "../entities/product";
import { BaseRoutes } from "./baseRoutes";

export const ProductRoutes = () => {
    const productRoutes = BaseRoutes(Product);

    const productController = new ProductController();

    return productRoutes;
}