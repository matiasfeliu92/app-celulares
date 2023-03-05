import {Router} from 'express'
import categoriesControllers from '../controllers/categories.controllers'

class CategRoutes {
    public router = Router()

    constructor(){
        this.initRoutes()
    }

    initRoutes(){
        this.router.get('/', categoriesControllers.getCategories)
        this.router.post('/newCategory', categoriesControllers.postCategory)
    }
}

export default new CategRoutes()