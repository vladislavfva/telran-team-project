import React from "react";
import { useState } from "react";
import classes from "./HeaderNav.module.css";
import { SvgHeart } from "../../assets/iconComponents/SvgHeart";
import { SvgBascket } from "../../assets/iconComponents/SvgBascket";
import logo from "../../assets/iconComponents/logo.svg";
import { SvgModeMoon } from "../../assets/iconComponents/SvgModeMoon";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { calculateTotals } from "../../store/slices/cartSlice";

import { Link, NavLink } from "react-router-dom";


export const HeaderNav = () => {
  const dispatch = useDispatch();
  const { cart, amount } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart])

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

 const handleClickToggle = () => {
   setBurgerMenuOpen(!burgerMenuOpen);
 };


  return (
    <div className={classes.container}>
      <div className={classes.logo_container}>
        <Link to={"/"}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
        <div>
          <SvgModeMoon />
        </div>
      </div>

      <div
        className={`${classes.central_container__nav} ${
          burgerMenuOpen ? classes.active : ""
        }`}
      >
        <button className={classes.btn}>1 day discount!</button>
        <button onClick={handleClickToggle} className={classes.cross_btn}>
          <div className={classes.cross}>
            <span className={classes.span_bevelled__top}></span>
            <span className={classes.span_bevelled__botton}></span>
          </div>
        </button>

        <nav className={classes.nav_container}>
          <ul>
            <li>
              <NavLink to={"/"} className={classes.nav_element__style}>
                Main Page
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to={"/categories"}
                className={classes.nav_element__style}
              >
                Categories
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to={"/all-products"}
                className={classes.nav_element__style}
              >
                All products
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/all-sales"} className={classes.nav_element__style}>
                All sales
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className={classes.btn_burger__menu}>1 day discount!</button>
      </div>

      <div className={classes.container_icon__menu}>
        <div className={classes.icon_container}>
          <SvgHeart />
          <Link className={classes.cart_wrapper} to="/cart">
            <p className={classes.cart_amount}>{amount}</p>
            <SvgBascket />
          </Link>
        </div>

        <button className={classes.menu_btn} onClick={handleClickToggle}>
          <div className={classes.menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
};
