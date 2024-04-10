import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/slices/productsSlice';
import classes from './ProductsList.module.css';
import {
  setFilterDiscounted,
  setRandomize,
} from '../../store/slices/productsSlice';
import Skeleton from '../Skeleton/Skeleton';

function ProductsList({ filterDiscounted, randomize }) {
  const products = useSelector((state) => state.product.products);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then(() => {
      setIsLoading(false);
    });
    dispatch(setFilterDiscounted(filterDiscounted));
    dispatch(setRandomize(randomize));
  }, [filterDiscounted, randomize]);

  // Here shoul be placed a skeleton
  if (isLoading) {
    return <Skeleton count={12} />;
  }

  return (
    <div className={classes.products_list}>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
