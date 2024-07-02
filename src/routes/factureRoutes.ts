import { FactureController } from "../controllers/factureController";
import { Facture } from "../entities/facture";
import { BaseRoutes } from "./baseRoutes";

export const FactureRoutes = () => {
    const factureRoutes = BaseRoutes(Facture);

    const factureController = new FactureController();

    return factureRoutes;
}