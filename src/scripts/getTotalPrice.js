import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
  try {
    const data = await readProducts();
    if (data.length === 0) return 0;
    const totalPrice = data.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);

    return totalPrice;
  } catch (error) {
    console.log('Error:', error);
  }
};

getTotalPrice().then((result) => console.log(result));
