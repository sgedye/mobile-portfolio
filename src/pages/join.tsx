import * as React from "react";
import { Helmet } from "react-helmet";

import {
  DateComponent,
  Field,
  ToggleToken,
  ValidationMessage
} from "../components/Form";
import { useForm } from "react-yup";
import * as Yup from "yup";

const genderOptions = [
  { value: 0, text: "Male" },
  { value: 1, text: "Female" }
];

const CURRENT_YEAR = new Date().getFullYear();

const JOIN_SCHEMA = Yup.object({
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  email: Yup.string().email().label("Email").required(),
  gender: Yup.number().oneOf([0, 1]).label("Gender").defined(),
  dateOfBirth: Yup.object({
    day: Yup.number().label("Day").required().min(1).max(31),
    month: Yup.number().label("Month").required().min(1).max(12),
    year: Yup.number().label("Year").required().min(1900).max(CURRENT_YEAR)
  }).defined()
}).defined();

export const Join = () => {
  const {
    field,
    values,
    touched,
    errors,
    getValue,
    isTouched,
    getError,
    getErrors,
    isSubmitting,
    setSubmitting,
    createSubmitHandler
  } = useForm({ validationSchema: JOIN_SCHEMA });

  console.log(CURRENT_YEAR);

  const handleSubmit = React.useMemo(() => {
    return createSubmitHandler((v) => {
      console.log("submitting......");
      console.log(v);
      fetch("", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(v)
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            return setSubmitting(false);
          }, 3000);
        });
    });
  }, [createSubmitHandler, setSubmitting, values]);

  return (
    <>
      <Helmet>
        <title>Join</title>
      </Helmet>
      <main className="container pt-3">
        <form method="POST" noValidate onSubmit={handleSubmit}>
          <Field
            id="firstName"
            name="firstName"
            label="First name:"
            placeholder="First name"
            value={(values.firstName as string) || ""}
            touched={!!touched.firstName}
            error={(errors.firstName as string) || ""}
            {...field}
          />
          <Field
            id="lastName"
            name="lastName"
            label="Last Name:"
            placeholder="Last Name"
            value={(values.lastName as string) || ""}
            touched={!!touched.lastName}
            error={(errors.lastName as string) || ""}
            {...field}
          />
          <Field
            id="email"
            name="email"
            label="Email:"
            placeholder="Email"
            value={(values.email as string) || ""}
            touched={!!touched.email}
            error={(errors.email as string) || ""}
            {...field}
          />

          {/* DATE OF BIRTH */}
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <div className="d-flex">
              <DateComponent
                id="dateOfBirth.day"
                name="dateOfBirth.day"
                label="Day"
                placeholder="21"
                value={(getValue("dateOfBirth.day") as string) || ""}
                touched={isTouched("dateOfBirth.day")}
                error={getError("dateOfBirth.day")}
                {...field}
              />
              <DateComponent
                id="dateOfBirth.month"
                name="dateOfBirth.month"
                label="Month"
                placeholder="03"
                value={(getValue("dateOfBirth.month") as string) || ""}
                touched={isTouched("dateOfBirth.month")}
                error={getError("dateOfBirth.month")}
                {...field}
              />
              <DateComponent
                id="dateOfBirth.year"
                name="dateOfBirth.year"
                label="Year"
                placeholder="1988"
                value={(getValue("dateOfBirth.year") as string) || ""}
                touched={isTouched("dateOfBirth.year")}
                error={getError("dateOfBirth.year")}
                {...field}
              />
            </div>
            <ValidationMessage>
              <ul>
                {isTouched("dateOfBirth.day") &&
                  getError("dateOfBirth.day") && (
                    <li>{getError("dateOfBirth.day")}</li>
                  )}
                {isTouched("dateOfBirth.month") &&
                  getError("dateOfBirth.month") && (
                    <li>{getError("dateOfBirth.month")}</li>
                  )}
                {isTouched("dateOfBirth.year") &&
                  getError("dateOfBirth.year") && (
                    <li>{getError("dateOfBirth.year")}</li>
                  )}
              </ul>
            </ValidationMessage>
          </div>

          {/* GENDER */}
          <ToggleToken
            id="gender"
            title="Gender:"
            value={getValue("gender") as number}
            touched={isTouched("gender")}
            error={getError("gender")}
            options={genderOptions}
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
