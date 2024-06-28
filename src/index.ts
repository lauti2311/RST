import "reflect-metadata";
import { AppDataSource } from "./AppDataSource";
import myMiddleware from "./middlewares/myMiddleWare";
import express from 'express';

const app = express();


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

main();