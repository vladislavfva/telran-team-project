import React, { useEffect, useState } from "react";
import classes from "./SingleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/slices/singleProductSlice";
import { Link, useParams } from "react-router-dom";
import { SvgHeart } from "./../../assets/iconComponents/SvgHeart";
import { DecreaseIcon, IncreaseIcon } from "../Cart/OneProduct/OneProductIcons";
import { LikedIcon } from "../ProductsItem/LikedIcon";
import { addToCart } from "../../store/slices/cartSlice";

function SingleProduct({product}) {
  // expand = rozwernutu
  const [isExpand, setIsExpand] = useState(false);

   const [showPopup, setShowPopup] = useState(false);

  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  if (!singleProduct || singleProduct.length === 0 || !singleProduct[0]) {
    return <div>Loading...</div>;
  }

  const { image, title, price, discont_price, description } = singleProduct[0];

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className={classes.container_title__up}>
        <h3>{title}</h3>
        <SvgHeart />
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
            <h3>{title}</h3>
            <LikedIcon />
          </div>

          <div className={classes.container_prise}>
            {discont_price ? (
              <>
                <h2 className={classes.price}>${discont_price}</h2>

                <h2 className={classes.not_current__price}>${price}</h2>
              </>
            ) : (
              <h2 className={classes.price}>${price}</h2>
            )}

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
          </div>

          <div className={classes.container_addToCard}>
            <div className={classes.container_minus_plus}>
              <button className={classes.btn}>
                <DecreaseIcon />
              </button>
              <div>0</div>
              <button className={classes.btn}>
                <IncreaseIcon />
              </button>
            </div>

            <button
              className={classes.btn_add}
              onClick={() => dispatch(addToCart({ product }))}
            >
              Add to cart
            </button>
          </div>

          <div className={classes.container_text}>
            <h4>{title}</h4>
            <p className={classes.description}>
              {isExpand ? description : `${description.slice(0, 100)}...`}
              <button className={classes.btn_readMore} onClick={toggleExpand}>
                {isExpand ? "Hide" : "Read More"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.container_text__down}>
        <h4>{title}</h4>
        <p className={classes.description}>
          {isExpand ? description : `${description.slice(0, 100)}...`}
          <button className={classes.btn_readMore} onClick={toggleExpand}>
            {isExpand ? "Hide" : "Read More"}
          </button>
        </p>
      </div>
    </>
  );
}

export default SingleProduct;
