import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Liked.module.css';
import { Link } from 'react-router-dom';
import ProductsItem from '../ProductsItem/ProductsItem';
import ProductsFilters from '../ProductsFilters/ProductsFilters';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../store/slices/productsSlice';

export const Liked = () => {
  const likedProducts = useSelector((state) => state.liked.liked);
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const likedProductsIds = likedProducts.map((product) => product.product.id);
  const filteredProducts = products.filter((product) =>
    likedProductsIds.includes(product.id)
  );

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>Liked products</h2>
        <div className={classes.button_wrapper}>
          <div className={classes.line}></div>
          <Link to="/all-products" className={classes.button}>
            Back to the store
          </Link>
        </div>
      </div>
      <ProductsFilters />
      <div className={classes.container_liked__product}>
        {filteredProducts.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
