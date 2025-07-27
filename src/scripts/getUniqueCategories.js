import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  try {
    const data = await readProducts();

    if (data.length === 0) return;

    const productsCategory = data.map((product) => product.category);

    const uniqueCategories = [];

    for (const category of productsCategory) {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    }

    return uniqueCategories;
  } catch (error) {
    console.log('Error:', error);
  }
};
getUniqueCategories().then((result) => console.log(result));
