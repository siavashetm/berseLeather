import RenderItem from "../../UI/renderItem/RenderItem";
import { useFilterProduct } from "./useFilterProduct";

function ProductList() {
  const renderArr = useFilterProduct();
  return (
    <div>
      <RenderItem renderArr={renderArr} />
    </div>
  );
}

export default ProductList;
