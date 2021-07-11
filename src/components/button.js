import React from "react";
import { observer } from "mobx-react-lite";
import trackerStore from "../stores/trackerStore";
const variants = {
  start: "bg-yellow-500 hover:bg-yellow-600",
  stop: "bg-red-500 hover:bg-red-600",
};
const Button = ({ variant = "start", children }) => {
  const isTracking = trackerStore.isTracking;
  return (
    <button
      className={
        "py-4 px-8  text-gray-100 font-bold text-xl " +
        variants[isTracking ? "stop" : "start"]
      }
      onClick={trackerStore.toggle}
    >
      {isTracking ? "Stop tracking" : "Start tracking"}
    </button>
  );
};
// export default Button;
export default observer(Button);
