import * as React from "react";
import { Helmet } from "react-helmet";
import { ToggleToken, Field, DateInput } from "../components/Form";
import { useForm } from "react-yup";
import * as Yup from "yup";

const genderOptions = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" }
];

const JOIN_SCHEMA = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  gender: Yup.number().oneOf([0, 1]).defined()
}).defined();

export const Join = () => {
  const {
    field,
    values,
    touched,
    errors,
    getValue,
    isSubmitting,
    createSubmitHandler
  } = useForm({ validationSchema: JOIN_SCHEMA });

  const handleSubmit = React.useMemo(() => {
    console.log("submitting......");
    console.log(values);
    return;
  }, []);

  return (
    <>
      <Helmet>
        <title>Join</title>
      </Helmet>
      <main className="container pt-3">
        <form method="POST" noValidate onSubmit={() => handleSubmit}>
          <Field
            id="firstName"
            name="firstName"
            label="First name:"
            placeholder="First name"
            {...field}
          />

          <Field
            id="lastName"
            name="lastName"
            label="Last Name:"
            placeholder="Last Name"
            {...field}
          />

          <Field
            id="email"
            name="email"
            label="Email:"
            placeholder="Email"
            {...field}
          />

          <DateInput
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date of Birth:"
            {...field}
          />

          <ToggleToken
            id="gender"
            title="Gender:"
            value={getValue("gender") as number}
            options={genderOptions}
            className="mb-3"
            {...field}
          />
          <div className="">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre>
      </main>
    </>
  );
};
