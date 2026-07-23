import { useParams, useSearchParams } from "react-router-dom";
import { useGetProducts } from "../../hooks/useGetProducts";

export function useFilterProduct() {
  const product = useGetProducts();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const filterByCategori = product.filter((item) => item.category === category);

  const filterByType =
    type === "all"
      ? filterByCategori
      : filterByCategori.filter((item) => item.type === type);

  return filterByType;
}
