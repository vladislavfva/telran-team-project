import React from "react";
import classes from "./Categories.module.css";

export const Categories = ({categories}) => {
  return (
    <div className={classes.info_container}>
          <img
            src={process.env.REACT_APP_BACKEND_BASE_URL + categories.image}
            alt={categories.title}
          /> 
          <p>{categories.title}</p>
        </div>
   
  );
};
