import { ProviderController } from "../controllers/providerController";
import { Provider } from "../entities/provider";
import { BaseRoutes } from "./baseRoutes";

export const ProviderRoutes = () => {
    const providerRoutes = BaseRoutes(Provider);
    const providerController = new ProviderController();
    return providerRoutes;
}