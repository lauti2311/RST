import { ProvinceController } from "../controllers/provinceController";
import { Province } from "../entities/province";
import { BaseRoutes } from "./baseRoutes";

export const ProvinceRoutes = () => {
    const provinceRoutes = BaseRoutes(Province);

    const provinceController = new ProvinceController();

    return provinceRoutes;
}