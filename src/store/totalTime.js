import { createDerived } from "nanostores";
import { sessions } from "./sessions";

export const totalTime = createDerived(sessions, (allSessions) => {
  return allSessions.reduce((acc, cur) => (acc += cur.duration), 0);
});
