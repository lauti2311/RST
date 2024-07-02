import express from "express";
import { ProvinceRoutes } from "./provinceRoutes";
import { TownRoutes } from "./townRoutes";
import { ProviderRoutes } from "./providerRoutes";
import { ClientRoutes } from "./clientRoutes";
import { FactureRoutes } from "./factureRoutes";
import { FactureDetailsRoutes } from "./factureDetailsRoutes";
import { ProductRoutes } from "./productRoutes";
import { AddressRoutes } from "./addressRoutes";


export function loadRoutes(app: express.Application): void {
    app.use('/provinces', ProvinceRoutes());
    app.use('/towns', TownRoutes());
    app.use('/providers', ProviderRoutes())
    app.use('/clients', ClientRoutes())
    app.use('/address', AddressRoutes())
    app.use('/factures', FactureRoutes())
    app.use('/factureDetails', FactureDetailsRoutes())
    app.use('/products', ProductRoutes())

}