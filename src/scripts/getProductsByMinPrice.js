import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (number) => {
  try {
    const data = await readProducts();

    if (data.length === 0) {
      throw new Error('Not found products!');
    }

    const filteredData = data.filter(
      (product) => product.price >= number,
    );

    return filteredData;
  } catch (error) {
    console.log('Error:', error);
  }
};

getProductsByMinPrice(600).then((result) => console.log(result));
