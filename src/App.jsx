import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import ProductDetails from "../src/pages/ProductDetails";
import Cart from "../src/pages/Cart";
import Checkout from "../src/pages/Checkout";
import OrderSuccess from "../src/pages/OrderSuccess";
import UserOrders from "../src/pages/UserOrders";

import Login from "../src/auth/Login";
import Register from "../src/auth/Register";

function App() {
  return (
    <Routes>
      {/* USER LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<UserOrders />} />
      </Route>

      {/* AUTH PAGES (NO NAVBAR/FOOTER) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
