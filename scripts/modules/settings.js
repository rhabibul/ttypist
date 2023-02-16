import Config from "./config.js";
import { test } from "../main.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js"
import { time, history, sentence } from "./test.js";

function changeCaret(evt) {
  evt.preventDefault();

  let clickedcaret = this;

  if (clickedcaret.title === Config.caret) return;

  for (let caret of Elements.allcarettype) {
    if (clickedcaret !== caret) {
      caret.style.backgroundColor = "var(--settings-caret__bg)";
      if (caret === Elements.offtype) {
        Elements.icon_offtype.style.color = "#6b6b6b";
      }
    }
  }

  if (clickedcaret === Elements.offtype) {
    Elements.icon_offtype.style.color = "#ff0000";
    Elements.offtype.style.backgroundColor = "#ffeaea";
  } else {
    clickedcaret.style.backgroundColor = "var(--settings-caret__bg-active)";
  }

  let lastcaret = Config.caret; // previous caret type

  Config.caret = clickedcaret.title; // current caret type


  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(Constants.carettypes[lastcaret]);
    sentence.removeCaretFromActiveLetter();

    letter.classList.add(Constants.carettypes[Config.caret]);
    sentence.addCaretToActiveLetter();

    Elements.inputbox.focus();
  });

  // can add new random words and startover the test
  // test.start(); 
}

Elements.offtype.addEventListener      ("click", changeCaret);
Elements.boxtype.addEventListener      ("click", changeCaret);
Elements.linetype.addEventListener     ("click", changeCaret);
Elements.blocktype.addEventListener    ("click", changeCaret);
Elements.underlinetype.addEventListener("click", changeCaret);

Elements.inputbox.addEventListener("focus",     (evt) => { evt.preventDefault(); Config.typing = true;  });
Elements.inputbox.addEventListener("focusout",  (evt) => { evt.preventDefault(); Config.typing = false; });

Elements.btn_restart.addEventListener('click', (evt) => {
  evt.preventDefault();
  test.start();
});

Elements.btn_restart.addEventListener('focus', (evt) => { 
  Elements.btn_restart.style.border = "1px solid lightgray"
  Elements.icon_restart.style.color = "black"
});

Elements.btn_restart.addEventListener('focusout', (evt) => { 
  Elements.btn_restart.style.border = ""
  Elements.icon_restart.style.color = "#6b6b6b"
});

Elements.ws_dot.addEventListener('click', (evt) => { 
  console.log('dot');
});
Elements.ws_space.addEventListener('click', (evt) => {
  console.log('space');
});

// underline styling
// 
//      Add
//         .style.color                            = "black";
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