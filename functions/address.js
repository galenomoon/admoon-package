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
exports.getAddress = void 0;
const api_client_1 = __importDefault(require("../config/api_client"));
function getAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const endpoint = `address`;
                const { data } = (yield api_client_1.default.get(endpoint)) || {};
                const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
                resolve(Object.assign(Object.assign({}, data), { googleMapsURL }));
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.getAddress = getAddress;
