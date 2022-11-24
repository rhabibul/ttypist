// Caret will have all the helper functions like goToNextWord, goToNextLetter,
// goToPreviousWord, goToPreviousLetter.
// All these function will be provide the sentence object as parameter.
import * as Caret from "./caret.js";
import Config from "./config.js";
import Sentence from "./sentence.js";
import { Timer, Stats } from "./stats.js"

// Caret.goToNextLetter(sentence);
// Caret.goToPreviousLetter(sentence);
// Caret.goToNextWord(sentence);
// Caret.goToPreviousWord(sentence);

const teststats = {
  completed: 0,
  incompleted: 0,
};

const textinput = document.getElementById("textinput");
const wordcontainer = document.getElementById("sentence");
const starttest = document.querySelector("#settings > button.newtest");

let test = new Test();
test.startfirsttest();

starttest.addEventListener("click", function (evt) {
  evt.preventDefault();

  // check if this button is hit before completing the test

  test = new Test();
  test.start();
});

function cleanTestArea() {
  textinput.value = "";
  wordcontainer.innerHTML = "";
}

function loadWordsInTestArea(words) {
  for ( let word of words ) {
    wordcontainer.insertAdjacentElement("beforeend", word);
  }
}

// Test object will run the game
class Test {
  #stats;
  #timer;
  #sentence;
  #lastKeypressTimestamp; // performance.now();

  constructor() {
    this.#timer = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }

  startfirsttest() {
    cleanTestArea();
    loadWordsInTestArea(this.#sentence.getwords);
  }

  start() {
    this.#timer = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
    cleanTestArea();
    loadWordsInTestArea(this.#sentence.getwords);
  }

  over() {
    let l = this.#sentence.activeLetterIndex() === this.#sentence.activeWordLength();
    let w = this.#sentence.activeWordIndex()   === this.#sentence.totalwords();
    return l && w;
  }
}

class History { }

export default Test;