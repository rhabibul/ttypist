import Config from "../include/config.js"
import { word, sentence, util } from "../testlogic/logic.js";

import * as Const from "../include/constant.js";
import * as Misc from "./misc.js";
import * as SettingUI from "../ui/SettingUI.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as SettingElement from "../HTMLElement/SettingElement.js"
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

// mainly used for open virtual keyboard on mobile devices
TestAreaElement.sentence.addEventListener("click", (evt) => {
  TestAreaElement.input.focus();
});

SettingElement.caret.off.addEventListener("click", updatecaret);
SettingElement.caret.box.addEventListener("click", updatecaret);
SettingElement.caret.line.addEventListener("click", updatecaret);
SettingElement.caret.block.addEventListener("click", updatecaret);
SettingElement.caret.underline.addEventListener("click", updatecaret);

SettingElement.whitespace.off.addEventListener('click',   updatewhitespace);
SettingElement.whitespace.dot.addEventListener('click',   updatewhitespace);
SettingElement.whitespace.space.addEventListener('click', updatewhitespace);

function updatewhitespace(evt) {

  evt.preventDefault();
  
  if ( this.id == "chosen" ) return;

  TestAreaElement.input.blur(); // disable input field

  const type = this.dataset.type;
  const code = Number(this.dataset.code);
  const character = this.dataset.character;

  SettingUI.changeUIWhitespace(type);
  ConfigHandler.changeConfigWhitespace(type, code, character);

  // replace whitespace character on dom
  Misc.NodeList("letter.whitespace").forEach((whitespaceletter) => {
    if ( type === "space" ) {
      whitespaceletter.innerHTML = `${character}`;
    } else if ( type === "dot" ) {
      whitespaceletter.innerHTML = `<span id="wdot">${character}</span>`;
    } else {
      whitespaceletter.innerHTML = "";
    }
  });

  TestAreaElement.input.focus(); // enable input field
}

function updatecaret(evt) {

  evt.preventDefault();

  if (this.dataset.type === Config.caret.type) return;

  const previouscaret = Config.caret.type;

  SettingUI.changeUICaret(this);
  ConfigHandler.changeConfigCaret(this.dataset.type);

  // apply new caret styles to all the letters
  Array.from(Misc.HTMLCollection("letter", { tagname: true })).forEach(function (letter) {
    letter.classList.remove(previouscaret); // remove previous caret's styling from this letter
    util.removecaretfrom(word.activeletter);
    letter.classList.add(Config.caret.type); // add new caret's styling to this letter
    util.addcaretto(word.activeletter);
    TestAreaElement.input.focus();
  });
}