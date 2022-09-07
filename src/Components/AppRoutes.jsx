import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import LandinPage from "./landinPage";
import Products from "./products";
import Cart from "./Cart";
import ChechOut from "./ChechOut";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandinPage />} />
          <Route path="/products" element={<Products title = 'Products Page' />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<ChechOut />} />
        </Routes>
      </Router>
    </div>
  );
}
export default AppRouter;
