import React from "react";

const sectionIsNotInLocalStorage = () => {
  return !localStorage.getItem('sections') ? true : false;
}

export default sectionIsNotInLocalStorage
