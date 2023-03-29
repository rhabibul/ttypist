import { Config, TextConfig, MiscConfig } from "./config.js"
import * as Element from "./element.js";
import * as Const from "./const.js"
import { word, sentence, util } from "./logic.js";

function updatewhitespace(evt) {

  evt.preventDefault();
  
  if ( this.id == "chosen" ) return;

  // ui change (move it to SettingUI later)
  if ( this.dataset.type === "off" ) {
    Element.setting.whitespace.off.id = "offchosen";
    Element.setting.whitespace.dot.id = "";
    Element.setting.whitespace.space.id = "";
  } else if ( this.dataset.type === "dot" ) {
    Element.setting.whitespace.off.id = "";
    Element.setting.whitespace.dot.id = "chosen";
    Element.setting.whitespace.space.id = "";
  } else if ( this.dataset.type === "space" ) {
    Element.setting.whitespace.off.id = "";
    Element.setting.whitespace.dot.id = "";
    Element.setting.whitespace.space.id = "chosen";
  }

  // update in config object
  if ( this.dataset.type === "off" ) {
    Config.whitespace.off = true;
  } else {
    Config.whitespace.off = false;
  }
  Config.whitespace.type = this.dataset.type;
  Config.whitespace.code = Number(this.dataset.code);
  Config.whitespace.character = this.dataset.character;


  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {

    Element.input.blur();

    if ( letter.classList.contains("whitespace") ) {
      if ( Config.whitespace.type === Element.setting.whitespace.space.dataset.type ) {  
        letter.innerHTML = `${Config.whitespace.character}`;
      } else if ( Config.whitespace.type === Element.setting.whitespace.dot.dataset.type ) {
        letter.innerHTML = `<span id="wdot">${Config.whitespace.character}</span>`;
      } else {
        letter.innerHTML = "";
      }
    }

    Element.input.focus();
  });
}
Element.setting.whitespace.off.addEventListener('click',   updatewhitespace);
Element.setting.whitespace.dot.addEventListener('click',   updatewhitespace);
Element.setting.whitespace.space.addEventListener('click', updatewhitespace);

function updatecaret(evt) {

  evt.preventDefault();
  const thiscaret = this; // caret which has been choosen

  if (thiscaret.dataset.type === Config.caret.type) return;

  const oldcaret = Config.caret.type; // save previous caret type

  const computedvalues = getComputedStyle(Element.root);

  const active_color = computedvalues.getPropertyValue("--setting-color-active");
  const inactive_color = computedvalues.getPropertyValue("--setting-color-inactive");
  
  const active_bgcolor = computedvalues.getPropertyValue("--setting-bgcolor-active");
  const inactive_bgcolor = computedvalues.getPropertyValue("--setting-bgcolor-inactive");

  function colorshape(caret, active) {

    const shape = document.querySelector(`caret ${caret.dataset.type} shape`);

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
      const i = document.querySelector(`caret off i.fa-ban`);
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

  // update current caret type and on/off status in config object
  Config.caret.type = thiscaret.dataset.type;

  if ( thiscaret.dataset.type === "off" ) {
    Config.caret.off = true;
    // reveal the input box
  } else {
    Config.caret.off = false;
    // hide the input box
  }

  // apply new caret styles to all the letters
  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(oldcaret); // remove previous caret's styling from this letter
    util.removecaretfrom(word.activeletter);
    letter.classList.add(Config.caret.type); // add new caret's styling to this letter
    util.addcaretto(word.activeletter);
    Element.input.focus();
  });
}

Element.setting.caret.off.addEventListener      ("click", updatecaret);
Element.setting.caret.box.addEventListener      ("click", updatecaret);
Element.setting.caret.line.addEventListener     ("click", updatecaret);
Element.setting.caret.block.addEventListener    ("click", updatecaret);
Element.setting.caret.underline.addEventListener("click", updatecaret);

Element.sentence.addEventListener("click", (evt) => { Element.input.focus(); });

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