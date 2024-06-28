import { Router } from "express";
import { EntityTarget } from "typeorm";
import { Base } from "../entities/base";
import { GenericController } from "../controllers/genericController";
import myMiddleware from "../middlewares/myMiddleWare";

export const genericRoutes = <T extends Base>(entity: EntityTarget<T>): Router => {
    const router = Router();
    const controller = new GenericController<T>(entity);

    router.use(myMiddleware);

    // Ruta para obtener todas las entidades
    router.get("/", (req, res) => controller.getAll(req, res));

    // Ruta para obtener todas las entidades, incluidas las eliminadas lógicamente
    router.get("/getAllDeleted", (req, res) => controller.getAllDeleted(req, res));

    // Ruta para obtener una entidad por su ID
    router.get("/:id", (req, res) => controller.getById(req, res));

    // Ruta para crear una nueva entidad
    router.post("/", (req, res) => controller.create(req, res));

    // Ruta para actualizar una entidad por su ID
    router.patch("/:id", (req, res) => controller.update(req, res));

    // Ruta para eliminar una entidad por su ID
    router.delete("/:id", (req, res) => controller.delete(req, res));

    // Ruta para eliminar lógicamente una entidad por su ID
    router.delete("/logicDelete/:id", (req, res) => controller.logicDelete(req, res));

    // Ruta para restaurar lógicamente una entidad eliminada
    router.patch("/restoreLogicDeleted/:id", (req, res) => controller.restoreLogicDeleted(req, res));

    return router;
};
