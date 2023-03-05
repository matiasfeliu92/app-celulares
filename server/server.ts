import express, { json } from 'express';
import cors from 'cors'
import 'reflect-metadata'
import productsRoutes from './routes/products.routes';
import { AppDataSource } from './config/config'
import categoriesRoutes from './routes/categories.routes';
const app = express()

const port=process.env.PORT || 4000

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }));
app.use(json());

app.use('/products', productsRoutes.router);
app.use('/categories', categoriesRoutes.router);

async function main() {
    await AppDataSource.initialize()
    console.log('Database is connected');
    
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`http://localhost:${port}`)
    })
}

main()