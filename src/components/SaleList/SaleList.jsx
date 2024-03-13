import { Link } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import classes from './SaleList.module.css'

function SaleList() {
  const discountFilter = (product) =>
  product.discont_price && product.discont_price < product.price;
  const start = 0;
  const end = 4;

  

  return ( <div className='section'>
    <div className={classes.sale_info}>
      <h2>Sale</h2>
      <div className={classes.button_wrapper}>
        <div className={classes.line}></div>
        <Link to='/all-sales' className={classes.button}>All sales</Link>
      </div>
    </div>
    <ProductsList filterFunction={discountFilter} sliceStart={start} sliceEnd={end} />
    <Link to='/all-sales' className={`${classes.button} ${classes.mobile}`}>All sales</Link>
  </div> );
}

export default SaleList;