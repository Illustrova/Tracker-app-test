import { createStore, getValue } from "nanostores";

const sessions = createStore(() => {
  sessions.set([]);
});

function addSession(start) {
  if (!start) return;
  const end = Date.now();
  const duration = Math.round((end - start) / 1000) * 1000;

  sessions.set([...getValue(sessions), { start, end, duration }]);
}

export { sessions, addSession };
