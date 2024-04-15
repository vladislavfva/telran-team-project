import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Liked.module.css';
import { Link } from 'react-router-dom';
import ProductsItem from '../ProductsItem/ProductsItem';
import ProductsFilters from '../ProductsFilters/ProductsFilters';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../store/slices/productsSlice';
import Skeleton from '../Skeleton/Skeleton';
import EmptyCart from '../Cart/EmptyCart/EmptyCart';

export const Liked = () => {
  const likedProducts = useSelector((state) => state.liked.liked);
  const products = useSelector((state) => state.product.products);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then(() => {
      setIsLoading(false);
    });
  }, []);

  const likedProductsIds = likedProducts.map((product) => product.product.id);
  const filteredProducts = products.filter((product) =>
    likedProductsIds.includes(product.id)
  );

  if (isLoading) {
    return <Skeleton count={4} />;
  }

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
        {likedProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ProductsFilters />
            <div className={classes.container_liked__product}>
              {filteredProducts.map((product) => (
                <ProductsItem key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </>
    );
};
