
/**
 * grosswords (typed words):
 * This is the total number of words typed by the candidate; it includes 
 * both correct and incorrect words. Gross words per minnute is total 
 * number of words typed in one minute. ((gross words)/(time taken in minutes))
 * 
 * networds: The number of correct words typed ((net words)/(time taken in minutes))
 * accuracy: The number of correct words typed, calculated as ((nwpm * 100)/(gwpm))
 * 
 *     netwpm: ((correctchars / 5) / 60)
 *   grosswpm: ((correctchars + incorrectchars) / 5) / 60)
 *   accuracy: ((correctchars) / (correctchars + incorrectchars)) * 100)
 * 
 * 
 *   correct? -> Typed character which is     equal to active letter. (count)
 * incorrect? -> Typed character which is not equal to active letter. (count)
**/

class Stats {
  #speeds;
  #accuracy;
  #charstats;
  #wordstats;

  constructor() {
    this.#accuracy = 0;
    
    this.#speeds = new Object({
      net: 0, // wpm: ((correct / 5) / 60)
      gross: 0, // raw: (((correct + incorrect) / 5) / 60)
    });

    this.#charstats = new Object({
      correct: 0,
      incorrect: 0,
    });
    
    this.#wordstats = new Object({
      correct: 0,
      incorrect: 0,
    });
  }

  // Call it on every keystoke when live update speed & accuracy is turned on.
  compute() {
    // Calculate and set net & gross speeds and accuracy
    // 1. net speed
    // 2. gross speed
    // 3. accuracy
  }

  speedstat() {
    this.compute();
    return { acc: this.#accuracy, wpm: this.#speeds.net, raw: this.#speeds.gross };
  }

  // getters for charstats
  get correctchar() {
    return this.#charstats.correct;
  }
  get incorrectchar() {
    return this.#charstats.incorrect;
  }

  // setters for charstats
  set correctchar(number) {
    this.#charstats.correct = number;
  }
  set incorrectchar(number) {
    this.#charstats.incorrect = number;
  }

  // getters for wordstats
  get correctword() {
    return this.#wordstats.correct;
  }
  get incorrectword() {
    return this.#wordstats.incorrect;
  }

  // setters for wordstats
  set correctword(number) {
    this.#wordstats.correct = number
  }
  set incorrectword(number) {
    this.#wordstats.incorrect = number;
  }

  reset() {
    // reset character stats
    this.#charstats.correct   = 0;
    this.#charstats.incorrect = 0;
  
    // reset word stats
    this.#wordstats.correct   = 0;
    this.#wordstats.incorrect = 0;

    // reset accuracy and speed stats
    this.#accuracy     = 0;
    this.#speeds.net   = 0;
    this.#speeds.gross = 0;
  }
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
    return this.#timerend - this.#timerstart;
  }
  reset() {
    this.#timerend = 0;
    this.#timerstart = 0;
    this.#timerstarted = false;
  }
}

class History {
  #tests;
  #stats;
  #sentences;
  
  constructor() {
    this.#stats = new Array(), // stores stats for corresponding for sentences
    this.#sentences = new Array(), // stores all sentences typed by user

    this.#tests = new Object({
      completed: 0, // should be equal to sentences.length and stats.length
      notcompleted: 0, // can be greater/less/equal to sentence.length and stats.length
    })
  }
}

export { Time, Stats, History };