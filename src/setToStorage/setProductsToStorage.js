import React from "react";
import fetchProducts from "../apiCalls/Products/fetchProducts";

const setProductsToStorage = async () => {
  const allProducts = await fetchProducts();
  localStorage.setItem('products', JSON.stringify(allProducts));
}

export default setProductsToStorage
