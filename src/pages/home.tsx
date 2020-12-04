import * as React from "react";
import { Helmet } from "react-helmet";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { ToggleToken } from "../components/Form";
// import { useForm } from "react-yup";

// const { field } = useForm();

// console.log(field);

const options = [
  { value: 0, text: "Adult" },
  { value: 1, text: "Child" }
];

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
        <div className="form-check toggle-token">
          <ToggleToken
            id="test"
            value={0}
            title="Member Type"
            options={options}
            // {...field}
          />
        </div>
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
                // {...field}
              />
              <label className="form-check-label" htmlFor="individual">
                <FaCircle className="fas" />
                <FaCheckCircle className="fas" />
                Individual
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="membershipType"
                id="family"
                value="family"
                // {...field}
              />
              <label className="form-check-label ml-2" htmlFor="family">
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
