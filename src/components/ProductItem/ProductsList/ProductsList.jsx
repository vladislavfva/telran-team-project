import {useDispatch, useSelector} from 'react-redux'
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect } from 'react';
import { getProducts } from '../../../features/productsSlice/productsSlice';
import classes from './ProductsList.module.css'


function ProductsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const products = useSelector((state) => state.product.products)
  return ( <div className={classes.products_list}>
    {products?.map((product) => (
      <ProductsItem key={product.title} product={product} />
    ))}
  </div> );
}

export default ProductsList;