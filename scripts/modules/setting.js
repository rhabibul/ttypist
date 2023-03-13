import Config from "./config.js";
import { test } from "../main.js";
import * as Element from "./element.js";
import * as CONST from "./const.js"
import { time, history, sentence } from "./test.js";


function updatewhitespace(evt) {
  evt.preventDefault();

  // if user clicks on same whitespace button then don't do anything
  if ( this.id == "ws_active" ) return;

  if ( this.classList.contains("ws_space") ) {
    Config.sentence.whitespace = CONST.whitespace.space;
    Element.ws_space.id = "activebox";
    Element.ws_dot.id = "";
  } else {
    Element.ws_dot.id = "activebox";
    Element.ws_space.id = "";
    Config.sentence.whitespace = CONST.whitespace.dot;
  }

  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    Element.input.blur();
    if ( letter.classList.contains("whitespace") ) {
      if ( Config.sentence.whitespace == CONST.whitespace.space ) {  
        letter.innerHTML = `${Config.sentence.whitespace}`;
      } else {
        letter.innerHTML = `<span id="wdot">${Config.sentence.whitespace}</span>`;
      }
    }
    Element.input.focus();
  });
}

function updatecaret(evt) {

  evt.preventDefault();

  const caret = this; // caret which has been choosen
  const prevcaret = Config.caret.type; // save previous caret type
  
  // if user clicks on same caret icon then don't do anything
  if (caret.dataset.type === Config.caret.type) return;

  // update caret type on ui
  for ( const other of Element.carettype ) {
    // todo
    //   - complete this updatecaret function (ui part)
    //   - refactored css variable names
    //   - modify CONST.carettype object & addition of id/class on all letters
    //   - when user changes caret
    //   - rename element objects in element.js
  }
  
  Config.caret.type = caret.dataset.type; // update current caret type

  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(CONST.carettype[prevcaret]); // remove previous caret's styling from all letters
    sentence.removeCaretFromActiveLetter();
    
    letter.classList.add(CONST.carettype[Config.caret.type]); // add new caret's styling to all letters
    sentence.addCaretToActiveLetter();

    Element.input.focus();
  });

  // can add new random words and startover the test
  // test.start(); 
}

Element.offtype.addEventListener      ("click", updatecaret);
Element.boxtype.addEventListener      ("click", updatecaret);
Element.linetype.addEventListener     ("click", updatecaret);
Element.blocktype.addEventListener    ("click", updatecaret);
Element.underlinetype.addEventListener("click", updatecaret);

Element.restart.addEventListener('click', (evt) => { test.start(); });

Element.restart.addEventListener('focus', (evt) => { 
  Element.restart.style.border = "1px solid lightgray"
  Element.icon_restart.style.color = "black"
});

Element.restart.addEventListener('focusout', (evt) => { 
  Element.restart.style.border = ""
  Element.icon_restart.style.color = "#6b6b6b"
});

Element.ws_dot.addEventListener('click',   updatewhitespace);
Element.ws_space.addEventListener('click', updatewhitespace);

// underline styling
// 
//      Add
//         .style["text-decoration-line"]          = "underline";
//         .style["text-decoration-thickness"]     = "1px";
//         .style["text-underline-offset"]         = "4px";
//         .style["text-decoration-color"]         = "#c0c0c0";
//      
//      Remove
//         .style["text-decoration-line"]          = "";
//         .style["text-decoration-thickness"]     = "";
//         .style["text-underline-offset"]         = "";
//         .style["text-decoration-color"]         = "";