import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <>
      <body>
        <h1 className="h1title">Lite</h1>
        <div className="form-container">
          {/* Apply form-container class here */}
          <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <Link to="/bmicalc">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>{" "}
      </body>
    </>
  );
}

export default LogIn;
