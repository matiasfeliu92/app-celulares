"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_models_1 = require("../models/products.models");
class ProdController {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield products_models_1.Product.find();
                res.status(200).json(products);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield products_models_1.Product.findOne({ where: { id: parseInt(id) } });
                if (product) {
                    res.status(200).json(product);
                }
                else {
                    res.status(403).json({ message: 'product missed' });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
    postNewProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, description, url_web } = req.body;
                const newProduct = new products_models_1.Product();
                newProduct.name = name;
                newProduct.price = price;
                newProduct.description = description;
                newProduct.url_web = url_web;
                yield newProduct.save();
                res.status(200).json({ message: 'new product inserted' });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
}
exports.default = new ProdController();
