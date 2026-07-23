import { Outlet } from "react-router-dom";
import Nav from "../../features/nav/Nav";
import Footer from "../../features/footer/Footer";
import BasketHook from "../../features/basket/UseBasket";

function Product() {
  return (
    <div>
      {/* note in component basketHook  hamon basket ke conditional render mishe va chon chand ja bayad neveshte mishod injori neveshtam  */}

      <BasketHook />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Product;
