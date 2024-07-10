import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ProductDetails from "./pages/Details Page/ProductDetails";
import Error from "./components/Error/Error";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState(false);
  const [category, setCategory] = useState("All");
  const [user, setUser] = useState(null);

  return (
    <>
      {showLogin ? (
        <LoginPopup
          setShowLogin={setShowLogin}
          setUser={setUser}
          showLogin={showLogin}
        />
      ) : (
        <></>
      )}
      {search && <FoodDisplay category={category} />}
      <div className="app">
        <Navbar
          setShowLogin={setShowLogin}
          setSearch={setSearch}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
