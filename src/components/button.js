import React from "react";

const variants = {
  start: "bg-yellow-500 hover:bg-yellow-600",
  stop: "bg-red-500 hover:bg-red-600",
};
const Button = React.forwardRef(
  ({ variant = "start", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={
          "py-4 px-8  text-gray-100 font-bold text-xl " + variants[variant]
        }
        {...props}
      >
        {variant === "start" ? "Start tracking" : "Stop tracking"}
      </button>
    );
  }
);

export default Button;
