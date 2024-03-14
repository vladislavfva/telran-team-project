import classes from './ProductsFilters.module.css'

import { useDispatch } from "react-redux";
import { filterPrice, sortPrice } from '../../store/slices/productsSlice'

function ProductsFilters() {
  const currentPage = window.location.pathname;

  const dispatch = useDispatch();

  const handlePrice = (priceFrom, priceTo) => {
    dispatch(filterPrice([priceFrom, priceTo]))
  }
  
  const handleSort = (sort) => {
    dispatch(sortPrice(sort))
  }

  return (
    <div className={classes.filters}>
      <div className={classes.inputs}>
        <p>Price</p>
        <input type="number" placeholder="from" onChange={(e) => handlePrice(e.target.value, undefined)} onWheel={(e) => e.target.blur()} /> 
        <input type="number" placeholder="to"onChange={(e) => handlePrice(undefined, e.target.value)} onWheel={(e) => e.target.blur()} />
      </div>
      {currentPage !== '/all-sales' && (
        <div className={classes.inputs}>
          <p>Discounted items</p>
          <div className={classes.checkbox}>
            <input id='checbox' type="checkbox"/>
            <label htmlFor='checkbox' className={classes.custom_checkbox}></label>
          </div>
        </div>
      )}
      <div className={classes.select_wrapper}>
        <p>Sorted</p>
        <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value)}>
          <option value="default">by default</option>
          <option value="decrease">decrease</option>
          <option value="increase">increase</option>
        </select>
      </div>
    </div>
  );  
}

export default ProductsFilters;