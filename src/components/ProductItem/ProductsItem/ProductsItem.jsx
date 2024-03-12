import classes from './ProductsItem.module.css'

function ProductsItem({product}) {
  return ( <div className={classes.product_card}>
    <img src={'http://127.0.0.1:3333' + product.image} alt={product.title}/>
    <p>{product.title}</p>
    <div>
      <p>{product.price}</p>
      <p>{product.discont_price}</p>
    </div>
  </div> );
}

export default ProductsItem;