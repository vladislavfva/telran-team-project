import CloseIcon from "./DiscountPopupIcons";

function DiscountPopup() {
  return ( <div>
    <div>
      <p>50% discount on product of the day!</p>
      <div>
        <img src={process.env.REACT_APP_BACKEND_BASE_URL + product.image} alt={product.title} />
        <p>{product.title}</p>
        {product.discont_price ? (
            <>
              <p className={classes.price}>${product.discont_price}</p>
              <p className={classes.discount_price}>${product.price}</p>
              <div className={classes.discount}>
                {product.discont_price
                ? '-' + Math.ceil(((product.price - product.discont_price) * 100) / product.price) + '%'
                : ''}
        </div>
            </>
          ) : (
            <p className={classes.price}>${product.price}</p>
        )}
      </div>
      <button>Add to cart</button>
      <button>
        <CloseIcon />
      </button>
    </div>
  </div> );
}

export default DiscountPopup;