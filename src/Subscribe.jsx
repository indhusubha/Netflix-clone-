import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Subscribe() {

  const navigate = useNavigate();

  const [plan, setPlan] = useState("");

  const payment = () => {

    if (plan === "") {
      alert("Please select a plan");
      return;
    }

    localStorage.setItem("subscribed", "true");

    alert("Payment successful!");

    navigate("/WatchMovie");
  };

  return (
    <div className="subscription-page">

      <h1>Choose Your Plan</h1>

      <div className="plans">

        <div className="plan">
          <h2>Basic</h2>
          <h3>₹149 / month</h3>

          <p>Good video quality</p>
          <p>Watch on 1 device</p>

          <button onClick={() => setPlan("Basic")}>
            Choose Plan
          </button>
        </div>


        <div className="plan">
          <h2>Standard</h2>
          <h3>₹299 / month</h3>

          <p>Full HD video quality</p>
          <p>Watch on 2 devices</p>

          <button onClick={() => setPlan("Standard")}>
            Choose Plan
          </button>
        </div>


        <div className="plan">
          <h2>Premium</h2>
          <h3>₹499 / month</h3>

          <p>Ultra HD video quality</p>
          <p>Watch on 4 devices</p>

          <button onClick={() => setPlan("Premium")}>
            Choose Plan
          </button>
        </div>

      </div>


      {plan && (

        <div className="payment-box">

          <h2>Payment</h2>

          <p>
            Selected Plan: <b>{plan}</b>
          </p>

          <p>
            Amount:{" "}
            {plan === "Basic"
              ? "₹149"
              : plan === "Standard"
              ? "₹299"
              : "₹499"}
          </p>

          <label>
            <input type="radio" name="payment" />
            UPI
          </label>

          <br />

          <label>
            <input type="radio" name="payment" />
            Card
          </label>

          <br />

          <label>
            <input type="radio" name="payment" />
            Net Banking
          </label>

          <br /><br />

          <button onClick={payment}>
            Pay Now
          </button>

        </div>

      )}

    </div>
  );
}

export default Subscribe;