import {Request, Response} from 'express'
import {Product} from '../models/products.models'

class ProdController {

    async getProducts (req: Request, res: Response) {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            if(error instanceof Error){
                res.status(403).json({message: error.message})
            }
        }
    }

    async getProduct (req: Request, res: Response) {
        try {
            const {id} = req.params
            const product = await Product.findOne({where: {id: parseInt(id)}})
            if (product) {
                res.status(200).json(product)
            } else {
                res.status(403).json({message: 'product missed'})
            }
        } catch (error) {
            if(error instanceof Error){
                res.status(403).json({message: error.message})
            }
        }
    }

    async postNewProduct (req: Request, res: Response) {
        try {
            const {name, price, description, url_web} = req.body
            const newProduct = new Product()
            newProduct.name = name
            newProduct.price = price
            newProduct.description = description
            newProduct.url_web = url_web
            await newProduct.save()
            res.status(200).json({message: 'new product inserted'})
        } catch (error) {
            if(error instanceof Error){
                res.status(403).json({message: error.message})
            }
        }
    }
}

export default new ProdController()