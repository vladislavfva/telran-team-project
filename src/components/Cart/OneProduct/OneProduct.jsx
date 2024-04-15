import classes from './OneProduct.module.css';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  decrease,
  increase,
  removeFromCart,
} from '../../../store/slices/cartSlice';
import { DecreaseIcon, RemoveIcon, IncreaseIcon } from './OneProductIcons';
import { Link } from 'react-router-dom';

function OneProduct({ product }) {
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(addToCart({ product }));
  };

  const decreaseCounter = () => {
    if (product.amount === 1) {
      console.log('Удалить');
      dispatch(removeFromCart({ product }));
    } else {
      dispatch(decrease(product));
    }
  };

  return (
    
    <div className={classes.one_product}>
      <Link to={`/product/${product.id}`}>
        <img
          src={process.env.REACT_APP_BACKEND_BASE_URL + product.image}
          alt={product.title}
          className={classes.preview}
        />
        </Link>
        <div className={classes.info}>
          <div className={classes.top_info}>
            <p className={classes.title}>{product.title}</p>
            <button
              className={classes.button}
              onClick={() => dispatch(removeFromCart({ product }))}
            >
              <RemoveIcon />
            </button>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.counter}>
              <button
                className={classes.button_counter}
                onClick={() => decreaseCounter()}
              >
                <DecreaseIcon />
              </button>
              <p className={classes.counter_text}>{product.amount}</p>
              <button
                className={classes.button_counter}
                onClick={() => increaseCounter()}
              >
                <IncreaseIcon />
              </button>
            </div>
            {product.discont_price ? (
              <div className={classes.prices}>
                <p className={classes.current_price}>
                  ${product.discont_price}
                </p>
                <p className={classes.old_price}>${product.price}</p>
              </div>
            ) : (
              <p className={classes.current_price}>${product.price}</p>
            )}
          </div>
        </div>
      </div>
   
  );
}

export default OneProduct;
