import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./Login";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginPopup = ({ setShowLogin, setUser }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [inputData, setInputData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("Form Data"));
    return savedData || [];
  });

  function addData(e) {
    e.preventDefault();
    const newData = { name, email, password };
    setInputData((prevData) => {
      const updatedData = [...prevData, newData];
      localStorage.setItem("Form Data", JSON.stringify(updatedData));
      return updatedData;
    });
    setName("");
    setEmail("");
    setPassword("");
    setAgreeToTerms(false);
  }

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        setShowLogin(false);
        alert("Sign In Successfully With Google");
        setTimeout(() => {
          alert(`Welcome to Snap Snacks. ${user.displayName}`);
        }, 2000);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={addData}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <button type="button" onClick={signInWithGoogle}>
          {currentState === "Sign Up With Google"
            ? "Create account"
            : "Login  With Google"}
        </button>

        <div className="login-popup-condition">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            required
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
