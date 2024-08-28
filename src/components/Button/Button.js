import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  disabed = false,
}) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
      disabled={disabed}
    >
      {text}
    </button>
  );
};

export default Button;
