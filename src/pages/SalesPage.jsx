import ProductsList from "../components/ProductsList/ProductsList";

function SalesPage() {
  const discountFilter = (product) =>
  product.discont_price && product.discont_price < product.price;

  return ( <>
    <p>Sales Page</p>
    {<ProductsList filterFunction={discountFilter}/>}
  </> );
}

export default SalesPage;