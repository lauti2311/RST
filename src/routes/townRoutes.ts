import { Router } from "express";
import { TownController } from "../controllers/townController";
import { Town } from "../entities/town";
import { BaseRoutes } from "./baseRoutes";

export const TownRoutes = () => {
    const townRoutes = BaseRoutes(Town);
    const townController = new TownController();

    return townRoutes;
}