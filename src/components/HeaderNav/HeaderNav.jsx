import React from 'react'
import classes from './HeaderNav.module.css'

export const HeaderNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <div>logo</div>
      </div>

      <nav className={classes.nav_container}>
        <a href="#" className={classes.nav_element__style}>Main Page</a>
        <a href="#" className={classes.nav_element__style}>Categories</a>
        <a href="#" className={classes.nav_element__style}>All products</a>
        <a href="#" className={classes.nav_element__style}>All sales</a>
      </nav>

      <div className={classes.basket_container}>
        <div>basket</div>
      </div>
    </div>
  );
}

