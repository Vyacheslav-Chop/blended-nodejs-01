import { readProducts } from "../utils/readProducts.js";

const createProductsFiles = async () => {
  const data = await readProducts();

};

createProductsFiles();
