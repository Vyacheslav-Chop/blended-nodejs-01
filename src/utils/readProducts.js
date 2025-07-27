import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parsedData = JSON.parse(data.toString());

    return parsedData;
  } catch (error) {
    console.log('Error:', error);
  }
};

