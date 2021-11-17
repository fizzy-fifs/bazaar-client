import React from "react";

const stallIsNotInLocalStorage = () => {
  return !localStorage.getItem('stall') ? true : false;
}

export default stallIsNotInLocalStorage
