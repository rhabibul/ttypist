import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";
import Config from "./config.js";
import Sentence from "./sentence.js";

class Test {
  #sentence;
  constructor() {
    this.#sentence = new Sentence();
  }
}

export default Test;