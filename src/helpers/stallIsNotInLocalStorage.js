import React from "react";

const stallIsNotInLocalStorage = () => {
  return !localStorage.getItem('stalls') ? true : false;
}

export default stallIsNotInLocalStorage
