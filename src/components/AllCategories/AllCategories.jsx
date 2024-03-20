import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import classes from "./AllCategories.module.css";
import { Categories } from "../Categories/Categories";
import { getCategories } from "../../store/slices/categoriesSlice";


export const AllCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoriesList = useSelector((state) => state.categories.categories);
  

  return (
    <>
      <h2 className={classes.text}>All Categories</h2>
      <div className={classes.all_categories_container}>
        {categoriesList.map((categories) => (
          <Categories key={categories.id} categories={categories} />
        ))}
      </div>
    </>
  );
};

