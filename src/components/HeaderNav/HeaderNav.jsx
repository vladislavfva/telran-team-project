import React from 'react'
import classes from './HeaderNav.module.css'
import { SvgHeart } from '../../assets/iconComponents/SvgHeart';
import { SvgBascket } from '../../assets/iconComponents/SvgBascket';
import logo from '../../assets/iconComponents/logo.svg'
import { SvgModeMoon } from '../../assets/iconComponents/SvgModeMoon';


export const HeaderNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <img src={logo} alt="logo" />
        <div>
        <SvgModeMoon />
        </div>
      </div>
      
      <div className={classes.central_container__nav}>
        <button className={classes.btn}>1 day discount!</button>
        <nav className={classes.nav_container}>
          <a href="#" className={classes.nav_element__style}>
            Main Page
          </a>
          <a href="#" className={classes.nav_element__style}>
            Categories
          </a>
          <a href="#" className={classes.nav_element__style}>
            All products
          </a>
          <a href="#" className={classes.nav_element__style}>
            All sales
          </a>
        </nav>
      </div>

      <div className={classes.basket_container}>
        <SvgHeart />
        <SvgBascket />
      </div>
    </div>
  );
}

