class StopWatch {
	#element;  // stores dom element on which to show time
	#id;			 // stores interval id which would be used to stop stopwatch timer
	#current;  // stores current calculated time [continously gets updated as time progresses]
	#previous; // stores time which was calculated on last call to stop() [gets updated whenever stop() method is called]
	#begin;		 // stores the timestamp when start() was called first time [its value doesn't change]
	#end;			 // gets updated with current timestamp [continously gets updated as time progresses]
	#digitstoshow; // total number of digits to show ('.' and 's' is also counted)
	#digitsafterdecimal; // total number of digits to show after decimal point
	
	constructor ( element, precision = 2, numberofdigits = 6 ) {
		this.#element = element;
		this.#id = 0;
		this.#current = 0;
		this.#previous = 0;
		this.#begin = 0;
		this.#end = 0;
		this.#digitstoshow = numberofdigits;
		this.#digitsafterdecimal = precision;
	}

	get value() {
		return (this.#current / 1000).toFixed(this.#digitsafterdecimal);
	}
	start() {
		this.#begin = performance.now();
		this.#id = setInterval(() => {
			this.#end = performance.now();
			this.#current = this.#previous + (this.#end - this.#begin); // in milliseconds
			this.#element.textContent = `${(this.#current / 1000).toFixed(this.#digitsafterdecimal)}s`.padStart(this.#digitstoshow, '0');
		}, 0);
	}
	stop() {
		this.#previous = this.#current;
		clearInterval(this.#id);
	}
}

class Timer {
	constructor() {}
}

// what name should be given to this guy, it just keeps track of two timestamps
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