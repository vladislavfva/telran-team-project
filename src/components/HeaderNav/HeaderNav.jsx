import React from "react";
import { useState } from "react";
import classes from "./HeaderNav.module.css";
import { SvgHeart } from "../../assets/iconComponents/SvgHeart";
import { SvgBascket } from "../../assets/iconComponents/SvgBascket";
import logo from "../../assets/iconComponents/logo.svg";
import { SvgModeMoon } from "../../assets/iconComponents/SvgModeMoon";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  
  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div>
          <SvgModeMoon />
        </div>
      </div>
      {!burgerMenuOpen && (
        <div className={classes.central_container__nav}>
          <button className={classes.btn}>1 day discount!</button>
          <button
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            className={classes.cross_btn}
          >
            <div className={classes.cross}>
              <span className={classes.span_bevelled__top}></span>
              <span className={classes.span_bevelled__botton}></span>
            </div>
          </button>
          <nav className={classes.nav_container}>
            <ul>
              <li>
                <NavLink className={classes.nav_element__style}>
                  Main Page
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className={classes.nav_element__style}>
                  Categories
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className={classes.nav_element__style}>
                  All products
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className={classes.nav_element__style}>
                  All sales
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className={classes.btn_burger__menu}>1 day discount!</button>
        </div>
      )}

        <div className={classes.icon_container}>
          <SvgHeart />
          <SvgBascket />
        </div>

      <button
        className={classes.menu_btn}
        onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
      >
        <div className={classes.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};
