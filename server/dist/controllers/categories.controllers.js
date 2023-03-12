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
const categorias_models_1 = require("../models/categorias.models");
class CategController {
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categorias_models_1.Category.find();
                res.status(200).json(categories);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
    postCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newCategory = new categorias_models_1.Category();
                newCategory.name = name;
                newCategory.save();
                res.status(200).json({ message: 'new category inserted' });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(403).json({ message: error.message });
                }
            }
        });
    }
}
exports.default = new CategController();
