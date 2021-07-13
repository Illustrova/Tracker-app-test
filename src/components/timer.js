import { timer } from "../store/timer";
import { useStore } from "nanostores/react";
import { getHours, getMinutes, getSeconds } from "../utils";

export default function Timer() {
  const time = useStore(timer);

  return (
    <div className="my-12 text-8xl">
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getHours(time)}
      </span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getMinutes(time)}
      </span>
      <span className="text-gray-200">:</span>
      <span className="px-2 py-4 text-blue-900 bg-gray-200">
        {getSeconds(time)}
      </span>
    </div>
  );
}
