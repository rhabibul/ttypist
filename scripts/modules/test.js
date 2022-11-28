import * as Caret from "./caret.js";
import Config from "./config.js";
import Sentence from "./sentence.js";
import { Timer, Stats } from "./stats.js"

// lastKeypressTimestamp  ->  performance.now();
const teststats = {
  completed: 0,
  incompleted: 0,
};

const inputbox = document.getElementById("textinput");
const wordcontainer = document.getElementById("sentence");
const restart = document.querySelector("#settings > button.restart");

class Test {
  #sentence;

  constructor() {
    this.#sentence = new Sentence();
  }

  loadwords(words) {
    inputbox.value = "";
    wordcontainer.innerHTML = "";
  
    for (let word of words) {
      wordcontainer.insertAdjacentElement("beforeend", word);
    }
  }
  
  // If test if stopped midway and restart button is clicked then we will use
  // the current test object.
  //
  // If test is finished then new test object will be created
  
  restart() {
    this.#sentence = new Sentence();
    this.start();
  }

  start() {
    this.loadwords(this.#sentence.getwords);

    inputbox.addEventListener('keydown', handlekeydown);
    inputbox.addEventListener('keyup', handlekeyup);
  }

  over() {
    let l = this.#sentence.activeLetterIndex() === this.#sentence.activeWordLength();
    let w = this.#sentence.activeWordIndex()   === this.#sentence.totalwords();
    return l && w;
  }
}

restart.addEventListener("click", function (evt) {
  evt.preventDefault();

  // check if this button is hit before completing the test
});

function handlekeydown(evt) {
  evt.preventDefault();

  let typedkey = evt.key;
}

class History { }

export default Test;