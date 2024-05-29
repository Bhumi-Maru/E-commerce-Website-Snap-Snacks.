import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor,
          aspernatur asperiores quia deleniti molestias assumenda aliquid dolore
          veritatis itaque?
        </p>
        <button>
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};
