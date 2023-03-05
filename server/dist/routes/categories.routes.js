"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controllers_1 = __importDefault(require("../controllers/categories.controllers"));
class CategRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', categories_controllers_1.default.getCategories);
        this.router.post('/newCategory', categories_controllers_1.default.postCategory);
    }
}
exports.default = new CategRoutes();
