import api_client from "../config/api_client";
import { ICategory } from "../interfaces/category";

export async function getCategories(sortBy = "name") {
  return await new Promise<ICategory[]>(async (resolve, reject) => {
    try {
      const endpoint = `categories?sortBy=${sortBy}`;
      const { data } = (await api_client.get(endpoint)) || {};
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}