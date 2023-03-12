import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import { Product } from "../models/products.models";
import { Category } from "../models/categorias.models";
import { AllProducts } from "../models/productsView.models";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Product, Category, AllProducts],
    logging: true,
    synchronize: true
})