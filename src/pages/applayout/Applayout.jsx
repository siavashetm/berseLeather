import Nav from "../../features/nav/Nav";
import FirstLink from "../../features/firstlink/FirstLink";
import Picslider from "../../features/picslider/Picslider";
import Footer from "../../features/footer/Footer";
import Collection from "../../features/collection/Collection";
import BasketHook from "../../features/basket/UseBasket";
import { useSelector } from "react-redux";
import Loading from "../../UI/loading/Loading";
import RandomProducts from "../../features/randomProducts/RandomProducts";
import { useGetProducts } from "../../hooks/useGetProducts";

function Applayout() {
  const product = useGetProducts();
  const isLoading = useSelector((store) => store.products.isLoading);

  if (isLoading) return <Loading />;

  return (
    <div>
      {/* note in component basketHook  hamon basket ke conditional render mishe va chon chand ja bayad neveshte mishod injori neveshtam  */}
      <BasketHook />
      <Nav />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Picslider />
          <FirstLink />
          <Collection />
          <RandomProducts product={product} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Applayout;
