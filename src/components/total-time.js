import { useSelector } from "react-redux";
import { getHours, getMinutes, getSeconds } from "../utils";

export default function TotalTime() {
  const totalTime = useSelector((state) => state.tracker.totalTime);

  return (
    <div className="mt-auto text-5xl text-center text-yellow-400">
      <span className="pr-16">Total time:</span>
      <span>
        {" "}
        {getHours(totalTime)}:{getMinutes(totalTime)}:{getSeconds(totalTime)}
      </span>
    </div>
  );
}
