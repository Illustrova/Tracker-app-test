import { getHours, getMinutes, getSeconds } from "../utils";

const TotalTime = () => {
  const totalTime = 0;

  return (
    <div className="mt-auto text-5xl text-center text-yellow-400">
      <span className="pr-16">Total time:</span>
      <span>
        {getHours(totalTime)}:{getMinutes(totalTime)}:{getSeconds(totalTime)}
      </span>
    </div>
  );
};

export default TotalTime;
