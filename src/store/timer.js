import { createStore, getValue } from "nanostores";

const timer = createStore(() => {
  timer.set(0);
});

let updating;

function startTimer() {
  updating = setInterval(() => {
    timer.set(getValue(timer) + 1000);
  }, 1000);
}

function stopTimer() {
  clearInterval(updating);
  timer.set(0);
  updating = null;
}
export { timer, startTimer, stopTimer };
