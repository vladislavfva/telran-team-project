import classes from './ProductsItem.module.css'

function ProductsItem({product}) {
  return ( <div className={classes.product_card}>
    <img src={process.env.REACT_APP_BACKEND_BASE_URL + product.image} alt={product.title}/>
    <div className={classes.card_info}>
      <p className={classes.title}>{product.title}</p>
      <p className={classes.price}>${product.discont_price}</p>
      <p className={classes.discount_price}>${product.price}</p>
    </div>
    <div className={classes.discount}>{
      '-' + Math.ceil((product.price - product.discont_price) * 100 / product.price) + '%'
    }</div>
  </div> );
}

export default ProductsItem;