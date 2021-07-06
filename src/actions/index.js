export const START_TRACKER = "START_TRACKER";
export const startTracker = (start) => {
  return {
    type: START_TRACKER,
    payload: { start },
  };
};
export const STOP_TRACKER = "STOP_TRACKER";
export const stopTracker = (stop) => {
  return {
    type: STOP_TRACKER,
    payload: { stop },
  };
};
