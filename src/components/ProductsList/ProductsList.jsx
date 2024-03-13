import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect } from 'react';
import { getProducts } from '../../store/slices/productsSlice';
import classes from './ProductsList.module.css';
import { setFilterDiscounted, setRandomize } from '../../store/slices/productsSlice'

function ProductsList({filterDiscounted, randomize}) {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(setFilterDiscounted(filterDiscounted));
    dispatch(setRandomize(randomize));

  }, [filterDiscounted, setRandomize]);

  return (
    <div className={classes.products_list}>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;