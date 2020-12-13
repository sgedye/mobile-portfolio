import * as React from "react";
import { Helmet } from "react-helmet";
// import { ToggleToken, RadioButtons } from "../components/Form";
import { useForm } from "react-yup";

const options = [
  { value: 0, text: "Adult" },
  { value: 1, text: "Child" }
];

const options2 = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" },
  { value: 2, text: "Unknown" }
];

export const Home = () => {
  const { field, values, getValue } = useForm();
  console.log(values.test);
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
        {/* <ToggleToken
          id="memberType"
          title="Member Type"
          value={getValue("memberType") as number}
          options={options}
          {...field}
        />
        <RadioButtons
          id="gender"
          title="Gender"
          value={getValue("gender") as number}
          options={options2}
          {...field}
        /> */}

        <pre>{JSON.stringify(values, null, 2)}</pre>
      </main>
    </>
  );
};
