import React, { useEffect, useState } from "react";
// import "./Home.css";
import { Header } from "../../components/Header/Header";
import { ExploreMenu } from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

export const Home = () => {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
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
          <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
          </div>
        </>
      )}
    </>
  );
};
