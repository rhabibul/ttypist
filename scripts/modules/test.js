import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js";

import Config from "./config.js";
import Sentence from "./sentence.js";
import { test } from "../main.js";
import { Time, History } from "./stats.js";

class Test {

  constructor () { }

  start() {
    time.reset();
    sentence.reset();

    Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);

    Elements.inputbox.addEventListener('keydown', handlekeydown, false);
    Elements.btn_restart.blur();
    Elements.inputbox.focus();
  }
}


let time = new Time();
let history = new History();
let sentence = new Sentence();

function handlekeydown(evt) {
  evt.preventDefault();

  if ( !evt.isTrusted ) {
    console.error("you're not human");
    return;
  }

  if ( !time.started ) time.start();

  let typedkey = evt.key;
  
  if ( typedkey === 'Tab' ) {
    Elements.inputbox.blur();
    Elements.btn_restart.focus();
  }

  if ( (Misc.charcode(sentence.activeLetterValue) === Misc.charcode(Config.sentence.wordseparator)) && (typedkey === " ") ) {
    
    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.goToNextWord(sentence);

    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (typedkey === sentence.activeLetterValue) {
    
    sentence.activeWord.classList.remove('error');
    Caret.goToNextLetter(sentence);
    
    if ( sentence.typed ) {
      time.stop();
      Caret.removeCaretFrom(sentence.activeLetter);
      Caret.removeHighlightFrom(sentence.activeWord);
      
      Elements.inputbox.removeEventListener('keydown', handlekeydown, false);

      Misc.showspeed(sentence, time);
      test.start();      
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
    // <span style="padding: 0px 4px;">⸱</span>
    if (!Constants.invisibles.includes(typedkey)) {
      sentence.activeWord.classList.add("error");
    }
  }
}

export default Test;
export { time, history, sentence };