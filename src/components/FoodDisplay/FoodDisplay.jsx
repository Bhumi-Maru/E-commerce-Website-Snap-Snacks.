import React, { useState, useEffect, useContext } from "react";
import "./FoodDisplay.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const [sortedFoodList, setSortedFoodList] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");

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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchData = sortedFoodList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-search-btn">
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
      <h2 style={{ marginTop: "30px" }}>Top dishes near you...</h2>
      <div className="food-display-list">
        {searchData.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Link key={index} to={`/product/${item._id}`}>
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
