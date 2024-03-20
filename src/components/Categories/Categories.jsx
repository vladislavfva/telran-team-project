import React from "react";
import classes from "./Categories.module.css";
import { Link } from 'react-router-dom';

export const Categories = ({ categories}) => {
  return (
    <Link
      to={`/categories/${categories.id}`}
      className={classes.info_container}>
          <img
            src={process.env.REACT_APP_BACKEND_BASE_URL + categories.image}
            alt={categories.title}
          /> 
      <p>{categories.title}</p>
        </Link>
   
  );
};
