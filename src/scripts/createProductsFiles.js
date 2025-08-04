import { writeFile } from 'node:fs/promises';
import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import path from 'node:path';

const createProductsFiles = async () => {
  const data = await readProducts();

  for (const product of data) {
    const fileName = `${product.name.toLowerCase().replace(/\s+/g, '-')}.json`;

    const filePath = path.join(PATH_FILES_DIR, fileName);

    console.log({ fileName, filePath });

    await writeFile(filePath, JSON.stringify(product, null, 2));
  }
};

createProductsFiles();
