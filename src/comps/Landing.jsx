import React from "react";
import { Link } from "react-router-dom";
import "../comps/Landing.css";

function Landing() {
  return (
    <body>
      <div className="landingContainer">
        <h1 className="landingH1">Welcome to Lite</h1>
        <p className="landingP">
          Lite: Your all-in-one destination for health and wellness. Calculate
          your BMI, set your calorie goals, and discover delicious recipes
          tailored to your weight goals, all in one convenient platform.
          Empowering you to achieve your health and fitness aspirations
          effortlessly.
        </p>
        <Link to="/bmicalc">
          <button className="landingBtn">Start</button>
        </Link>
      </div>
    </body>
  );
}

export default Landing;
