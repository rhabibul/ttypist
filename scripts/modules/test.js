import * as Caret from "./caret.js";
import * as Constants from "./constants.js";
import Config from "./config.js";
import Sentence from "./sentence.js";
// import * as Misc from "./misc.js";
// import { Timer, Stats, teststats } from "./stats.js";

const inputbox = document.getElementById("inputbox");
const wordcontainer = document.getElementById("sentence");

function loadwords(words) {
  inputbox.value = "";
  wordcontainer.innerHTML = "";

  for (let word of words) {
    wordcontainer.insertAdjacentElement("beforeend", word);
  }
}

// If test if stopped midway by clicking restart button then we will use
// the current test object.
// If test is finished then new test object will be created.
class Test {
  sentence;
  testStartTime;
  testEndTime;
  testNotStarted;

  constructor() {
    this.sentence = new Sentence();
    this.testStartTime = 0;
    this.testEndTime = 0;
    this.testNotStarted = true;
  }

  restart() {
    this.testStartTime = 0;
    this.testEndTime = 0;
    this.testNotStarted = true;
    this.sentence = new Sentence();
    this.start();
  }

  start() {
    loadwords(this.sentence.getwords);

    Caret.addHighlightTo(this.sentence.activeWord);
    Caret.addCaretTo(this.sentence.activeLetter);

    inputbox.addEventListener('keydown', handlekeydown.bind(this), false);
    inputbox.addEventListener('keyup', handlekeyup.bind(this), false);
    inputbox.focus();
  }

  over() {
    let l = this.sentence.activeLetterIndex === this.sentence.activeWordLength - 1;
    let w = this.sentence.activeWordIndex   === this.sentence.totalwords - 1;
    return l && w;
  }
}

function charcode(char) {
  if ( char === Constants.whitespace.space ) return 160;
  if ( char === Constants.whitespace.bullet) return 11825;
  return char.charCodeAt(0);
}


function showspeed(totalchars, testStartTime, testEndTime) {
  const sec = (testEndTime - testStartTime) / 1000;
  const wordsTyped = totalchars / 5;
  const wpm = (wordsTyped / sec) * 60;

  let speedelement = document.querySelector(".speed");
  speedelement.textContent = `${Math.round(wpm)}wpm`;
  speedelement.style.color = "deeppink";
  speedelement.style.fontWeight = "400";
}

function handlekeydown(evt) {
  evt.preventDefault();

  if ( this.testNotStarted ) {
    this.testStartTime = window.performance.now();
    this.testNotStarted = false;
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
      this.testEndTime = window.performance.now();

      Caret.removeCaretFrom(this.sentence.activeLetter);
      Caret.removeHighlightFrom(this.sentence.activeWord);

      
      inputbox.blur();
      showspeed(this.sentence.totalcharacters, this.testStartTime, this.testEndTime);
      this.restart();
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(this.sentence.activeLetter);
    Caret.removeHighlightFrom(this.sentence.activeWord);

    let i = this.sentence.totalwords - 1;
    while ( i >= 0 ) {
      this.sentence.activeWord.classList.remove("incorrect");
      this.sentence.decrementWordIndex();
      --i;
      if ( this.sentence.activeWordIndex < 0 ) break;
    }

    this.sentence.resetIndexes();
    Caret.addHighlightTo(this.sentence.activeWord);
    Caret.addCaretTo(this.sentence.activeLetter);
    
  } else if (
    evt.altKey  && typedkey === "Backspace" ||
    evt.ctrlKey && typedkey === "Backspace"
  ) {

    Caret.removeCaretFrom(this.sentence.activeLetter);
    Caret.removeHighlightFrom(this.sentence.activeWord);

    if ( this.sentence.activeWordIndex > 0 && this.sentence.activeLetterIndex === 0 ) {
      Caret.goToPreviousWord(this.sentence);
    }

    this.sentence.activeWord.classList.remove("incorrect");
    this.sentence.resetActiveLetterIndex();
    Caret.addCaretTo(this.sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    this.sentence.activeWord.classList.remove("incorrect");

    if ( this.sentence.activeLetterIndex > 0 ) {
      Caret.goToPreviousLetter(this.sentence);
    } else {
      if ( this.sentence.activeLetterIndex === 0 && this.sentence.activeWordIndex > 0 ) {
        
        Caret.removeCaretFrom(this.sentence.activeLetter);
        Caret.goToPreviousWord(this.sentence);

        this.sentence.activeLetterIndex = this.sentence.activeWordLength - 1;
        Caret.addCaretTo(this.sentence.activeLetter);
      }
    }
    
  } else {

    // insert '·' this instead of &nbsp; when user hits space character in the wrong place
    if (!Constants.invisibles.includes(typedkey)) {
      this.sentence.activeWord.classList.add("incorrect");
    }
  }
}

function handlekeyup(evt) {
  evt.preventDefault();
  let keyup = evt.key;
}

export default Test;