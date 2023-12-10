// timerformat: [0, 1, ..., n-1, n]/n where n is the total available time
export class StopWatch {
	#element; // stores dom element on which to show time
	#id; // stores interval id which would be used to stop stopwatch timer
	#current; // stores current calculated time [continously gets updated as time progresses]
	#previous; // stores time which was calculated on last call to stop() [gets updated whenever stop() method is called]
	#begin; // stores the timestamp when start() was called first time [its value doesn't change]
	#end; // gets updated with current timestamp [continously gets updated as time progresses]
	#digitstoshow; // total number of digits to show ('.' and 's' is considered in count)
	#digitsafterdecimal; // total number of digits to show after decimal point
	#stoptime;
	
	constructor ( element, stoptime, precision = 2, numberofdigits = 6 ) {
		this.#element = element;
		this.#id = 0;
		this.#current = 0;
		this.#previous = 0;
		this.#begin = 0;
		this.#end = 0;
		this.#digitstoshow = numberofdigits;
		this.#digitsafterdecimal = precision;
		this.#stoptime = stoptime;
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
			if ( (this.#current / 1000).toFixed(this.#digitsafterdecimal) >= this.#stoptime ) {
				clearInterval(this.#id);
			}
		}, 0);
	}
	resume() {
		this.start();
	}
	stop() {
		this.#previous = this.#current;
		clearInterval(this.#id);
	}
}

// timerformat: [n, n-1, n-2, ... ,0]   where n is the total available time
export class Timer {
	constructor() {}
}