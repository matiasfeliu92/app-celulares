import {Request, Response} from 'express'
import { Category } from '../models/categorias.models'

class CategController {

    async getCategories (req: Request, res: Response) {
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            if(error instanceof Error){
                res.status(403).json({message: error.message})
            }
        }
    }

    async postCategory (req: Request, res: Response) {
        try {
            const {name} = req.body
            const newCategory = new Category()
            newCategory.name = name
            newCategory.save()
            res.status(200).json({message: 'new category inserted'})
        } catch (error) {
            if(error instanceof Error){
                res.status(403).json({message: error.message})
            }
        }
    }
}

export default new CategController()