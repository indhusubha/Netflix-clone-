import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // SIGN UP
  const handleSignup = () => {
    setError("");

    // Check empty fields
    if (signupEmail.trim() === "" || signupPassword.trim() === "") {
      setError("Please fill all the fields");
      return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(signupEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    // Check password length
    if (signupPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Save signup details
    localStorage.setItem("signupEmail", signupEmail);
    localStorage.setItem("signupPassword", signupPassword);

    alert("Account created successfully!");

    // Go to Login
    setShowLogin(true);

    // Clear signup fields
    setSignupEmail("");
    setSignupPassword("");
  };

  // LOGIN
  const handleLogin = () => {
    setError("");

    // Check empty fields
    if (loginEmail.trim() === "" || loginPassword.trim() === "") {
      setError("Please enter email and password");
      return;
    }

    // Get saved details
    const savedEmail = localStorage.getItem("signupEmail");
    const savedPassword = localStorage.getItem("signupPassword");

    // Check account exists
    if (!savedEmail || !savedPassword) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Check email and password
    if (
      loginEmail === savedEmail &&
      loginPassword === savedPassword
    ) {
      alert("Login successful!");
      navigate("/about");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">

      <img
        id="back"
        src="/img/BB.jpg"
        alt="Netflix background"
      />

      {/* SIGN UP */}

      {!showLogin && (
        <div id="signup">

          <h1 id="net">Netflix</h1>

          <h3 id="sign">Sign Up</h3>

          <input
            className="input" type="text"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            placeholder="Email or Phone number"
          />

          <br />
          <br />

          <input
            className="input"
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            placeholder="Password"
          />

          {/* Error Message */}

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <p>Remember me? Need Help</p>

          <div id="in">

            <button
              id="sig"
              onClick={handleSignup}
            >
              Sign Up
            </button>

            <p>Already have an account?</p>

            <button
              id="guest"
              onClick={() => {
                setShowLogin(true);
                setError("");
              }}
            >
              Login
            </button>

          </div>

        </div>
      )}

      {/* LOGIN */}

      {showLogin && (
        <div id="login">

          <h1 id="net">Netflix</h1>

          <h3 id="sign">Login</h3>

          <input
            className="input"
            type="text"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email or Phone number"
          />

          <br />
          <br />

          <input
            className="input"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
          />

          {/* Error Message */}

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <p>Remember me? Need Help</p>

          <div id="in">

            <button
              id="sig"
              onClick={handleLogin}
            >
              Login
            </button>

            <p>Don't have an account?</p>

            <button
              id="guest"
              onClick={() => {
                setShowLogin(false);
                setError("");
              }}
            >
              Sign Up
            </button>

          </div>

        </div>
      )}

    </div>
  );
}