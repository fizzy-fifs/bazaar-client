import React from "react";
import fetchStalls from "../apiCalls/Stalls/fetchStalls";

const setStallsToStorage = async () => {
  const allStalls = await fetchStalls();
  console.log(allStalls)
  localStorage.setItem('stalls', JSON.stringify(allStalls));
}

export default setStallsToStorage
