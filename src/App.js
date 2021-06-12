import { useState, useEffect } from "react";
import Header from "./components/header";
import Button from "./components/button";
import Timer from "./components/timer";
import Table from "./components/table";

import { getHours, getMinutes, getSeconds } from "./utils";

function App() {
  const [isTracking, setIsTracking] = useState(undefined);
  const [data, setData] = useState([]);
  const [currentSession, setCurrentSession] = useState({});
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (isTracking === true) {
      setCurrentSession((c) => ({ ...c, start: Date.now() }));
    } else if (isTracking === false) {
      setCurrentSession((c) => ({ ...c, end: Date.now() }));
    }
  }, [isTracking]);

  useEffect(() => {
    if (
      "start" in currentSession &&
      "end" in currentSession &&
      "duration" in currentSession
    ) {
      setData((d) => d && [currentSession, ...d]);
      setCurrentSession({});
    }
  }, [currentSession]);

  const toggleTracker = () => {
    setIsTracking(!isTracking);
  };

  const getTimerData = (ms) => {
    setCurrentSession({ ...currentSession, duration: ms });
    setTotalTime((prev) => prev + ms);
  };
  return (
    <div className="w-full h-screen text-gray-100 bg-blue-900">
      <Header />
      <main className="flex flex-col mx-4">
        <div className="mt-24 text-center">
          <Timer
            isTracking={isTracking}
            count={!isTracking && 0}
            handleEnd={getTimerData}
          />
          <Button
            variant={isTracking ? "stop" : "start"}
            onClick={toggleTracker}
          />
        </div>
        <div className="mt-16 mb-16 text-center">
          <Table data={data} />
        </div>
        <div className="mt-auto text-5xl text-center text-yellow-400">
          <span className="pr-16">Total time:</span>
          <span>
            {" "}
            {getHours(totalTime)}:{getMinutes(totalTime)}:
            {getSeconds(totalTime)}
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
