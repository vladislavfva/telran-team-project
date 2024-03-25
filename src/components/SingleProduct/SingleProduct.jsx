import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../store/slices/singleProductSlice';
import { useParams } from 'react-router';


function SingleProduct() {
const singleProduct = useSelector(state => state.singleProduct.singleProduct)

    const {id} = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
           dispatch(getSingleProduct(id));
    }, [])
    
  return (
    <div>
          <p>{singleProduct[0].title}</p>
    </div>
  );
}

export default SingleProduct;