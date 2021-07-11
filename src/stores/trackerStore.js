import { makeObservable, observable, computed, action } from "mobx";

class Tracker {
  isTracking = false;
  sessions = [];
  currentSession = null;

  constructor(title) {
    makeObservable(this, {
      isTracking: observable,
      sessions: observable,
      currentSession: observable,
      totalTime: computed,
      toggle: action,
    });
  }

  toggle = () => {
    if (this.isTracking) {
      const start = this.currentSession.start;
      const end = Date.now();
      const duration = Math.round((end - start) / 1000) * 1000;
      this.sessions.push({ start, end, duration });
      this.currentSession = null;
    } else {
      const start = Date.now();
      this.currentSession = { start };
    }
    this.isTracking = !this.isTracking;
  };

  get totalTime() {
    const sessions = this.sessions;

    if (sessions.length < 1) return 0;
    return sessions.reduce((acc, cur) => (acc += cur.duration), 0);
  }
}

const tracker = new Tracker();

export default tracker;
