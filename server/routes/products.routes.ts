import {Router} from 'express'
import ProdController from '../controllers/products.controllers'

class ProdRoutes {
    public router = Router()

    constructor(){
        this.initRoutes()
    }

    initRoutes(){
        this.router.get('/', ProdController.getProducts)
        this.router.get('/:id', ProdController.getProduct)
        this.router.post('/newProduct', ProdController.postNewProduct)
    }
}

export default new ProdRoutes()