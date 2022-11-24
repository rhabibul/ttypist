class Timer {
  #testNotStarted;
  #start;
  #end;

  constructor() {
    this.#testNotStarted = true;
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
class Stats {
  #wpm;
  #rawwpm;
  #accuracy;
  #charstats;
  #wordstats;
  #netwpm;
  #grosswpm;

  
  constructor() {
    this.#wpm = 0, // ((correctchars / 5) / 60)
    this.#rawwpm = 0, // ((correctchars + incorrectchars + extrachars) / 5) / 60)
    this.#accuracy = 0, // (correctchars / (correctchars + incorrectchars)) * 100)

    this.#charstats = {
      extra: 0,
      totalchars: 0,
      correct: 0,
      incorrect: 0,
    },
    
    this.#wordstats = {
      totalwords: 0,
      correct: 0,
      incorrect: 0,
    }
  }
}

class WordsCorrected {}
class WordsNotCorrected {}