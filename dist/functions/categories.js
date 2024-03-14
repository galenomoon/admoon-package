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
exports.getCategories = void 0;
const api_client_1 = __importDefault(require("../config/api_client"));
function getCategories() {
    return __awaiter(this, arguments, void 0, function* (sortBy = "name") {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const endpoint = `categories?sortBy=${sortBy}`;
                const { data } = (yield api_client_1.default.get(endpoint)) || {};
                resolve(data);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.getCategories = getCategories;
