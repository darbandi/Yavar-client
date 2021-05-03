import "./Button.scss";
import React from "react";

const Button = ({ title, onClick }) => (
  <div className="button" onClick={onClick}>
    <span>{title}</span>
  </div>
);

export default Button;
