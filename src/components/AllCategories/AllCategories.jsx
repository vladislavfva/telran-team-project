import React from "react";
import { CategoriesList } from './../CategoriesList/CategoriesList';


export const AllCategories = () => {
  return (
    <>
      <h2 style={{ color: "var(--color-text)" }}>Categories</h2>
      <CategoriesList />
    </>
  );
};

