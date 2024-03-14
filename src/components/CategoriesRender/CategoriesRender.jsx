import React from "react";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import classes from "./CategoriesRender.module.css";
import { Link } from "react-router-dom";

const CategoriesRender = () => {
  const start = 0;
  const end = 4;

  return (
    <main className={classes.container}>
      <div className={classes.top_container}>
        <h2>Catiegories</h2>
        <div className={classes.container_line}>
          <div className={classes.line}></div>
          <div className={classes.container_all__categories}>
            <Link className={classes.link}>All categories</Link>
          </div>
        </div>
      </div>
      
        <CategoriesList sliceStart={start} sliceEnd={end} />

    </main>
  );
};

export default CategoriesRender;
