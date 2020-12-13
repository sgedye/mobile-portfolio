import React from "react";
import classNames from "classnames";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

// import { ValidationMessage } from "./ValidationMessage";

type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

interface BaseFieldProps {
  id: string;
  name: string;
  label: string;
  error?: string | null;
  touched?: boolean;
  labelProps?: Omit<LabelProps, "htmlFor">;
}

// GENERIC INPUT
type ReactHtmlInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface FieldProps
  extends BaseFieldProps,
    Omit<ReactHtmlInputProps, "id" | "name"> {}

export const Field: React.FC<FieldProps> = ({
  id,
  name,
  label,
  error,
  touched,
  labelProps,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} {...labelProps}>
        {label}
      </label>
      <input
        className={classNames("form-control", {
          "is-invalid": error && touched
        })}
        id={id}
        name={name}
        {...rest}
      />
      {error && touched && <p>{error}</p>}
      {/* <ValidationMessage>{error}</ValidationMessage>} */}
    </div>
  );
};

type Option = {
  value: ReactHtmlInputProps["value"] | boolean;
  text: string;
};

// RADIO
interface RadioProps
  extends Omit<ReactHtmlInputProps, "id" | "name" | "value">,
    BaseFieldProps {
  title?: string;
  options: Option[];
  value: Option["value"];
  isChecked?: (option: Option) => boolean;
}

type RadioButtonsProps = Omit<RadioProps, "name" | "label">;

// export const RadioButtons: React.FC<RadioButtonsProps> = ({
//   id,
//   className,
//   disabled,
//   onChange,
//   onBlur,
//   options,
//   title,
//   error,
//   touched,
//   labelProps = {},
//   value,
//   isChecked
// }) => {
//   return (
//     <fieldset className="form-group radio-group">
//       <legend>{title}</legend>
//       {options.map((option, choiceNumber) => (
//         <div
//           key={choiceNumber}
//           className={classNames(
//             "custom-control",
//             "custom-radio",
//             "custom-control-inline",
//             {
//               "is-invalid": touched && error
//             },
//             className
//           )}
//         >
//           <input
//             className={classNames("custom-control-input", {
//               "is-invalid": touched && error
//             })}
//             type="radio"
//             id={`${id}-${choiceNumber}`}
//             name={id}
//             value={option.value as string}
//             disabled={disabled}
//             checked={isChecked ? isChecked(option) : option.value == value}
//             onChange={onChange}
//             onBlur={onBlur}
//           />
//           <label
//             {...labelProps}
//             className={classNames("custom-control-label", labelProps.className)}
//             htmlFor={`${id}-${choiceNumber}`}
//           >
//             {option.text}
//           </label>
//         </div>
//       ))}
//       {/* {touched && error && <ValidationMessage>{error}</ValidationMessage>} */}
//     </fieldset>
//   );
// };

export const ToggleToken: React.FC<RadioButtonsProps> = ({
  id,
  title,
  className,
  disabled,
  onChange,
  onBlur,
  options,
  value,
  labelProps = {}
}) => (
  <fieldset className="form-check toggle-token">
    <label className="d-block" {...labelProps}>
      {title}
    </label>
    {options.map((option, idx) => (
      <div key={idx} className={classNames("form-check-inline", className)}>
        <input
          className="form-check-input form-control"
          type="radio"
          id={`${id}-${idx}`}
          name={id}
          value={(option.value as string) || "0"}
          checked={option.value == value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          {...labelProps}
          className={classNames("form-check-label", labelProps.className)}
          htmlFor={`${id}-${idx}`}
        >
          <FaCircle className="fas" />
          <FaCheckCircle className="fas" />
          {option.text}
        </label>
      </div>
    ))}
  </fieldset>
);

interface DateInputProps extends Omit<FieldProps, "placeholder"> {
  placeholder?: string[];
}

export const DateInput: React.FC<DateInputProps> = ({
  id,
  name,
  label,
  labelProps,
  placeholder,
  ...rest
}) => {
  return (
    <div className="d-block">
      <label htmlFor={id} {...labelProps}>
        {label}
      </label>
      <div className="d-flex">
        <div className="form-group px-2" style={{ width: "4rem" }}>
          <label className="small text-muted mb-0 ml-1">Day</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="21"
            className="form-control text-center"
            {...rest}
          />
        </div>
        <div className="form-group px-2" style={{ width: "4rem" }}>
          <label className="small text-muted mb-0 ml-1">Month</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="03"
            className="form-control text-center"
            {...rest}
          />
        </div>
        <div className="form-group px-2" style={{ width: "5.5rem" }}>
          <label className="small text-muted mb-0 ml-1">Year</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="1988"
            className="form-control text-center"
            {...rest}
          />
        </div>
      </div>
    </div>
  );
  // [03,02,2001]
};
