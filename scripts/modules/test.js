import * as Caret from "./caret.js";
import * as Constants from "./constants.js";
import * as Elements from "./elements.js";
import Config from "./config.js";
import Sentence from "./sentence.js";

class Test {
  sentence;

  constructor() {
    this.sentence = new Sentence();
  }
  
  start() {
    Caret.addHighlightTo(this.sentence.activeWord);
    Caret.addCaretTo(this.sentence.activeLetter);

    Elements.inputbox.removeEventListener('keydown', handlekeydown.bind(this), false);
    Elements.inputbox.addEventListener('keydown', handlekeydown.bind(this), false);
    Elements.inputbox.focus();
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
    
    this.sentence.activeWord.classList.remove('error');
    Caret.goToNextLetter(this.sentence);
    
    if (this.over()) {
      this.testEndTime = window.performance.now();

      Caret.removeCaretFrom(this.sentence.activeLetter);
      Caret.removeHighlightFrom(this.sentence.activeWord);
      
      // start a new test...
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(this.sentence.activeLetter);
    Caret.removeHighlightFrom(this.sentence.activeWord);

    let i = this.sentence.totalwords - 1;
    while ( i >= 0 ) {
      this.sentence.activeWord.classList.remove("error");
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
    this.sentence.activeWord.classList.remove("error");

    if ( this.sentence.activeWordIndex > 0 && this.sentence.activeLetterIndex === 0 ) {
      Caret.goToPreviousWord(this.sentence);
    }

    this.sentence.activeWord.classList.remove("error");
    this.sentence.resetActiveLetterIndex();
    Caret.addCaretTo(this.sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    this.sentence.activeWord.classList.remove("error");

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
    console.log(`Error: '${this.sentence.activeWordValue}'`);
    // insert '·' this instead of &nbsp; when user hits space character in the wrong place
    if (!Constants.invisibles.includes(typedkey)) {
      this.sentence.activeWord.classList.add("error");
    }
  }
}

let test = new Test();
test.start();

export default Test;