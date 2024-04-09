import ProductsFilters from "../components/ProductsFilters/ProductsFilters";
import ProductsList from "../components/ProductsList/ProductsList";

function AllProducts() {
  return (
    <>
      <h2 style={{ color: "var(--color-text)" }}>All products</h2>
      <ProductsFilters />
      <ProductsList filterDiscounted={false} randomize={false} />
    </>
  );
}

export default AllProducts;