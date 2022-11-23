class Timer {
  #start;
  #end;

  constructor() {
    this.#start = 0;
    this.#end = 0;
  }

  starttimer() {
    this.#start = performance.now();
  }
  stoptimer() {
    this.#end = performance.now();
  }
  duration() {
    return this.#start - this.#end;
  }
}

const Stats = {
  wpm: 0, // ((correctchars / 5) / 60)
  rawwpm: 0, // ((correctchars + incorrectchars + extrachars) / 5) / 60)
  accuracy: 0, // (correctchars / (correctchars + incorrectchars)) * 100)

  netwpm: 0,
  grosswpm: 0,

  charstats: {
    extra: 0,
    totalchars: 0,

    correct: 0,
    incorrect: 0,
  },

  wordstats: {
    correct: 0,
    incorrect: 0,
  },

  teststats: {
    completed: 0,
    incompleted: 0,
  },
};

class WordsCorrected {}
class WordsNotCorrected {}