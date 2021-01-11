import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  btn: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: () => void;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btn,
  onClick,
  isGoogleSignIn,
  children,
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    type={btn.type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
