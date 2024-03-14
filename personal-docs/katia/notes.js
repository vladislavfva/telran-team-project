 {/* burger-menu */}
      <div className={classes.burger_menu}>
        {burgerMenuOpen && (
          <div
            className={`classes.container_nav__burger_menu, ${
              burgerMenuOpen ? "openBurger" : ""
            }`}
          >
            <nav className={classes.nav_burger__menu}>
              <ul>
                <li>
                  <NavLink className={classes.nav_element__style_burger_menu}>
                    Main Page
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink className={classes.nav_element__style_burger_menu}>
                    Categories
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink className={classes.nav_element__style_burger_menu}>
                    All products
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink className={classes.nav_element__style_burger_menu}>
                    All sales
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className={classes.btn_burger__menu}>
              1 day discount!
            </button>
          </div>
        )}

        
        </div>