import React from "react";

const productIsNotInLocalStorage = () => {
  return !localStorage.getItem('products') ? true : false
}

export default productIsNotInLocalStorage
