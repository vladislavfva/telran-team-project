import React from "react";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import classes from "./CategoriesRender.module.css";
import { Link } from "react-router-dom";

const CategoriesRender = () => {
  const start = 0;
  const end = 4;

  return (
    <div className="section">
      <div className={classes.top_container}>
        <h2 className={classes.categor}>Categories</h2>
        <div className={classes.container_line}>
          <div className={classes.line}></div>
          <Link to={'/categories'} className={classes.link}>All categories</Link>
        </div>
      </div>

      <CategoriesList sliceStart={start} sliceEnd={end} />
      <Link
        to="/categories"
        className={`${classes.link} ${classes.mobile}`}
      >
        All categories
      </Link>
    </div>
  );
};

export default CategoriesRender;
