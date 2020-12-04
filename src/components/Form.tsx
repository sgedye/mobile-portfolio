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
//             checked={isChecked ? isChecked(option) : option.value === value}
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
  className,
  disabled,
  onChange,
  onBlur,
  options,
  title,
  labelProps = {},
}) => {
  return (
    <fieldset className="form-group radio-group">
      <legend>{title}</legend>
      {options.map((option, idx) => (
        <div key={idx} className={classNames("form-check-inline", className)}>
          <input
            className="form-check-input"
            type="radio"
            id={`${id}-${idx}`}
            name={id}
            value={(option.value as string) || ""}
            checked={option.value === idx}
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
};
