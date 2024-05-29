import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowLogin, setSearch }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, getTotalCartItems } = useContext(StoreContext);

  return (
    <div className="navbar fixed-top shadow">
      <Link to={"/"}>
        <h2 style={{ color: "tomato" }}>Snap Snacks.</h2>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="nanvbar-right">
        <a href="#food-display">
          <img
            onClick={() => setSearch(true)}
            src={assets.search_icon}
            alt="search"
          />
        </a>
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartItems() > 0 ? "dot" : ""}>
            {getTotalCartItems() > 0 && getTotalCartItems()}
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};