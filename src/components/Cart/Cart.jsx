import classes from './Cart.module.css'

function Cart() {
  return ( <div>
    <div className={classes.order_info}>
      <p>Order details</p>
      <p>3 items</p>
      <div>
        <p>Total</p>
        <p>$541,00</p>
      </div>
    </div>
  </div> );
}

export default Cart;