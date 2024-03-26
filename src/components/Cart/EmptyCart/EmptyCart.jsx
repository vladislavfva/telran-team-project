import { Link } from 'react-router-dom';
import classes from './EmptyCart.module.css'

function EmptyCart() {
  return ( <div className={classes.empty_cart}>
    <p>Looks like you have no items in your basket currently.</p>
    <Link to="/all-products">
      <button>Continue Shopping</button>
    </Link>
  </div> );
}

export default EmptyCart;