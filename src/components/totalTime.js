import { observer } from "mobx-react-lite";
import { getHours, getMinutes, getSeconds } from "../utils";
import trackerStore from "../stores/trackerStore";

const TotalTime = () => {
  const totalTime = trackerStore.totalTime;

  return (
    <div className="mt-auto text-5xl text-center text-yellow-400">
      <span className="pr-16">Total time:</span>
      <span>
        {getHours(totalTime)}:{getMinutes(totalTime)}:{getSeconds(totalTime)}
      </span>
    </div>
  );
};

export default observer(TotalTime);
