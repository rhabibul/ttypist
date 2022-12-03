import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";
import Config from "./config.js";
import Sentence from "./sentence.js";

class Test { }

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

export default Test;
export { Time };