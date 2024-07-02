import { FactureDetailsController } from "../controllers/factureDetailsController";
import { FactureDetails } from "../entities/factureDetails";
import { BaseRoutes } from "./baseRoutes";


export const FactureDetailsRoutes = () => {
    const factureDetailsRoutes = BaseRoutes(FactureDetails);

    const factureDetailsController = new FactureDetailsController();

    return factureDetailsRoutes;
}