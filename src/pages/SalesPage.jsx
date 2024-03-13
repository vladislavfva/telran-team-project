import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import { setPriceFrom, setPriceTo } from "../store/slices/productsSlice";

function SalesPage() {
  return ( <>
    <h2>Discounted items</h2>
    <div>
      <div>
        <p>Price</p>
        <input type="number" placeholder="from" /> 
        <input type="number" placeholder="to" />
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
    {<ProductsList />}
    </div>
  </> );
}

export default SalesPage;