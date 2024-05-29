import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const { food_list, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  const product = food_list.find((item) => item._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
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
          <div className="product-details">
            <div className="product-details-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details-detail">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="rating-stars">
                <img src={assets.rating_starts} alt="rating-stars" />
              </div>
              <p>
                <b>Price : ${product.price}</b>
              </p>

              <div className="food-item-img-container">
                {!cartItems[id] ? (
                  <img
                    className="add"
                    onClick={() => addToCart(id)}
                    src={assets.add_icon_white}
                    alt="Add to cart"
                  />
                ) : (
                  <div className="food-item-counter">
                    <img
                      onClick={() => removeFromCart(id)}
                      src={assets.remove_icon_red}
                      alt="Remove from cart"
                    />
                    <p>{cartItems[id]}</p>
                    <img
                      onClick={() => addToCart(id)}
                      src={assets.add_icon_green}
                      alt="Add one more"
                    />
                  </div>
                )}
              </div>

              <button
                className="goToCart-btn"
                onClick={() => navigate("/cart")}
              >
                Go To Cart
              </button>
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
        </>
      )}
    </>
  );
};

export default ProductDetails;
