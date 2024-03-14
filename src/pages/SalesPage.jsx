import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import { filterPriceFrom, filterPriceTo } from '../store/slices/productsSlice'

function SalesPage() {
  const dispatch = useDispatch();

  const handlePriceFrom = (price) => {
    dispatch(filterPriceFrom(price))
  }

  const handlePriceTo = (price) => {
    dispatch(filterPriceTo(price))
  }

  return ( <>
    <h2>Discounted items</h2>
    <div>
      <div>
        <p>Price</p>
        <input type="number" placeholder="from" onChange={(e) => handlePriceFrom(e.target.value)}/> 
        <input type="number" placeholder="to"onChange={(e) => handlePriceTo(e.target.value)}/>
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
    <ProductsList filterDiscounted={true} randomize={false}/>
    </div>
  </> );
}

export default SalesPage;