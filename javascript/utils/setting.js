import Config from "../include/config.js"
import { word } from "../testlogic/logic.js";

import * as Misc from "./misc.js";
import * as SettingUI from "../ui/SettingUI.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as SettingElement from "../HTMLElement/SettingElement.js"
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

// input field
TestAreaElement.phrase.addEventListener("click", () => { TestAreaElement.input.focus(); });

// caret
SettingElement.caret.off.addEventListener("click", updatecaret);
SettingElement.caret.box.addEventListener("click", updatecaret);
SettingElement.caret.line.addEventListener("click", updatecaret);
SettingElement.caret.block.addEventListener("click", updatecaret);
SettingElement.caret.underline.addEventListener("click", updatecaret);

// whitespace
SettingElement.whitespace.off.addEventListener('click',   updatewhitespace);
SettingElement.whitespace.dot.addEventListener('click',   updatewhitespace);
SettingElement.whitespace.space.addEventListener('click', updatewhitespace);

// apply new caret styles to all the letters
function addcaretstyle_toletters(previouscaret, currentcaret) {
  Array.from(Misc.HTMLCollection("letter", { tagname: true })).forEach(function (letter) {
    letter.classList.remove(previouscaret); // remove previous caret's styling from this letter
    CaretHandler.removecaretfrom(word.activeletter);
    letter.classList.add(currentcaret); // add new caret's styling to this letter
    CaretHandler.addcaretto(word.activeletter);
    TestAreaElement.input.focus();
  });
}

// replace whitespace character
function addwhitespace_toletters(type, character) {
  Misc.NodeList("letter.whitespace").forEach((whitespaceletter) => {
    if ( type === "space" ) {
      whitespaceletter.innerHTML = `${character}`;
    } else if ( type === "dot" ) {
      whitespaceletter.innerHTML = `<span id="wdot">${character}</span>`;
    } else {
      whitespaceletter.innerHTML = "";
    }
  });
}

function updatewhitespace(evt) {
  evt.preventDefault();
  if ( this.dataset.type === Config.whitespace.type ) return;
  TestAreaElement.input.blur(); // disable input field

  const type = this.dataset.type;
  const code = Number(this.dataset.code);
  const character = this.dataset.character;

  SettingUI.changeUIWhitespace(type);
  ConfigHandler.changeConfigWhitespace(type, code, character);

  addwhitespace_toletters(type, character);

  TestAreaElement.input.focus(); // enable input field

  Misc.storeConfigInLocalStorage(); // store config in local storage
}

function updatecaret(evt) {
  evt.preventDefault();
  if ( this.dataset.type === Config.caret.type ) return;
  TestAreaElement.input.blur(); // disable input field

  const previouscaret = Config.caret.type;
  
  SettingUI.changeUICaret(this);
  ConfigHandler.changeConfigCaret(this.dataset.type);

  addcaretstyle_toletters(previouscaret, Config.caret.type);

  TestAreaElement.input.focus(); // enable input field

  Misc.storeConfigInLocalStorage(); // store config in local storage
}