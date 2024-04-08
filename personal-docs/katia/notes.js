 {/* burger-menu */}
//       <div className={classes.burger_menu}>
//         {burgerMenuOpen && (
//           <div
//             className={`classes.container_nav__burger_menu, ${
//               burgerMenuOpen ? "openBurger" : ""
//             }`}
//           >
//             <nav className={classes.nav_burger__menu}>
//               <ul>
//                 <li>
//                   <NavLink className={classes.nav_element__style_burger_menu}>
//                     Main Page
//                   </NavLink>
//                 </li>
//               </ul>
//               <ul>
//                 <li>
//                   <NavLink className={classes.nav_element__style_burger_menu}>
//                     Categories
//                   </NavLink>
//                 </li>
//               </ul>
//               <ul>
//                 <li>
//                   <NavLink className={classes.nav_element__style_burger_menu}>
//                     All products
//                   </NavLink>
//                 </li>
//               </ul>
//               <ul>
//                 <li>
//                   <NavLink className={classes.nav_element__style_burger_menu}>
//                     All sales
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>
//             <button className={classes.btn_burger__menu}>
//               1 day discount!
//             </button>
//           </div>
//         )}

        
// </div>
        

/*single product first option  */
//  <div className={classes.container}>
//         <div>
//           <img
//             src={process.env.REACT_APP_BACKEND_BASE_URL + image}
//             alt={title}
//             className={classes.img}
//           />
//         </div>

//         <div className={classes.container_info}>
//           <div className={classes.container_title}>
//             <h3>{title}</h3>
//             <SvgHeart />
//           </div>

//           <div className={classes.container_prise}>
//             <h2>${discont_price}</h2>
//             <h2 className={classes.not_current__price}>${price}</h2>
//           </div>

//           <div className={classes.container_addToCard}>
//             <div className={classes.container_minus_plus}>
//               <button className={classes.btn}>-</button>
//               <div>0</div>
//               <button className={classes.btn}>+</button>
//             </div>

//             <button className={classes.btn_add}>Add to cart</button>
//           </div>

//           <div className={classes.container_text}>
//             <h4>{title}</h4>
//             <p className={classes.description}>{description}</p>
//           </div>
//         </div>
//       </div>
//       <div className={classes.container_text__down}>
//         <h4>{title}</h4>
//         <p className={classes.description}>{description}</p>
//       </div>



 {
   likedProduct.length === 0 ? (
     <p>Go see some products!</p>
   ) : (
     liked.map((product) => <LikedProduct key={product.id} product={product} />)
   );
 }