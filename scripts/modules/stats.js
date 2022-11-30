const teststats = {
  completed: 0,
  incompleted: 0,
};

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
    /**
     * Gross Words (typed words): This is the total number of words typed by the
     * candidate; it includes both correct and incorrect words. Gross words per
     * minnute is total number of words typed in one minute.
     * gwpm = (gross words)/(time taken in minutes)
     * 
     * Net words (correct words): The number of correct words typed.
     * nwpm = (net words)/(time taken in minutes)
     * 
     * Accuracy: 
     * The number of correct words entered, calculated as (nwpm * 100)/(gwpm)
     * 
     **/
    
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

class History { }
class WordsCorrected {}
class WordsNotCorrected {}


export { Timer, Stats, teststats };