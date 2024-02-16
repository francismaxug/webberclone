/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
const Button = ({ children, className = " " }) => {
  return <button className={twMerge(className)}>{children}</button>;
};

export default Button;
