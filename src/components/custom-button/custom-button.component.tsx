import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  submit?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ submit, children }) => (
  <button className="custom-button" {...(submit ?? "type='submit'")}>
    {children}
  </button>
);

export default CustomButton;
