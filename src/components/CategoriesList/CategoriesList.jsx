import { useSelector, useDispatch } from "react-redux";
import { Categories } from "../Categories/Categories";
import { useEffect } from "react";
import { getCategories} from "../store/slice/categoriesSlice";

export function CategoriesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoriesList = useSelector((state) => state.categories.categories);

  return (
    <div>
      {categoriesList.map((category) => (
        <Categories key={category.id} {...category} />
      ))}
    </div>
  );
}
