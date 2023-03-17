import Config from "./config.js";
import * as Element from "./element.js";
import * as CONST from "./const.js"
import { sentence } from "./test.js";
import { test } from "../main.js";

function updatewhitespace(evt) {

  evt.preventDefault();

  // if user clicks on same whitespace button then don't do anything
  if ( this.id == "chosen" ) return;

  if ( this.dataset.whitespace === "space" ) {
    Element.setting.whitespace.space.id = "chosen";
    Element.setting.whitespace.dot.id = "";
    Config.sentence.whitespace = CONST.whitespace.space;
  } else {
    Element.setting.whitespace.dot.id = "chosen";
    Element.setting.whitespace.space.id = "";
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
  if (this.dataset.type === Config.caret.type) return;

  const prevcaret = Config.caret.type; // save previous caret type
  const thiscaret = this; // caret which has been choosen

  const computedvalues = getComputedStyle(Element.root);

  const active_color = computedvalues.getPropertyValue("--setting-color-active");
  const inactive_color = computedvalues.getPropertyValue("--setting-color-inactive");
  
  const active_bgcolor = computedvalues.getPropertyValue("--setting-bgcolor-active");
  const inactive_bgcolor = computedvalues.getPropertyValue("--setting-bgcolor-inactive");

  
  function colorshape(caret, active) {

    const shape = document.querySelector(`caret.${caret.dataset.type} shape`);

    if ( caret.dataset.type === "line" || caret.dataset.type === "block" ) {
      if ( active ) {
        shape.style.backgroundColor = active_color;
      } else {
        shape.style.backgroundColor = inactive_color;
      }
    } else if ( caret.dataset.type === "underline" ) {
      if ( active ) {
        shape.style.backgroundColor = active_bgcolor;
        shape.style.borderBottomColor = active_color;
      } else {
        shape.style.backgroundColor = inactive_bgcolor;
        shape.style.borderBottomColor = inactive_color;
      }
    } else if ( caret.dataset.type === "box" ) {
      if ( active ) {
        shape.style.borderColor = active_color;
        shape.style.backgroundColor = active_bgcolor;
      } else {
        shape.style.borderColor = inactive_color;
        shape.style.backgroundColor = inactive_bgcolor;
      }
    } else {
      const i = document.querySelector(`caret.off shape > i.fa-ban`);
      if ( active ) {
        i.style.color = "#ff0000";
        caret.style.backgroundColor = "#ffe4e4";
      } else {
        i.style.color = "#3b3b3b";
        caret.style.backgroundColor = inactive_bgcolor;
      }
    }
  }

  thiscaret.style.backgroundColor = active_bgcolor;
  colorshape(thiscaret, true);
  
  // update caret type on ui
  for ( const [_, othercaret] of Object.entries(Element.setting.caret) ) {
    if ( thiscaret !== othercaret ) {
      othercaret.style.backgroundColor = inactive_bgcolor;
      colorshape(othercaret, false);
    }
  }

  // update current caret type in config
  Config.caret.type = thiscaret.dataset.type;

  // apply new caret styles to all the letters
  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(CONST.caret[prevcaret]); // remove previous caret's styling from all letters
    sentence.removeCaretFromActiveLetter();
    
    letter.classList.add(CONST.caret[Config.caret.type]); // add new caret's styling to all letters
    sentence.addCaretToActiveLetter();

    Element.input.focus();
  });
}

Element.setting.caret.off.addEventListener      ("click", updatecaret);
Element.setting.caret.box.addEventListener      ("click", updatecaret);
Element.setting.caret.line.addEventListener     ("click", updatecaret);
Element.setting.caret.block.addEventListener    ("click", updatecaret);
Element.setting.caret.underline.addEventListener("click", updatecaret);

// select line caret as the default caret
Element.setting.caret.line.dispatchEvent(new Event('click'));

Element.setting.restart.button.addEventListener('click', (evt) => {
  evt.preventDefault();
   test.start(); 
  });

Element.setting.restart.button.addEventListener('focus', (evt) => { 
  evt.preventDefault();
  Element.setting.restart.button.style.border = "1px solid lightgray"
  Element.setting.restart.button_icon.style.color = "black"
});

Element.setting.restart.button.addEventListener('focusout', (evt) => { 
  evt.preventDefault();
  Element.setting.restart.button.style.border = ""
  Element.setting.restart.button_icon.style.color = "#6b6b6b"
});

Element.setting.whitespace.dot.addEventListener('click',   updatewhitespace);
Element.setting.whitespace.space.addEventListener('click', updatewhitespace);

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