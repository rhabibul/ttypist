import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";
import Config from "./config.js";
import Sentence from "./sentence.js";

class Test { }

class Time {
  #flag;
  #endtimer;
  #starttimer;

  constructor() {
    this.#flag = true;
    this.#endtimer = 0;
    this.#starttimer = 0;
  }

  start() {
    this.#starttimer = performance.now();
  }
  stop() {
    this.#endtimer = performance.now();
  }
  get duration() {
    return this.#endtimer - this.#starttimer;
  }
  get notstarted() {
    return this.#flag;
  }
  set notstarted(value) {
    this.#flag = value;
  }
  reset() {
    this.#flag = true;
    this.#endtimer = 0;
    this.#starttimer = 0;
  }
}

export default Test;
export { Time };