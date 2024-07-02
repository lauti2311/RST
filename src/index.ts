import "reflect-metadata";
import { AppDataSource } from "./AppDataSource";
import myMiddleware from "./middlewares/myMiddleWare";
import express from 'express';
import { ProvinceRoutes } from "./routes/provinceRoutes";
import { TownRoutes } from "./routes/townRoutes";
import { loadRoutes } from "./routes/routeLoader";

const app = express();

app.use(express.json());
loadRoutes(app); // Llama a la función para cargar las rutas
app.use(myMiddleware);


async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    // Aquí puedes añadir más lógica que dependa de la conexión a la base de datos
  } catch (err) {
    console.error("Error initializing data source: ", err);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

main();