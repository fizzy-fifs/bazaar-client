import React from "react";

const sectionIsNotInLocalStorage = () => {
  return !localStorage.getItem('section') ? true : false;
}

export default sectionIsNotInLocalStorage
