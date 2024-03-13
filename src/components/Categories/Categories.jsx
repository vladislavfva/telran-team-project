import React from "react";
import classes from "./Categories.module.css";

export const Categories = ({categories}) => {
  return (
    <div className={classes.container}>
      <main className={classes.categories_container}>
        <h3>Catiegories</h3>
        <div className={classes.info_container}>
          {/* <img
            src={categories.image}
            alt={categories.title}
          />  */}
          <p>{categories.title}</p>
        </div>
      </main>
    </div>
  );
};
