import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const generateProducts = async (number) => {
  try {
    const data = await readProducts();

    const newProducts = [];

    for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }

    if (newProducts.length === 0) return;

    const newData = [...data, ...newProducts];

    const writeData = JSON.stringify(newData, null, 2);

    await fs.writeFile(PATH_DB, writeData, 'utf-8');
  } catch (error) {
    console.log('Error', error);
  }
};

generateProducts(10);
