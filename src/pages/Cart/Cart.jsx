import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // price
  const [sortedFoodList, setSortedFoodList] = useState([]);

  useEffect(() => {
    setSortedFoodList(food_list);
  }, [food_list]);

  const sortPrice = () => {
    const sorted = [...sortedFoodList];
    if (ascending) {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedFoodList(sorted);
    setAscending(!ascending);
  };

  // search

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const searchData = sortedFoodList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <img
            src="https://github.com/rinkuv37/Ecommerce-Website-React/blob/main/src/assets/images/loading.gif?raw=true"
            alt="Loading"
          />
        </div>
      ) : (
        <>
          <div className="cart">
            <div className="sort-price-btn">
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search for dishes..."
              />
              <button onClick={sortPrice}>
                {ascending ? "Descending Price" : "Ascending Price"}
              </button>
            </div>
            <div className="cart-items">
              <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {searchData.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id}>
                      <div className="cart-items-title cart-items-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>${item.price * cartItems[item._id]}</p>
                        <p
                          onClick={() => removeFromCart(item._id)}
                          className="cross"
                        >
                          x
                        </p>
                      </div>
                      <hr />
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>
                      $
                      {getTotalCartAmount() === 0
                        ? 0
                        : getTotalCartAmount() + 2}
                    </b>
                  </div>
                </div>
                <button onClick={() => navigate("/order")}>
                  PROCEED TO CHECKOUT
                </button>
              </div>

              <div className="cart-promocode">
                <div>
                  <p>If you have a promo code, enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="arrow-btn">
              <div className="left-arrow" onClick={() => navigate(-1)}>
                ←
              </div>
              <div className="right-arrow" onClick={() => navigate(1)}>
                →
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
