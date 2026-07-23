import BasketHook from "../../features/basket/UseBasket";
import DetailsProduct from "../../features/detailsProduct/DetailsProduct";
import Footer from "../../features/footer/Footer";
import Nav from "../../features/nav/Nav";

function DetailPage() {
  return (
    <div>
      {/* note in component basketHook  hamon basket ke conditional render mishe va chon chand ja bayad neveshte mishod injori neveshtam  */}

      <BasketHook />
      <Nav />
      <DetailsProduct />
      <Footer />
    </div>
  );
}

export default DetailPage;

// ye component basket besaz ke ye arr migire va on arr render mikone
// on arr az slice miyad va az btn buy gerefte  yani ba zadan btn arr ye arr to ye state global mire
// to basket ye btn pay darim va ye btn gazf product
// aval ye chizi ke bezarim to shoping card

// 1. akd shoping card ke link mishe be component basket
// 2.zaher basket  ke basket ba zadan btn baz va baste mishe ye state true false mikhad
// 3.detailsproduct ba zadan buy ye arr to state global save kone
// 4.ye arr migire va render mikone to safe ke basket applayout bayad render beshe
// yani be on arr to kol safe niyaz darim
// 5.
