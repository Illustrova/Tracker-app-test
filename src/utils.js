export const getSeconds = (counter) =>
  Math.round((counter / 1000) % 60)
    .toString()
    .padStart(2, "0");
export const getMinutes = (counter) =>
  Math.round((counter / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
export const getHours = (counter) =>
  Math.round(counter / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
