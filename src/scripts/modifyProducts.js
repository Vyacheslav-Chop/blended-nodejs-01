import { readProducts } from '../utils/readProducts.js';
import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
  try {
    const data = await readProducts();
    if (data.length === 0) return;

    const newData = data.map(({ description, ...rest }) => rest);
    
    const writeNewData = JSON.stringify(newData, null, 2);
    await fs.writeFile(PATH_DB, writeNewData, 'utf-8');
  } catch (error) {
    console.log('Error:', error);
  }
};

modifyProducts();
