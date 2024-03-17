import React, { useEffect } from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/productsSlice';
import { getCategories } from '../store/slices/categoriesSlice';
import ProductsItem from '../components/ProductsItem/ProductsItem';


export const AnnualsPage = ({categories, products }) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [])
    
    const categoriesList = useSelector((state) => state.categories.categories);
    const categoryId = useSelector((state) => state.product.products);
    console.log(categoryId);

    return (
      <>
        <div>Annuals Products</div>
        <ProductsList/>
      </>
    );
}
