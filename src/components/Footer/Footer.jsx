import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <h2 style={{ color: "tomato" }}>Snap Snacks.</h2>
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            quidem dicta velit laboriosam error quibusdam nisi beatae vel
            asperiores reprehenderit quos debitis facilis eligendi, nam nesciunt
            sequi sunt! Deserunt, eaque!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#explore-menu">About us</a>
            </li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@SnapSnacks.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between w-100">
        <p className="footer-copyright">
          Copyright 2024 © SnapSnacks.com - All Rights Reserved.
        </p>
        <p>
          Created by
          <span
            style={{
              fontWeight: "bolder",
              color: "tomato",
            }}
          >
            Bhumi Maru.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
