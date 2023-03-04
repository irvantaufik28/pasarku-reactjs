import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Order from "../pages/Order";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import Product from "../pages/Product";
import NavbarTop from "../components/Navbar";
function RoutesIndex() {
  return (
    <Router>
      <div>
        <NavbarTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesIndex;
