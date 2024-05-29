import React from "react";
import "./AppDownload.css";
import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <div className="section" id="app-download">
      <div className="container">
        <div className="visual">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/app.png"
            alt="App Preview"
          />
        </div>

        <div className="text">
          <h1 className="secondary">Download The FoodLover App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            laudantium velit iure illo facilis at delectus sint, doloribus
            magnam officiis rerum nobis, perspiciatis maxime repellat qui
            consequuntur? Aspernatur, architecto voluptatum!
          </p>

          <div className="download">
            <Link
              to="https://play.google.com/store/games?hl=en_IN&gl=US"
              className="app-store"
            >
              <i className="fab fa-google-play"></i>
              <p>
                GET IT ON <br />
                <span>Google Play</span>
              </p>
            </Link>

            <Link to="https://www.apple.com/app-store/" className="app-store">
              <i className="fab fa-apple"></i>
              <p>
                Download on the <br />
                <span>App Store</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
