import { useSelector, useDispatch } from "react-redux";
import { Categories } from "../Categories/Categories";
import { useEffect } from "react";
import classes from './CategoriesList.module.css'
import { getCategories } from "../../store/slices/categoriesSlice";

export function CategoriesList({sliceStart, sliceEnd}) {
  const categoriesList = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  return (
    <div className={classes.categories_container}>
      {categoriesList
        .slice(sliceStart, sliceEnd)
        .map((categories) => (
        <Categories key={categories.id} categories={categories} />
      ))}
    </div>
  );
}
