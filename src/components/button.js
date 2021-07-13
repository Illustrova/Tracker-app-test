import React from "react";
import { useStore } from "nanostores/react";
import { tracker, toggle } from "../store/tracker";

const variants = {
  start: "bg-yellow-500 hover:bg-yellow-600",
  stop: "bg-red-500 hover:bg-red-600",
};

const Button = ({ variant = "start", children }) => {
  const { isTracking } = useStore(tracker);

  return (
    <button
      onClick={toggle}
      className={
        "py-4 px-8  text-gray-100 font-bold text-xl " +
        variants[isTracking ? "stop" : "start"]
      }
    >
      {isTracking ? "Stop tracking" : "Start tracking"}
    </button>
  );
};

export default Button;
