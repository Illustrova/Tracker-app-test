import { useStore } from "nanostores/react";
import { totalTime } from "../store/totalTime";
import { getHours, getMinutes, getSeconds } from "../utils";

const TotalTime = () => {
  const time = useStore(totalTime);

  return (
    <div className="mt-auto text-5xl text-center text-yellow-400">
      <span className="pr-16">Total time:</span>
      <span>
        {getHours(time)}:{getMinutes(time)}:{getSeconds(time)}
      </span>
    </div>
  );
};

export default TotalTime;
