import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import trackerStore from "../stores/trackerStore";
import { useInterval } from "../hooks/useInterval";
import { getHours, getMinutes, getSeconds } from "../utils";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState(null);
  const isTracking = trackerStore.isTracking;

  // start/stop counting intervals, when they are not needed
  useEffect(() => {
    if (!isTracking) {
      setInterval(null);
      setCounter(0);
    } else {
      setInterval(1000);
    }
  }, [isTracking]);

  useInterval(() => {
    if (isTracking) {
      setCounter(counter + 1000);
    }
  }, interval);

  return (
    <div className="my-12 text-8xl">
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getHours(counter)}
      </span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getMinutes(counter)}
      </span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getSeconds(counter)}
      </span>
    </div>
  );
};

export default observer(Timer);
