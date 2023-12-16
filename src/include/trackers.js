export const test = {
	in_progress: false,
	has_finished: false,

  started_at: 0,
  ended_at: 0,
  duration() {
    return this.ended_at - this.started_at;
  },
  reset() {
    this.started_at = 0;
    this.ended_at = 0;
		this.in_progress = false;
		this.has_finished = false;
  }
}

export const keypress = {
	char: "",
  keydown: 0,
  keyup: 0,
  repeat: false,
  reset() {
		this.char = "";
    this.keydown = 0;
    this.keyup = 0;
    this.repeat = false;
  }
};

export const keypress_timings = {
  symbol: new Map([
    ["a", []], ["b", []], ["c", []], ["d", []], ["e", []], ["f", []], ["g", []],
    ["h", []], ["i", []], ["j", []], ["k", []], ["l", []], ["m", []], ["n", []],
    ["o", []], ["p", []], ["q", []], ["r", []], ["s", []], ["t", []], ["u", []],
    ["v", []], ["w", []], ["x", []], ["y", []], ["z", []],
    ["A", []], ["B", []], ["C", []], ["D", []], ["E", []], ["F", []], ["G", []],
    ["H", []], ["I", []], ["J", []], ["K", []], ["L", []], ["M", []], ["N", []],
    ["O", []], ["P", []], ["Q", []], ["R", []], ["S", []], ["T", []], ["U", []],
    ["V", []], ["W", []], ["X", []], ["Y", []], ["Z", []],
    ["0", []], ["1", []], ["2", []], ["3", []], ["4", []], ["5", []], ["6", []],
    ["7", []], ["8", []], ["9", []], ["`", []], ["~", []], ["!", []], ["@", []],
    ["#", []], ["$", []], ["%", []], ["^", []], ["&", []], ["*", []], ["(", []],
    [")", []], ["-", []], ["_", []], ["=", []], ["+", []], ["[", []], ["]", []],
    ["{", []], ["}", []], [";", []], [":", []], ["'", []], ["|", []],
    ["\"",[]], ["\\",[]],
    [",", []], ["<", []], [".", []], [">", []], ["/", []], ["?", []],
  ]),
  
  log(sym, time) {
    this.symbol.get(sym)?.push(time);
  },
  
  show(limit = Infinity) {
    let count = 0;
    for ( const [sym, value] of this.symbol.entries() ) {
      console.log(sym, value);
      ++cnt;
      if (count === limit ) return;
    }
  },

  reset() {
    for ( const [sym, _] of this.symbol.entries() ) {
      this.symbol.set(sym, new Array());
    }
  }
}

// speed calculatation
//    - in monkeytype if user submits a wrong word (typo, skpped) then its letters 
//      are not used to calculate speed
// 
// grosswords (typed words):
// This is the total number of words typed by the candidate; it includes 
// both correct and incorrect words. Gross words per minnute is total 
// number of words typed in one minute. ((gross words)/(time taken in minutes))
// 
// networds: The number of correct words typed ((net words)/(time taken in minutes))
// accuracy: The number of correct words typed, calculated as ((nwpm * 100)/(gwpm))
// 
//   netwpm: ((correct / 5) / 60)
// grosswpm: ((correct + incorrect) / 5) / 60)
// accuracy: ((correct) / (correct + incorrect)) * 100)

// total test count
//    - test completed count
//    - test incomplete count
// 
// previous sentence typed
// words on which mistake happend (so that user can practice those words after test)

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