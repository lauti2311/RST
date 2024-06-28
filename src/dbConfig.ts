import { DataSourceOptions } from "typeorm";
import { Base } from "./entities/base";
import * as dotenv from "dotenv";
import { Provider } from "./entities/provider";
import { Product } from "./entities/product";
import { Facture } from "./entities/facture";
import { FactureDetails } from "./entities/factureDetails";

dotenv.config();

const dbConfig: DataSourceOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Base, Provider, Product, Facture, FactureDetails],
    synchronize: true,
    logging: false,
};

export default dbConfig;
