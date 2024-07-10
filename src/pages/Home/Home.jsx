import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { ExploreMenu } from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Testimonials from "../../components/Testimonials/Testimonials";
import Map from "../../components/Last Section/Map";

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
            src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/loading.gif"
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
            <Testimonials />
            <Map />
          </div>
        </>
      )}
    </>
  );
};
