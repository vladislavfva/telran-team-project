import { useDispatch, useSelector } from 'react-redux';
import classes from './DiscountPopup.module.css';
import { CloseIcon, LikeIcon } from './DiscountPopupIcons';
import { addToCart } from '../../store/slices/cartSlice';
import { addToLiked, remove } from '../../store/slices/likedSlice';

function DiscountPopup({ product, isActive, onClose }) {
  const dispatch = useDispatch();
  const likedProduct = useSelector((state) =>
    product && product.id
      ? state.liked.liked.some((item) => item.product.id === product.id)
      : false
  );

  if (!product) return null;

  if (isActive) {
    return (
      <div className={classes.popup}>
        <div className={classes.popup_card}>
          <p className={classes.title}>50% discount on product of the day!</p>
          <div className={classes.info}>
            <img
              className={classes.popup_img}
              src={process.env.REACT_APP_BACKEND_BASE_URL + product.image}
              alt={product.title}
            />
            <div className={classes.discount}>-50%</div>
            <button
              className={classes.like}
              onClick={() => {
                if (likedProduct) {
                  dispatch(remove({ product }));
                } else {
                  dispatch(addToLiked({ product }));
                }
              }}
            >
              {likedProduct ? <LikeIcon isActive={true} /> : <LikeIcon />}
            </button>
            <div className={classes.text_info}>
              <p className={classes.product_title}>{product.title}</p>
              <p className={classes.current_price}>${product.discont_price}</p>
              <p className={classes.price_before}>${product.price}</p>
            </div>
          </div>
          <button
            className={classes.button}
            onClick={() => dispatch(addToCart({ product }))}
          >
            Add to cart
          </button>
          <button className={classes.close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default DiscountPopup;
