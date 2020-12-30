import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  btn: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btn,
  onClick,
  children,
}) => (
  <button className="custom-button" type={btn.type} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
