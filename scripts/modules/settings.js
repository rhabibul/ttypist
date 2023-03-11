import config from "./config.js";
import { test } from "../main.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js"
import { time, history, sentence } from "./test.js";


function updatewhitespace(evt) {
  evt.preventDefault();

  // if user clicks on same whitespace button then don't do anything
  if ( this.id == "ws_active" ) return;

  if ( this.classList.contains("ws_space") ) {
    config.sentence.whitespace = Constants.whitespace.space;
    Elements.ws_space.id = "ws_active";
    Elements.ws_dot.id = "";
  } else {
    Elements.ws_dot.id = "ws_active";
    Elements.ws_space.id = "";
    config.sentence.whitespace = Constants.whitespace.dot;
  }

  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {

    Elements.inputbox.blur();

    if ( letter.classList.contains("whitespace") ) {

      if ( config.sentence.whitespace == Constants.whitespace.space ) {  
        letter.innerHTML = `${config.sentence.whitespace}`;
      } else {
        letter.innerHTML = `<span id="whitespace-dot">${config.sentence.whitespace}</span>`;
      }
    }

    Elements.inputbox.focus();
  });
}

function updatecaret(evt) {
  evt.preventDefault();

  // if user clicks on same caret icon then don't do anything
  if (this.title === config.caret.type) return;

  for (let caret of Elements.allcarettype) {
    if (this !== caret) {
      caret.style.backgroundColor = "var(--bgcolor-settingboxes)";
      if (caret === Elements.offtype) {
        Elements.icon_offtype.style.color = "#6b6b6b";
      }
    }
  }

  if (this === Elements.offtype) {
    Elements.icon_offtype.style.color = "#ff0000";
    Elements.offtype.style.backgroundColor = "#ffd2d2";
  } else {
    this.style.backgroundColor = "var(--bgcolor-active)";
  }

  let lastcaret = config.caret.type; // previous caret type

  config.caret.type = this.title; // current caret type

  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(Constants.carettypes[lastcaret]);
    sentence.removeCaretFromActiveLetter();

    letter.classList.add(Constants.carettypes[config.caret.type]);
    sentence.addCaretToActiveLetter();

    Elements.inputbox.focus();
  });

  // can add new random words and startover the test
  // test.start(); 
}

Elements.offtype.addEventListener      ("click", updatecaret);
Elements.boxtype.addEventListener      ("click", updatecaret);
Elements.linetype.addEventListener     ("click", updatecaret);
Elements.blocktype.addEventListener    ("click", updatecaret);
Elements.underlinetype.addEventListener("click", updatecaret);

Elements.btn_restart.addEventListener('click', (evt) => { test.start(); });

Elements.btn_restart.addEventListener('focus', (evt) => { 
  Elements.btn_restart.style.border = "1px solid lightgray"
  Elements.icon_restart.style.color = "black"
});

Elements.btn_restart.addEventListener('focusout', (evt) => { 
  Elements.btn_restart.style.border = ""
  Elements.icon_restart.style.color = "#6b6b6b"
});

Elements.ws_dot.addEventListener('click',   updatewhitespace);
Elements.ws_space.addEventListener('click', updatewhitespace);


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