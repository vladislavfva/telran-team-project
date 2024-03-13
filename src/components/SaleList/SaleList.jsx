import { Link } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsList";
import classes from './SaleList.module.css'

function SaleList() {  
  return ( <div className='section'>
    <div className={classes.sale_info}>
      <h2>Sale</h2>
      <div className={classes.button_wrapper}>
        <div className={classes.line}></div>
        <Link to='/all-sales' className={classes.button}>All sales</Link>
      </div>
    </div>
    <ProductsList filterDiscounted={true} randomize={true}/>
    <Link to='/all-sales' className={`${classes.button} ${classes.mobile}`}>All sales</Link>
  </div> );
}

export default SaleList;