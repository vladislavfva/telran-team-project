import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect } from 'react';
import { getProducts } from '../../store/slices/productsSlice';
import classes from './ProductsList.module.css';

function ProductsList({ filterFunction, sliceStart, sliceEnd}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.product.products);

  const getRandomProducts = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products.filter(filterFunction), sliceEnd - sliceStart);

  return (
    <div className={classes.products_list}>
      {randomProducts.map((product) => (
        <ProductsItem key={product.title} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;