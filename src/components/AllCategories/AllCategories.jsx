import React from 'react';
import { CategoriesList } from './../CategoriesList/CategoriesList';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export const AllCategories = () => {
  return (
    <>
      <BreadCrumbs />
      <h2 style={{ color: 'var(--color-text)' }}>Categories</h2>
      <CategoriesList />
    </>
  );
};
