import * as Misc from "./modules/misc.js";
import * as Caret from "./modules/caret.js";
import * as Elements from "./modules/elements.js"
import * as Constants from "./modules/constants.js";

import Test from "./modules/test.js";
import Config from "./modules/config.js";
import Sentence from "./modules/sentence.js";

let testEndTime = 0;
let testStartTime = 0;
let testNotStarted = true;

let sentence = new Sentence();

function ignite(afterburn = false) { 

  if ( afterburn ) {
    sentence = new Sentence();
  }
  
  Caret.addHighlightTo(sentence.activeWord);
  Caret.addCaretTo(sentence.activeLetter);
  
  Elements.inputbox.addEventListener('keydown', handlekeydown, false);
  Elements.inputbox.focus();
}
ignite(); // first test

function testover(sentence) {
  let l = sentence.activeLetterIndex === sentence.activeWordLength - 1;
  let w = sentence.activeWordIndex   === sentence.totalwords - 1;
  return l && w;
}

function handlekeydown(evt) {
  evt.preventDefault();

  if ( testNotStarted ) {
    testStartTime = window.performance.now();
    testNotStarted = false;
  }

  let typedkey = evt.key;

  if ( 
    (Misc.charcode(sentence.activeLetterValue) === Misc.charcode(Config.wordseparator)) && (typedkey === " ")
   ) {

    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.goToNextWord(sentence);

    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (typedkey === sentence.activeLetterValue) {
    
    sentence.activeWord.classList.remove('error');
    Caret.goToNextLetter(sentence);
    
    if ( testover(sentence) ) {
      testEndTime = window.performance.now();

      Caret.removeCaretFrom(sentence.activeLetter);
      Caret.removeHighlightFrom(sentence.activeWord);
      
      Elements.inputbox.removeEventListener('keydown', handlekeydown, false);
      sentence = new Sentence();
      ignite();
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.removeHighlightFrom(sentence.activeWord);

    let i = sentence.totalwords - 1;
    while ( i >= 0 ) {
      sentence.activeWord.classList.remove("error");
      sentence.decrementWordIndex();
      --i;
      if ( sentence.activeWordIndex < 0 ) break;
    }

    sentence.resetActiveWordIndex();
    sentence.resetActiveLetterIndex();
    
    Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (
    evt.altKey  && typedkey === "Backspace" ||
    evt.ctrlKey && typedkey === "Backspace"
  ) {

    Caret.removeCaretFrom(sentence.activeLetter);
    sentence.activeWord.classList.remove("error");

    if ( sentence.activeWordIndex > 0 && sentence.activeLetterIndex === 0 ) {
      Caret.goToPreviousWord(sentence);
    }

    sentence.activeWord.classList.remove("error");
    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    sentence.activeWord.classList.remove("error");

    if ( sentence.activeLetterIndex > 0 ) {
      Caret.goToPreviousLetter(sentence);
    } else {
      if ( sentence.activeLetterIndex === 0 && sentence.activeWordIndex > 0 ) {
        
        Caret.removeCaretFrom(sentence.activeLetter);
        Caret.goToPreviousWord(sentence);

        sentence.activeLetterIndex = sentence.activeWordLength - 1;
        Caret.addCaretTo(sentence.activeLetter);
      }
    }
    
  } else {

    // insert '·' this instead of &nbsp; when user hits space character in the wrong place
    if (!Constants.invisibles.includes(typedkey)) {
      sentence.activeWord.classList.add("error");
    }
  }
}

Elements.restart.addEventListener('click', (evt) => {
  evt.preventDefault();
})


export { ignite };
