import React from "react";

import "./form-input.styles.scss";

// interface FormInputProps {
//   handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
//   label?: any;
  
//   //   otherProps?: object;
// }

const FormInput = ({
  label,
  handleChange,
  ...otherProps
}) => (
  <div className="group">
    <input
      className="form-input"
      type="text"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps?.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
