import React from "react";
import { useSelector } from "react-redux";
import classes from "./Liked.module.css";
import { Link } from "react-router-dom";
import ProductsItem from "../ProductsItem/ProductsItem";

export const Liked = () => {
  const likedProduct = useSelector((state) => state.liked.liked);

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>Liked products</h2>
        <div className={classes.button_wrapper}>
          <div className={classes.line}></div>
          <Link to="/all-products" className={classes.button}>
            Back to the store
          </Link>
        </div>
      </div>

      <div className={classes.container_liked__product}>
        {likedProduct.map((item) => (
          <ProductsItem key={item.product.id} product={item.product} />
        ))}
  
      </div>
    </>
  );
};
