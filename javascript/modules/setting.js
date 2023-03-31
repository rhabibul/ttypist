import { Config, ConfigHandler, PracticeConfig } from "./config.js"
import * as Element from "./element.js";
import * as Const from "./constant.js";
import * as Misc from "./misc.js";
import { word, sentence, util } from "./logic.js";

function updatewhitespace(evt) {

  evt.preventDefault();
  
  if ( this.id == "chosen" ) return;

  if ( this.dataset.type === "off" ) {
    Element.setting.whitespace.off.id = "turnItOff";
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

  // do nothing if already selected caret is click again
  if (this.dataset.type === Config.caret.type) return;

  // save previous caret type which needs to be removed from all letters
  const previous_caret = Config.caret.type;

  // caret which has been selected by user
  const thiscaret = this;

  const active_color = Misc.computedstyles.getPropertyValue("--active-color");
  const active_bgcolor = Misc.computedstyles.getPropertyValue("--active-backgroundcolor");
  
  const inactive_color = Misc.computedstyles.getPropertyValue("--inactive-color");
  const inactive_bgcolor = Misc.computedstyles.getPropertyValue("--inactive-backgroundcolor");

  const off_color = Misc.computedstyles.getPropertyValue("--off-color");
  const off_color_faded = Misc.computedstyles.getPropertyValue("--off-color-faded");
  const off_bgcolor = Misc.computedstyles.getPropertyValue("--off-backgroundcolor");

  function colorshapeof(caret, caretIsActive) {

    const shape = document.querySelector(`caret ${caret.dataset.type} shape`);

    if ( caret.dataset.type === "line" || caret.dataset.type === "block" ) {
      // 1. inside caret shape container both caret type (line, block), the shape 
      //    is given only width and height property no border is used, so there's
      //    no empty space inside the caret shape
      // 2. therefore only background color is enough for line caret which has
      //    dimension 1x20 pixels and block caret  which has dimension 10x20 pixel
      if ( caretIsActive ) {
        shape.style.backgroundColor = active_color;
      } else {
        shape.style.backgroundColor = inactive_color;
      }
    } else if ( caret.dataset.type === "underline" ) {
      // 1. give color to border bottom of underline caret
      // 2. fill the empty space inside underline caret with container's background color
      //    (note that underline caret is also a box but only bottom border is enabled,
      //    rest border is turned off, so here also we need take care of space inside
      //    the box and give same background color as the caret's container has)
      if ( caretIsActive ) {
        shape.style.borderBottomColor = active_color;
        shape.style.backgroundColor = active_bgcolor;
      } else {
        shape.style.backgroundColor = inactive_bgcolor;
        shape.style.borderBottomColor = inactive_color;
      }
    } else if ( caret.dataset.type === "box" ) {
      // 1. give color to all four borders of box caret
      // 2. fill the empty space inside of four borders of box caret with 
      //    caret container's background color
      if ( caretIsActive ) {
        shape.style.borderColor = active_color; 
        shape.style.backgroundColor = active_bgcolor; 
      } else {
        shape.style.borderColor = inactive_color;
        shape.style.backgroundColor = inactive_bgcolor;
      }
    } else {
      const i = document.querySelector(`off i.fa-ban`);
      if ( caretIsActive ) {
        i.style.color = off_color;
        caret.style.backgroundColor = off_bgcolor;
      } else {
        i.style.color = off_color_faded;
        caret.style.backgroundColor = inactive_bgcolor;
      }
    }
  }

  // active caret container
  if ( thiscaret.dataset.type !== "off" ) {
    // set active background color for the selected caret container
    thiscaret.style.backgroundColor = active_bgcolor;
  }
  colorshapeof(thiscaret, true); // set active color for the selected caret shape
  
  // set inactive backgroundcolor & inactive color for all carets except the selected one
  for ( const caret of Object.values(Element.setting.caret) ) {
    if ( thiscaret !== caret ) {
      // set inactive background color to all caret containers except the selected one
      caret.style.backgroundColor = inactive_bgcolor;
      // set inactive color to caret shapes except the selected one
      colorshapeof(caret, false);
    }
  }

  // update in config caret type
  Config.caret.type = thiscaret.dataset.type;

  // update in config caret on/off status
  if ( thiscaret.dataset.type === "off" ) {
    Config.caret.off = true;
    // next reveal the input box
  } else {
    Config.caret.off = false;
    // next hide the input box
  }

  // apply new caret styles to all the letters
  Array.from(document.getElementsByTagName("letter")).forEach(function (letter) {
    letter.classList.remove(previous_caret); // remove previous caret's styling from this letter
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