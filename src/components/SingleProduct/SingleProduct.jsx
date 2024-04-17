import React, { useEffect, useState } from 'react';
import classes from './SingleProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../store/slices/singleProductSlice';
import { useParams } from 'react-router-dom';
import { DecreaseIcon, IncreaseIcon } from '../Cart/OneProduct/OneProductIcons';
import { LikedIcon } from '../ProductsItem/LikedIcon';
import { addToCart } from '../../store/slices/cartSlice';
import { addToLiked, remove } from '../../store/slices/likedSlice';

function SingleProduct({ product }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  // expand = rozwernutu
  const [isExpand, setIsExpand] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [amount, setAmount] = useState(1);

  const likedProduct = useSelector((state) =>
    state.liked.liked.some((item) => item.product)
  );

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  if (!product || product.length === 0) {
    return <div style={{ color: "transparent" }}>Loading...</div>;
  }

  const { image, title, price, discont_price, description } = product;

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const decreaseCounter = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const increaseCounter = () => {
    setAmount(amount + 1);
  };

  return (
    <>
      <div className={classes.container_title__up}>
        {/* повторяется код */}
        <h3>{title}</h3>
        <button
          className={classes.add_to_liked}
          onClick={() => {
            if (likedProduct) {
              dispatch(remove({ product }));
            } else {
              dispatch(addToLiked({ product }));
            }
          }}
        >
          {likedProduct ? <LikedIcon isActive={true} /> : <LikedIcon />}
        </button>
      </div>
      <div className={classes.container}>
        <div>
          <img
            src={process.env.REACT_APP_BACKEND_BASE_URL + image}
            alt={title}
            className={classes.img}
            onClick={togglePopup}
          />
          {showPopup && (
            <div className={classes.popup}>
              <img
                src={process.env.REACT_APP_BACKEND_BASE_URL + image}
                alt={title}
                className={classes.popup_img}
                onClick={togglePopup}
              />
            </div>
          )}
        </div>

        <div className={classes.container_info}>
          <div className={classes.container_title}>
            {/* повторяется код */}
            <h3>{title}</h3>
            <button
              className={classes.add_to_liked}
              onClick={() => {
                if (likedProduct) {
                  dispatch(remove({ product }));
                } else {
                  dispatch(addToLiked({ product }));
                }
              }}
            >
              {likedProduct ? <LikedIcon isActive={true} /> : <LikedIcon />}
            </button>
          </div>

          <div className={classes.container_prise}>
            {discont_price ? (
              <>
                <h2 className={classes.price}>${discont_price}</h2>
                <div className={classes.container_discount}>
                  <h2 className={classes.not_current__price}>${price}</h2>
                  <div className={classes.discount}>
                    {discont_price
                      ? '-' +
                        Math.ceil(((price - discont_price) * 100) / price) +
                        '%'
                      : ''}
                  </div>
                </div>
              </>
            ) : (
              <h2 className={classes.price}>${price}</h2>
            )}
          </div>

          <div className={classes.container_addToCard}>
            <div className={classes.container_minus_plus}>
              <button className={classes.btn} onClick={decreaseCounter}>
                <DecreaseIcon />
              </button>
              <div>{amount}</div>
              <button className={classes.btn} onClick={increaseCounter}>
                <IncreaseIcon />
              </button>
            </div>

            <button
              className={classes.btn_add}
              onClick={() => dispatch(addToCart({ product }))}
              onClick={() => {
                if (amount > 2) {
                  for (let i = 0; i < amount; i++) {
                    dispatch(addToCart({ product }));
                  }
                } else {
                  dispatch(addToCart({ product }));
                }
              }}
            >
              Add to cart
            </button>
          </div>

          <div className={classes.container_text}>
            <h4>Discription</h4>
            <p className={classes.description}>
              {isExpand ? description : `${description.slice(0, 100)}...`}
              <button className={classes.btn_readMore} onClick={toggleExpand}>
                {isExpand ? 'Hide' : 'Read More'}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.container_text__down}>
        <h4>Discription</h4>
        <p className={classes.description}>
          {isExpand ? description : `${description.slice(0, 100)}...`}
          <button className={classes.btn_readMore} onClick={toggleExpand}>
            {isExpand ? 'Hide' : 'Read More'}
          </button>
        </p>
      </div>
    </>
  );
}

export default SingleProduct;
