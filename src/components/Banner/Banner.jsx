import React from 'react';
import classes from './Banner.module.css';
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.context_container}>
        <h1 className={classes.text_amazing__discounts}>
          Amazing Discounts on Garden Products!
        </h1>
        <Link to="/all-sales">
          <button className={classes.button_check}>See all sales</button>
        </Link>
      </div>
    </div>
  );
};
