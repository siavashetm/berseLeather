import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productRout/ProductSlice";

export function useGetProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const product = useSelector((store) => store.products.product);

  return product;
}
