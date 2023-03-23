class StopWatch {
  #id;
  #endtime;
  #starttime;
  #prevtime;
  #timepassed;

  constructor() {
    this.#endtime = 0;
    this.#starttime = 0;
    this.#prevtime = 0;
    this.#timepassed = 0;
  }

  resume(timebox) {
    this.#starttime = Date.now();

    this.#id = setInterval(() => {
      this.#endtime = Date.now();
      this.#timepassed = this.#prevtime + (this.#endtime - this.#starttime); // in milliseconds
		
      // update on dom
      timebox.textContent = `${(this.#timepassed / 1000).toFixed(2)}s`.padStart(6, '0');
    }, 0);
  }
  
  stop() {
    this.#prevtime = this.#timepassed;
    clearInterval(this.#id);
  }

  get value() {
    return (this.#timepassed / 1000).toFixed(2);
  }
}

class Timer {
	constructor() {}
}

class Time {
  
  #timerend;
  #timerstart;
  #timerstarted;

  constructor() {
    this.#timerend = 0;
    this.#timerstart = 0;
    this.#timerstarted = false;
  }

  start() {
    this.#timerstart = performance.now();
    this.#timerstarted = true;
  }
  stop() {
    this.#timerend = performance.now();
  }
  get started() {
    return this.#timerstarted;
  }
  get duration() {
    return (this.#timerend - this.#timerstart) / 1000;
  }
  reset() {
    this.#timerend = 0;
    this.#timerstart = 0;
    this.#timerstarted = false;
  }
}

export { StopWatch, Time };