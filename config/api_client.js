"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const nookies_1 = require("nookies");
const api_client = axios_1.default.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/websites/" + process.env.NEXT_PRIVATE_WEBSITE_ID + "/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
api_client.interceptors.request.use((config) => {
    const { token } = (0, nookies_1.parseCookies)();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    Promise.reject(error);
});
exports.default = api_client;
