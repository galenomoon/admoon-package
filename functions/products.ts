import api_client from "../config/api_client";
import { IProduct, IProductPaginated } from "../interfaces/product";

export async function getProduct(product_slug?: string) {
  return await new Promise<IProduct>(async (resolve, reject) => {

    try {
      const endpoint = `products/${product_slug}`;
      const { data } = (await api_client.get(endpoint)) || {};
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getProducts({
  category_slug,
  page = 1,
  query,
}: {
  category_slug?: string;
  page?: number;
  query?: string;
} = {}) {
  return await new Promise<IProductPaginated>(async (resolve, reject) => {
    try {
      const searchBy = query ? `&q=${query}` : "";
      const endpoint = category_slug
        ? `products/category/${category_slug}?page=${page}${searchBy}`
        : `products?page=${page}${searchBy}`;

      const { data } = (await api_client.get(endpoint)) || {};
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getProductsByCategory(category_slug: string) {
  return await new Promise<IProductPaginated>(async (resolve, reject) => {
    if (!category_slug) return reject("category_slug is required");

    try {
      const endpoint = `products/category/${category_slug}`;
      const { data } = (await api_client.get(endpoint)) || {};
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
