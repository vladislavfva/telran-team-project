import CloseIcon from "./DiscountPopupIcons";

function DiscountPopup({product}) {
  return ( <div>
    <div>
      <p>50% discount on product of the day!</p>
      <div>
        <img src={process.env.REACT_APP_BACKEND_BASE_URL + product.image} alt={product.title} />
        <p>{product.title}</p>
        {product.discont_price ? (
            <>
              <p>${product.discont_price}</p>
              <p>${product.price}</p>
              <div>
                {product.discont_price
                ? '-' + Math.ceil(((product.price - product.discont_price) * 100) / product.price) + '%'
                : ''}
        </div>
            </>
          ) : (
            <p>${product.price}</p>
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