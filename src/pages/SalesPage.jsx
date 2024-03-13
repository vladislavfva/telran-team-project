import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import { setPriceFrom, setPriceTo } from "../store/slices/productsSlice";

function SalesPage() {
  const discountFilter = (product) =>
  product.discont_price && product.discont_price < product.price;

  const priceFrom = useSelector((state) => state.product.priceFrom);
  const priceTo = useSelector((state) => state.product.priceTo);
  const dispatch = useDispatch();

  const handlePriceFromChange = (price) => {
    dispatch(setPriceFrom(price));
    console.log(price)
  }

  const handlePriceToChange = (price) => {
    dispatch(setPriceTo(price));
    console.log(price)
  }

  const filterPriceFrom = (product) => product.price >= priceFrom;
  const filterPriceTo = (product) => product.price <= priceTo;

  return ( <>
    <h2>Discounted items</h2>
    <div>
      <div>
        <p>Price</p>
        <input type="number" placeholder="from" onChange={(e) => handlePriceFromChange(e.target.value)}/> 
        <input type="number" placeholder="to" onChange={(e) => handlePriceToChange(e.target.value)}/>
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
    {<ProductsList filterFunction={discountFilter} filterPriceFrom={filterPriceFrom} filterPriceTo={filterPriceTo}/>}
    </div>
  </> );
}

export default SalesPage;