import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import { setPriceFrom } from "../store/slices/productsSlice";

function SalesPage() {
  const discountFilter = (product) =>
  product.discont_price && product.discont_price < product.price;

  const priceFrom = useSelector((state) => state.product.priceFrom);
  const dispatch = useDispatch();

  const handlePriceFromChange = (price) => {
    dispatch(setPriceFrom(price));
  }

  const filterPriceFrom = (product) => product.price > priceFrom

  return ( <>
    <h2>Discounted items</h2>
    <div>
      <div>
        <p>Price</p>
        <input type="text" placeholder="from" onChange={(e) => handlePriceFromChange(e.target.value)}/> 
        <input type="text" placeholder="to"/>
      </div>
      <div>
      <p>Sorted</p>
        <select name="sort" id="sort">
          <option value="decrease">decrease</option>
          <option value="increase">increase</option>
        </select>
      </div>
    </div>
    <div className='section'>
    {<ProductsList filterFunction={discountFilter} filterPriceFrom={filterPriceFrom}/>}
    </div>
  </> );
}

export default SalesPage;