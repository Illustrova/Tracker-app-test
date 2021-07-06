import { useDispatch, useSelector } from "react-redux";

import { toggle } from "../features/trackerSlice";

const variants = {
  start: "bg-yellow-500 hover:bg-yellow-600",
  stop: "bg-red-500 hover:bg-red-600",
};
const Button = () => {
  const dispatch = useDispatch();
  const isTracking = useSelector((state) => state.tracker.isTracking);

  const variant = isTracking ? "stop" : "start";
  return (
    <button
      className={
        "py-4 px-8  text-gray-100 font-bold text-xl " + variants[variant]
      }
      onClick={() => dispatch(toggle())}
    >
      {isTracking ? "Stop tracking" : "Start tracking"}
    </button>
  );
};

export default Button;
