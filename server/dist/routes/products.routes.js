"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controllers_1 = __importDefault(require("../controllers/products.controllers"));
class ProdRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', products_controllers_1.default.getProducts);
        this.router.get('/:id', products_controllers_1.default.getProduct);
        this.router.post('/newProduct', products_controllers_1.default.postNewProduct);
    }
}
exports.default = new ProdRoutes();
