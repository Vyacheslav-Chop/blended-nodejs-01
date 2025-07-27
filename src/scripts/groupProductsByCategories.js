import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const data = await readProducts();
    if (data.length === 0) return;

    const group = {};

    for (const product of data) {
      if (!group[product.category]) {
        group[product.category] = [];
      }

      group[product.category].push(product.name);
    }
    return group;
  } catch (error) {
    console.log('Error:', error);
  }
};

groupProductsByCategories().then((result) => console.log(result));
