import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetProducts } from "../../../hooks/useGetProducts";
import RenderItem from "../../../UI/renderItem/RenderItem";
import styles from "./Search.module.css";

function Search() {
  const product = useGetProducts();

  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("q");
  const navigate = useNavigate();

  const productFilter = product.filter((item) => {
    // note agar url bedon q bashe null mide ke karo kharab mikone pas code payin neveshtam
    const search = (searchInput || "").toLowerCase();
    return (
      item.name.includes(search) ||
      item.id.includes(search) ||
      item.category === search ||
      item.type.includes(search)
    );
  });
  console.log(productFilter);

  return (
    <div>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        back to applayout
      </button>

      {searchInput === "" ? (
        <p className={styles.p}>please first search item :D</p>
      ) : productFilter.length > 0 ? (
        <RenderItem renderArr={productFilter} />
      ) : (
        <p className={styles.pNOT}>your search is undefind :D</p>
      )}
    </div>
  );
}

export default Search;
