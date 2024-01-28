// const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
import getIndexData from "./getIndex";
import type { IndexResponse } from "./getIndex";

export const extractFeatured = async (): Promise<Object> => {
  try {
    const indexData: IndexResponse = await getIndexData();

    return indexData.featured_products;
  } catch (error) {
    console.error('Error extracting images:', error);
    throw error;
  }
};

export const getCategory = () => Promise.resolve(getIndexData)