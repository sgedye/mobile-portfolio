import * as React from "react";
import { Helmet } from "react-helmet";
import { ToggleToken, RadioButtons } from "../components/Form";
import { useForm } from "react-yup";

const options = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" }
];


export const Join = () => {
  const { field, values, getValue } = useForm();
  console.log(values.test);
  return (
    <>
      <Helmet>
        <title>Join</title>
      </Helmet>
      <main className="container pt-3">
        <field />
        <ToggleToken
          id="gender"
          title="Gender"
          value={getValue("gender") as number}
          options={options}
          {...field}
        />
        {/* <RadioButtons
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
