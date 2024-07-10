import React, { useRef } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      menuRef.current.scrollBy({ left: -650, behavior: "smooth" });
    } else {
      menuRef.current.scrollBy({ left: 650, behavior: "smooth" });
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quod
        corporis reiciendis nam harum et, maxime alias enim nisi deleniti.
      </p>
      <hr />
      <div className="explore-menu-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ←
        </button>
        <div className="explore-menu-list" ref={menuRef}>
          {menu_list.map((item, index) => /* Featured.css */
.card {
  border: 1px solid #ccc;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  text-align: left;
  height: 40px;
  line-height: 20px;
  color: #2c414c;
  white-space: initial;
  font-size: 14px;
  letter-spacing: initial;
}

.card-text {
  font-size: 14px;
  font-weight: bold;
}

.feature-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  text-align: center;
  margin: 20px 0px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.feature-product::-webkit-scrollbar {
  display: none;
}
(
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          →
        </button>
      </div>
      <hr />
    </div>
  );
};
