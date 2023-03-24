import * as Const from "./const.js";
import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Element from "./element.js";

import Config from "./config.js";
import Time from "./stat.js";
import Sentence from "./sentence.js";

let firsterror = true;
let preverror = new Object();
let extra = new Object();

class Test {

  constructor () { }

  start() {
    firsterror = true;
    preverror = new Object();
    extra = new Object();
    
    time.reset();
    sentence.reset();

    if ( Config.highlight.mode.word ) Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);
    
    Element.input.addEventListener('keydown', registerkeydown, false);
    Element.input.focus();
    Element.setting.restart.button.blur();
  }
}

// start implementing registerkeywown with new sentence and word objects
function registerkeydown(evt) {
  if ( !evt.isTrusted ) return;
  if ( !time.started ) time.start();

  let typedkey = evt.key;
  
  if ( typedkey === 'Tab' ) {
    Element.input.blur();
    Element.setting.restart.button.focus();
  }

  if ( (typedkey === ' ') && (Misc.isspace(sentence.activeLetterValue)) ) {
    
    Caret.removeCaretFrom(sentence.activeLetter);
    Caret.goToNextWord(sentence);
    firsterror = true;

    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);
    
  } else if (typedkey === sentence.activeLetterValue) {
    
    sentence.activeWord.classList.remove('error');
    Caret.goToNextLetter(sentence);
    
    if ( sentence.typed ) {
      time.stop();
      Caret.removeCaretFrom(sentence.activeLetter);
      Caret.removeHighlightFrom(sentence.activeWord);
      
      Element.input.removeEventListener('keydown', registerkeydown, false);

      Misc.showspeed(sentence, time);
      test.start();      
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(sentence.activeLetter);
    if ( Config.highlight.mode.word ) Caret.removeHighlightFrom(sentence.activeWord);

    let i = sentence.wordCount - 1;
    while ( i >= 0 ) {
      sentence.activeWord.classList.remove("error");
      if ( Config.sentence.highlight.letter ) {
        for ( const letter of sentence.activeWord.children ) {
          letter.classList.remove("fade");
          letter.classList.remove("error");
        }
      }
      sentence.decrementWordIndex();
      --i;
      if ( sentence.activeWordIndex < 0 ) break;
    }

    sentence.resetActiveWordIndex();
    sentence.resetActiveLetterIndex();
    
    if ( Config.highlight.mode.word ) Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( evt.altKey  && typedkey === "Backspace" || evt.ctrlKey && typedkey === "Backspace" ) {

    Caret.removeCaretFrom(sentence.activeLetter);
    
    if ( Config.highlight.mode.word ) {
      sentence.activeWord.classList.remove("error");
    } else {
      const letters = sentence.activeWord.children;
      for ( let i = letters.length - 1; i >= 0; --i ) {
        letters[i].classList.remove("fade");
        letters[i].classList.remove("error");
      }
    }

    if ( sentence.activeWordIndex > 0 && sentence.activeLetterIndex === 0 ) {
      Caret.goToPreviousWord(sentence);
      if ( Config.sentence.highlight.letter ) {
        const letters = sentence.activeWord.children;
        for ( let i = letters.length - 1; i >= 0; --i ) {
          letters[i].classList.remove("fade");
          letters[i].classList.remove("error");
        } 
      }
    }

    if ( Config.highlight.mode.word ) {
      sentence.activeWord.classList.remove("error");
    }
    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    if ( Config.highlight.mode.word ) sentence.activeWord.classList.remove("error");

    if ( sentence.activeLetterIndex > 0 ) {
      if ( sentence.prevletter.classList.contains('extra') ) {
        sentence.prevletter.remove();
        sentence.decrementLetterIndex();
      } else {
        Caret.goToPreviousLetter(sentence);
      }
    } else {

      if ( sentence.activeLetterIndex === 0 && sentence.activeWordIndex > 0 ) {
        firsterror = true;
        Caret.removeCaretFrom(sentence.activeLetter);
        Caret.goToPreviousWord(sentence);

        sentence.activeLetterIndex = sentence.activeWordLength - 1;
        Caret.addCaretTo(sentence.activeLetter);
      }
    }
    
  } else {
    if (!Const.notprintable.includes(typedkey)) {
      if ( Config.highlight.mode.word ) sentence.activeWord.classList.add("error");
      if ( Config.sentence.highlight.letter ) sentence.activeLetter.classList.add("error");

      // error insertion
      extra = document.createElement("letter");
      extra.textContent = typedkey;
      extra.classList.add("extra");

      if ( firsterror ) {
        firsterror = false;
        sentence.activeLetter.insertAdjacentElement('beforebegin', extra);
        preverror = extra;
        sentence.incrementLetterIndex();
      } else {
        preverror.insertAdjacentElement('afterend', extra);
        preverror = extra;
        sentence.incrementLetterIndex();
      }

      // console.log(sentence.activeWord?.children);
    }
  }
}

let time = new Time();
let sentence = new Sentence();

export default Test;
export { time, sentence };