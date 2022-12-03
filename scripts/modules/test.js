import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";

import Config from "./config.js";
import Sentence from "./sentence.js";
import { Time, Stats, History } from "./stats.js";

let time = new Time();
let stats = new Stats();
let history = new History();
let sentence = new Sentence();

class Test {
  #correctedwords; // stores array of words (in string form)

  constructor () {
    this.#correctedwords =  new Array();
  }
  
  restart() {
    time.reset();
    sentence.reset();
    this.#correctedwords = new Array();
    
    Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);
    
    Elements.inputbox.addEventListener('keydown', handlekeydown, false);
    Elements.inputbox.focus();
  }
}

export default Test;