import api_client from "../config/api_client";
import { IAddress } from "../interfaces/address";


export async function getAddress() {
  return await new Promise<IAddress>(async (resolve, reject) => {

    try {
      const endpoint = `address`;
      const { data } = (await api_client.get(endpoint)) || {};
      const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
      resolve({...data, googleMapsURL});
    } catch (error) {
      reject(error);
    }
  });
}