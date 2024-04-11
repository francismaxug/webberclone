/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const Wrapper = ({ children, className = " " }) => {
  return (
    <div className={twMerge(" mx-auto w-[56rem]", className)}>{children}</div>
  );
};

export default Wrapper;
