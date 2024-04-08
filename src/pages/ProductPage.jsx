import { useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct/SingleProduct";

function ProductPage() {
const product = useSelector((state) => state.singleProduct.singleProduct)

  return (
    <div>
      <SingleProduct product={product[0]} />

    </div>
  );
}

export default ProductPage;