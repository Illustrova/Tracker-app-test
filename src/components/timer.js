import { useEffect, useState } from "react";
import { getHours, getMinutes, getSeconds } from "../utils";
export default function Timer({ isTracking, handleEnd }) {
  const [isActive, setIsActive] = useState(isTracking);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isActive) {
      handleEnd(counter);
    } else {
      setCounter(0);
    }
    setIsActive(isTracking);
  }, [isTracking, isActive]);

  useEffect(() => {
    let counterId;

    if (isActive) {
      counterId = setInterval(() => {
        setCounter((counter) => counter + 1000);
      }, 1000);
    }

    return () => clearInterval(counterId);
  }, [isActive, counter]);

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
