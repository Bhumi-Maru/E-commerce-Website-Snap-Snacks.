import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <>
        {loading ? (
          <div className="loading-container">
            <img
              src="https://github.com/rinkuv37/Ecommerce-Website-React/blob/main/src/assets/images/loading.gif?raw=true"
              alt="Loading"
            />
          </div>
        ) : (
          <form className="place-order">
            <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <input type="email" placeholder="Email Addrees" />
              <input type="text" placeholder="Street" />
              <div className="multi-fields">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
              </div>
              <div className="multi-fields">
                <input type="text" placeholder="Zip code" />
                <input type="text" placeholder="Country" />
              </div>
              <input type="text" placeholder="Phone" />
            </div>

            <div className="place-order-right">
              <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount() + 2}</b>
                  </div>
                </div>
                <button onClick={alert("Payment Successfully!..👍")}>
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="arrow-btn">
          <div className="left-arrow" onClick={() => navigate(-1)}>
            ←
          </div>
          <div className="right-arrow" onClick={() => navigate(1)}>
            →
          </div>
        </div>
      </>
    </>
  );
};
