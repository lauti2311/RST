import { ClientController } from "../controllers/clientController"
import { Client } from "../entities/client"
import { BaseRoutes } from "./baseRoutes"

export const ClientRoutes = () =>  {
    const clientRotues = BaseRoutes(Client);

        const clientController = new ClientController();


    return clientRotues;
}