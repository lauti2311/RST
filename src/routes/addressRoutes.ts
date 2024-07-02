import { Router } from "express";
import { AddressController } from "../controllers/addressController";
import { Address } from "../entities/address"
import { BaseRoutes } from "./baseRoutes"


export const AddressRoutes = () => {

    const addressRouter = BaseRoutes(Address); // Crea una instancia de Router para las rutas de Address
    const addressController = new AddressController(); // Instancia del controlador de direcciones


    return addressRouter;
    
}