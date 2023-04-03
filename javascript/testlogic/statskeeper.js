export const time = {
  begin: 0,
  end: 0,
  get duration() {
    return this.end - this.begin;
  },  
  reset() {
    this.begin = 0;
    this.end = 0;
  }
}

export const typedchar = {
	value: "",
  keydown: 0,
  keyup: 0,
  repeated: false,
  reset() {
		this.typedchar = "";
    this.keydown = 0;
    this.keyup = 0;
    this.repeated = false;
  }
};

export const mInput = {
	data: "",
	delete: false,
	keydownUnidentified: false,
  
	reset() {
    this.data = "";
    this.delete = false,
		this.keydownUnidentified = false;
	}
}

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


// call it on every keystoke to update livestats
export function compute() {}

export class History {
  constructor() {}
}
