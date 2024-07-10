import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { getAuth, signOut } from "firebase/auth";

export const Navbar = ({ setShowLogin, user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [signOutDropdown, setSignOutDropdown] = useState(false);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        setSignOutDropdown(false);
        alert("Signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  const { getTotalCartAmount, getTotalCartItems } = useContext(StoreContext);

  return (
    <>
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
            href="#map"
            onClick={() => setMenu("map")}
            className={menu === "map" ? "active" : ""}
          >
            Location
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
            <img src={assets.search_icon} alt="search" />
          </a>
          <div className="navbar-search-icon">
            <Link to={"/cart"}>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartItems() > 0 ? "dot" : ""}>
              {getTotalCartItems() > 0 && getTotalCartItems()}
            </div>
          </div>

          {/* Google Authentication */}
          {user ? (
            <>
              <div
                className="user-info"
                onClick={() => setSignOutDropdown(!signOutDropdown)}
              >
                <p>
                  Hello! &nbsp;
                  <span style={{ color: "tomato" }}>{user.displayName}</span>
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="user-photo"
                  />
                </p>
              </div>
              {signOutDropdown && (
                <ul className="signout-dropdown">
                  <li onClick={handleSignOut}>
                    Sign Out
                    <i
                      className="fa-solid fa-arrow-right-from-bracket"
                      style={{ fontSize: "18px", marginLeft: "5px" }}
                    ></i>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
