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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByCategory = exports.getProducts = exports.getProduct = void 0;
const api_client_1 = __importDefault(require("../config/api_client"));
function getProduct(product_slug) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!product_slug)
                return reject("product_slug is required");
            try {
                const endpoint = `products/${product_slug}`;
                const { data } = (yield api_client_1.default.get(endpoint)) || {};
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.getProduct = getProduct;
function getProducts() {
    return __awaiter(this, arguments, void 0, function* ({ category_slug, page = 1, query, } = {}) {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const searchBy = query ? `&q=${query}` : "";
                const endpoint = category_slug
                    ? `products/category/${category_slug}?page=${page}${searchBy}`
                    : `products?page=${page}${searchBy}`;
                const { data } = (yield api_client_1.default.get(endpoint)) || {};
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.getProducts = getProducts;
function getProductsByCategory(category_slug) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!category_slug)
                return reject("category_slug is required");
            try {
                const endpoint = `products/category/${category_slug}`;
                const { data } = (yield api_client_1.default.get(endpoint)) || {};
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.getProductsByCategory = getProductsByCategory;
