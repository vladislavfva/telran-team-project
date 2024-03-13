import ProductsList from "../components/ProductsList/ProductsList";

function SalesPage() {
  const discountFilter = (product) =>
  product.discont_price && product.discont_price < product.price;

  return ( <>
    <h2>Discounted items</h2>
    <div>
      <div>
        <p>Price</p>
        <input type="text" placeholder="from"/> 
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
    {<ProductsList filterFunction={discountFilter}/>}
    </div>
  </> );
}

export default SalesPage;