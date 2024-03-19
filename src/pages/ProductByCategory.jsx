import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/productsSlice";
import { productById} from '../store/slices/productsSlice'
import { useParams } from "react-router";

export const ProductByCategory = () => {
  const products = useSelector((state) => state.product.products);
 
  const allProducts = useSelector((state )=> state.product.allProducts);
  const dispatch = useDispatch();
  const { categoryId } = useParams(); 
console.log(categoryId);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
     dispatch(productById(categoryId));
}, [allProducts])

  return (
    <>
      <div>ProductByCategory</div>
      <ProductsList />
    </>
  );
};
