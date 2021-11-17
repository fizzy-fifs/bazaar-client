import React from "react";
import fetchSections from "../apiCalls/Sections/fetchSections";

const setSectionsToStorage = async () => {
  const allSections = await fetchSections();
  localStorage.setItem('sections', JSON.stringify(allSections));
}

export default setSectionsToStorage
