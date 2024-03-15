import ProductsList from "../components/ProductsList/ProductsList";
import ProductsFilters from "../components/ProductsFilters/ProductsFilters";

function SalesPage() {
  return ( <>
    <h2>Discounted items</h2>
    <ProductsFilters />
    <ProductsList filterDiscounted={true} randomize={false}/>
  </> );
}

export default SalesPage;