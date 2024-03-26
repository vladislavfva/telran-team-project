import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import CartForm from "./CartForm/CartForm";
import EmptyCart from './EmptyCart/EmptyCart';
import OneProduct from './OneProduct/OneProduct';
import { useSelector } from 'react-redux';


function Cart() {
  const cartItems = useSelector(state => state.cart.cart);
  let content;
  if (cartItems.length === 0) {
    content = <EmptyCart />
  } else if (cartItems.length > 0) {
    content = <>
      <div className={classes.products}>
        {
          cartItems.map(item => (
            <OneProduct key={item.product.id} product={item.product} />
          ))
        }
      </div>
      <CartForm />
    </>
  }

  return ( <>
    <div className={classes.page_info}>
      <h2 className={classes.heading}>Shopping cart</h2>
      <div className={classes.button_wrapper}>
        <div className={classes.line}></div>
        <Link to='/all-products' className={classes.button}>Back to the store</Link>
      </div>
    </div>
    <div className={classes.cart}>
      {content}
    </div>
  </> );
}

export default Cart;