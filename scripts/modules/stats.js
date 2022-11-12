class Timer {
  #testStartTime;
  #testEndTime;

  constructor() {
    this.#testStartTime = 0;
    this.#testEndTime = 0;
  }

  startTimer() {
    this.#testStartTime = performance.now();
  }
  stopTimer() {
    this.#testEndTime = performance.now();
  }
  testDuration() {
    return this.#testStartTime - this.#testEndTime;
  }
}

class Stats {
  #wpm;
  #cpm;
  #raw;
  #accuracy;

  constructor() {
    this.#cpm = 0;
    this.#wpm = 0;
    this.#raw = 0;
    this.#accuracy = 0;
  }
}

const CharStats = {
  total: 0,
  extra: 0,
  correct: 0,
  incorrect: 0,
};

const WordStats = {
  correct: 0,
  incorrect: 0,
};

const TestStats = {
  completed: 0,
  incompleted: 0,
};

const Stats = {
  wpm: 0, // ((correctchars / 5) / 60)
  rawwpm: 0, // ((correctchars + incorrectchars + extrachars) / 5) / 60)
  accuracy: 0, // (correctchars / (correctchars + incorrectchars)) * 100)

  netwpm: 0,
  grosswpm: 0,

  totalchars: 0,

  extrachars: 0,
  correctchars: 0,
  incorrectchars: 0,

  correctwords: 0,
  incorrectwords: 0,
};

let testHasStarted = true;

class History {
  #tests;
  constructor() {
    this.#tests = new Array();
  }

  totaltests() {
    return this.#tests.length;
  }
}

class Test {
  #stats;
  #sentence;
  #time;

  constructor() {
    this.#time = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }
}
