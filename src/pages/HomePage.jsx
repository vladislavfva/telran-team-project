import SaleList from "../components/SaleList/SaleList";
import { Banner } from "../components/Banner/Banner";
import CategoriesRender from "../components/CategoriesRender/CategoriesRender";
import FormSale from "../components/FormSale/FormSale";

function HomePage() {
  return ( <>
    <Banner />
    <CategoriesRender />
    <FormSale />
    <SaleList />
  </> );
}

export default HomePage;