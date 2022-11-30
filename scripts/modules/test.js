import * as Caret from "./caret.js";
import Config from "./config.js";
import { whitespace } from "./constants.js";
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
  sentence;

  constructor() {
    this.sentence = new Sentence();
  }

  loadwords(words) {
    inputbox.value = "";
    wordcontainer.innerHTML = "";
  
    for (let word of words) {
      wordcontainer.insertAdjacentElement("beforeend", word);
    }
  }
  
  // If test if stopped midway by clicking restart button then we will use
  // the current test object.
  //
  // If test is finished then new test object will be created.
  
  restart() {
    this.sentence = new Sentence();
    // updateUI();
    this.start();
  }

  start() {
    this.loadwords(this.sentence.getwords);

    inputbox.addEventListener('keydown', handlekeydown);
    inputbox.addEventListener('keyup', handlekeyup);
  }

  removeListenersFromInput() {
    inputbox.removeEventListeners('keydown', handlekeydown);
    inputbox.removeEventListeners('keyup', handlekeyup);
  }

  over() {
    let l = this.sentence.activeLetterIndex() === this.sentence.activeWordLength() - 1;
    let w = this.sentence.activeWordIndex()   === this.sentence.totalwords() - 1;
    return l && w;
  }
}

let test = new Test();

restart.addEventListener("click", function (evt) {
  evt.preventDefault();
  test.restart();
});

function startBrandNewTest() {
  test = new Test();
  test.start();
}

function charcode(char) {
  if ( char === whitespace.space ) return 160;
  if ( char === whitespace.bullet) return 11825;
  return char.charCodeAt(0);
}

function handlekeydown(evt) {
  evt.preventDefault();

  if ( testNotStarted ) {
    testStartTime = window.performance.now();
    testNotStarted = false;
  }

  let typedkey = evt.key;

  if ( 
    (charcode(this.sentence.activeLetterValue) === charcode(Config.wordseparator)) &&
    (typedkey === " ")
   ) {

    Caret.removeCaretFrom(this.sentence.activeLetter);
    Caret.goToNextWord(this.sentence);

    this.sentence.resetActiveLetterIndex();
    Caret.addCaretTo(this.sentence.activeLetter);
    
  } else if (typedkey === this.sentence.activeLetterValue) {
    
    this.sentence.activeWord.classList.remove('incorrect');
    Caret.goToNextLetter(this.sentence);
    
    if (this.over()) {
      testEndTime = window.performance.now();

      Caret.removeCaretFrom(this.sentence.activeLetter);
      Caret.removeHighlightFrom(this.sentence.activeWord);

      showspeed(testStartTime, testEndTime);
      this.removeListenersFromInput();
      startBrandNewTest();
    }
  } else if () {
    
  }
}

function handlekeyup(evt) {
  evt.preventDefault();

  let keyup = evt.key;
}

class History { }

export default Test;