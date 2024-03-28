import React, { useEffect, useState } from "react";
import classes from "./SingleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/slices/singleProductSlice";
import { useParams } from "react-router-dom";
import { SvgHeart } from "./../../assets/iconComponents/SvgHeart";

function SingleProduct() {

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
  

  return (
    <div className={classes.container}>
      <div>
        <img
          src={process.env.REACT_APP_BACKEND_BASE_URL + image}
          alt={title}
          className={classes.img}
        />
      </div>
      
      <div className={classes.container_info}>
        <div className={classes.container_title}>
          <h3>{title}</h3>
          <SvgHeart />
        </div>

        <div className={classes.container_prise}>
          <h2>${discont_price}</h2>
          <h2 className={classes.not_current__price}>${price}</h2>
        </div>

        <div className={classes.container_addToCard}>
          <button className={classes.btn}>-</button>
          <div>0</div>
          <button className={classes.btn}>+</button>
          <button className={classes.btn_add}>Add to cart</button>
        </div>

        <div className={classes.container_text}>
          <h4>{title}</h4>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
