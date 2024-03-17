import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import classes from "./AllCategories.module.css";
import { Categories } from "../Categories/Categories";
import { getCategories } from "../../store/slices/categoriesSlice";
import { Link } from 'react-router-dom';
import { getProducts } from "../../store/slices/productsSlice";


export const AllCategories = ({categories, product}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts())
  }, []);

  const categoriesList = useSelector((state) => state.categories.categories);
  const productList = useSelector((state) => state.product.products);
  

  // const categoryId = productList[4].categoryId

  // console.log(categoryId);

  return (
    <Link to={'/by-categories'}>
      <h2 className={classes.text}>All Categories</h2>
      <div className={classes.all_categories_container}>
        {categoriesList.map((categories) => (
          <Categories key={categories.id} categories={categories} />
        ))}
      </div>
    </Link>
  );
};

