import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export default function SearchBar({ setSearch, category }) {
  const [searchData, setSearchData] = useState("");
  const { food_list } = useContext(StoreContext);

  function handleChange(e) {
    setSearchData(e.target.value);
  }

  // const filteredResults = foodItems.filter((food) =>
  //   food.title.toLowerCase().includes(searchData.toLowerCase())
  // );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchData}
        onChange={handleChange}
      />
      <button onClick={() => setSearch(false)}>Close</button>

      {/* Render filtered results */}
      {/* <ul>
        {filteredResults.map((food) => (
          <li key={food._id}>{food.name}</li>
        ))}
      </ul> */}

      <div className="food-display" id="food-display">
        <h2>Top dishes near you...</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
