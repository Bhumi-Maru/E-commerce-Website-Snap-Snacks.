import React from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const navigate = useNavigate();
  function navigator() {
    navigate("/");
  }

  return (
    <div className="payment-completed" style={{ marginTop: "50px" }}>
      <div className="main-container">
        <div className="check-container">
          <div className="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="check-shadow"></div>
        </div>
      </div>
      <h1>Payment Completed</h1>
      <p>
        Thank you for your payment. Your transaction has been successfully
        processed.
      </p>
      <button onClick={navigator}>Go to Homepage</button>
    </div>
  );
}
