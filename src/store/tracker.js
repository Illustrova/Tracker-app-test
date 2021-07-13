import { createStore, getValue } from "nanostores";
import { addSession } from "./sessions";
import { startTimer, stopTimer } from "./timer";
const tracker = createStore(() => {
  tracker.set({ isTracking: false, startedAt: null });
});

function toggle() {
  const isTracking = getValue(tracker).isTracking;
  const startedAt = isTracking ? getValue(tracker).startedAt : Date.now();
  tracker.set({ isTracking: !isTracking, startedAt });
}

tracker.subscribe(({ isTracking }) => {
  return isTracking ? startTimer() : stopTimer();
});

tracker.subscribe(({ isTracking, startedAt }) => {
  if (!isTracking) return addSession(startedAt);
  return;
});

export { tracker, toggle };
