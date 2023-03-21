import * as CONST from "./const.js";
import * as Misc from "./misc.js"
import * as Caret from "./caret.js";
import * as Element from "./element.js";

import Config from "./config.js";
import Time from "./stat.js";
import Sentence from "./sentence.js";
import { test } from "../main.js";

class Test {

  constructor () { }

  start() {
    time.reset();
    sentence.reset();

    if ( Config.sentence.highlight.word ) Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);
    
    Element.input.addEventListener('keydown', this.registerkeydown, false);
    Element.input.focus();
    Element.setting.restart.button.blur();
  }
  registerkeydown(evt) {
    evt.preventDefault();
  
    if ( !evt.isTrusted ) {
      console.log("You're not human. 🤦🏻‍♂️");
      Element.input.removeEventListener("keydown", registerkeydown); // this doesn't stop the autotyper from typing though
      Element.input.remove(); // this doesn't stop the autotyper from typing though
      return; // no further processing if test is automated
    }
  
    if ( !time.started ) time.start();
  
    let typedkey = evt.key;
    
    if ( typedkey === 'Tab' ) {
      Element.input.blur();
      Element.setting.restart.button.focus();
    }
  
    if ( (Misc.charcode(sentence.activeLetterValue) === Misc.charcode(Config.sentence.whitespace)) && (typedkey === " ") ) {
      
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
        
        Element.input.removeEventListener('keydown', this.registerkeydown, false);
  
        Misc.showspeed(sentence, time);
        test.start();      
      }
      
    } else if (evt.metaKey && typedkey === "Backspace") {
  
      Caret.removeCaretFrom(sentence.activeLetter);
      if ( Config.sentence.highlight.word ) Caret.removeHighlightFrom(sentence.activeWord);
  
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
      
      if ( Config.sentence.highlight.word ) Caret.addHighlightTo(sentence.activeWord);
      Caret.addCaretTo(sentence.activeLetter);
  
    } else if ( evt.altKey  && typedkey === "Backspace" || evt.ctrlKey && typedkey === "Backspace" ) {
  
      Caret.removeCaretFrom(sentence.activeLetter);
      
      if ( Config.sentence.highlight.word ) {
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
  
      if ( Config.sentence.highlight.word ) {
        sentence.activeWord.classList.remove("error");
      }
      sentence.resetActiveLetterIndex();
      Caret.addCaretTo(sentence.activeLetter);
  
    } else if ( typedkey === "Backspace" ) {
  
      if ( Config.sentence.highlight.word ) sentence.activeWord.classList.remove("error");
  
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
      if (!CONST.invisible.includes(typedkey)) {
        if ( Config.sentence.highlight.word ) sentence.activeWord.classList.add("error");
        if ( Config.sentence.highlight.letter ) sentence.activeLetter.classList.add("error");
      }
    }
  }
}

function registerkeyup(evt) {
  evt.preventDefault();
}
/*
function registerkeydown(evt) {
  evt.preventDefault();

  if ( !evt.isTrusted ) {
    console.log("You're not human. 🤦🏻‍♂️");
    Element.input.removeEventListener("keydown", registerkeydown); // this doesn't stop the autotyper from typing though
    Element.input.remove(); // this doesn't stop the autotyper from typing though
    return; // no further processing if test is automated
  }

  if ( !time.started ) time.start();

  let typedkey = evt.key;
  
  if ( typedkey === 'Tab' ) {
    Element.input.blur();
    Element.setting.restart.button.focus();
  }

  if ( (Misc.charcode(sentence.activeLetterValue) === Misc.charcode(Config.sentence.whitespace)) && (typedkey === " ") ) {
    
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
      
      Element.input.removeEventListener('keydown', registerkeydown, false);

      Misc.showspeed(sentence, time);
      test.start();      
    }
    
  } else if (evt.metaKey && typedkey === "Backspace") {

    Caret.removeCaretFrom(sentence.activeLetter);
    if ( Config.sentence.highlight.word ) Caret.removeHighlightFrom(sentence.activeWord);

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
    
    if ( Config.sentence.highlight.word ) Caret.addHighlightTo(sentence.activeWord);
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( evt.altKey  && typedkey === "Backspace" || evt.ctrlKey && typedkey === "Backspace" ) {

    Caret.removeCaretFrom(sentence.activeLetter);
    
    if ( Config.sentence.highlight.word ) {
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

    if ( Config.sentence.highlight.word ) {
      sentence.activeWord.classList.remove("error");
    }
    sentence.resetActiveLetterIndex();
    Caret.addCaretTo(sentence.activeLetter);

  } else if ( typedkey === "Backspace" ) {

    if ( Config.sentence.highlight.word ) sentence.activeWord.classList.remove("error");

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
    if (!CONST.invisible.includes(typedkey)) {
      if ( Config.sentence.highlight.word ) sentence.activeWord.classList.add("error");
      if ( Config.sentence.highlight.letter ) sentence.activeLetter.classList.add("error");
    }
  }
}
*/

let time = new Time();
let sentence = new Sentence();

export default Test;
export { time, sentence };