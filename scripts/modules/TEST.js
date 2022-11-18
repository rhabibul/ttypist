let testHasStarted = true;
let lastTimeKeypressed = 0; // performance.now();

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

class History {
  #acc;
  #wpm;
  #tests;
  constructor() {
    this.#tests = new Array();
    this.#wpm = new Array();
    this.#acc = new Array();
  }
  totaltests() {
    return this.#tests.length;
  }
}