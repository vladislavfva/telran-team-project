import { useSelector, useDispatch } from "react-redux";
import { Categories } from "../Categories/Categories";
import { useEffect } from "react";
import { getCategories } from "../../store/slice/categoriesSlice";
import classes from './CategoriesList.module.css'

export function CategoriesList({sliceStart, sliceEnd}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoriesList = useSelector((state) => state.categories.categories);

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
