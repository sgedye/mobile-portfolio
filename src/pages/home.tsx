import * as React from "react";
import { Helmet } from "react-helmet";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>home</title>
      </Helmet>
      <main className="container pt-3">
        <h1>Home</h1>
        <p>This is home!</p>
        This is the main content...
        <br />
        This is the main content...
        <br />
        <br />
        <div className="container-fluid form-fieldset">
          <div>
            <div className="form-check toggle-token">
              <input
                className="form-check-input"
                type="radio"
                name="membershipType"
                id="individual"
                value="individual"
              />
              <label className="form-check-label" htmlFor="individual">
                <FaCircle className="fas" />
                <FaCheckCircle className="fas" />
                Individual
              </label>
            </div>
            <div className="form-check toggle-token">
              <input
                className="form-check-input"
                type="radio"
                name="membershipType"
                id="family"
                value="family"
              />
              <label className="form-check-label" htmlFor="family">
                <FaCircle className="fas" />
                <FaCheckCircle className="fas" />
                Family
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
