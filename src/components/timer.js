import { useRef, useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { getHours, getMinutes, getSeconds } from "../utils";

export default function Timer({ isTracking, saveData }) {
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState(null);
  const counterRef = useRef(0);

  useEffect(() => {
    counterRef.current = counter;
  });

  useInterval(() => {
    if (isTracking) {
      setCounter(counter + 1000);
    }
  }, interval);

  useEffect(() => {
    const startTimer = () => {
      setCounter(0);
      setInterval(1000);
    };

    const stopTimer = () => {
      setInterval(null);
      saveData(counterRef.current);
    };

    return isTracking ? startTimer() : stopTimer();
  }, [isTracking, saveData]);

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
}
