import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/applayout/Applayout";
import Product from "./pages/product/Product";
import DetailPage from "./pages/detailPage/DetailPage";
import ProductList from "./features/productRout/ProductList";
import Search from "./features/nav/search/Search";
import About from "./features/nav/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />} />
          <Route path="product" element={<Product />}>
            <Route path="/product/:category" element={<ProductList />} />
          </Route>
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
