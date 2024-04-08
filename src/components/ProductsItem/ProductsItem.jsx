import { Link } from 'react-router-dom';
import classes from './ProductsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import CartIcon from './ProductsItemIcons';
import { LikedIcon } from './LikedIcon';
import { addToLiked, remove } from '../../store/slices/likedSlice';

function ProductsItem({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.cart.some(item => item.product.id === product.id));
  const likedProduct = useSelector(state => state.liked.liked.some((item) => item.product.id === product.id))

  return (
    <div className={classes.product_card}>
      <Link to={`/product/${product.id}`}>
        <div>
          <img
            src={process.env.REACT_APP_BACKEND_BASE_URL + product.image}
            alt={product.title}
          />
          <div className={classes.card_info}>
            <p className={classes.title}>{product.title}</p>
            {product.discont_price ? (
              <>
                <p className={classes.price}>${product.discont_price}</p>
                <p className={classes.discount_price}>${product.price}</p>
                <div className={classes.discount}>
                  {product.discont_price
                    ? "-" +
                      Math.ceil(
                        ((product.price - product.discont_price) * 100) /
                          product.price
                      ) +
                      "%"
                    : ""}
                </div>
              </>
            ) : (
              <p className={classes.price}>${product.price}</p>
            )}
          </div>
        </div>
      </Link>
      <div className={classes.product_liked}>
        <button
          className={classes.add_to_liked}
          onClick={() => {
            if (likedProduct ) {
              dispatch(remove({ product }));
            } else {
              dispatch(addToLiked({ product }));
            }
          }}
        >
          {likedProduct ? <LikedIcon isActive={true} /> : <LikedIcon />}
        </button>
      </div>
      <div className={classes.product_actions}>
        <button
          className={classes.add_to_cart}
          onClick={() => dispatch(addToCart({ product }))}
        >
          {inCart ? <CartIcon isActive={true} /> : <CartIcon />}
        </button>
      </div>
    </div>
  );
}

export default ProductsItem;
