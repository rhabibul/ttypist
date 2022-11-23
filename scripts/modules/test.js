class Test {
  #testStarted; // boolean
  #lastKeypressedTimestamp; // performance.now();
  #stats;
  #timer;
  #sentence;

  constructor() {
    this.#timer = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }
}

class History { }