import Config from "../include/config.js"
import { Test, word, text } from "../main.js";

import * as Misc from "./misc.js";
import * as SettingUI from "../ui/SettingUI.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as SettingElement from "../HTMLElement/SettingElement.js"
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

// input field
TestAreaElement.text.addEventListener("click", () => { TestAreaElement.input.focus(); });

// reset button
SettingElement.reset.addEventListener("click", (evt) => { Test.restart(); });

// caret
SettingElement.caret.off.addEventListener("click", updatecaret);
SettingElement.caret.box.addEventListener("click", updatecaret);
SettingElement.caret.line.addEventListener("click", updatecaret);
SettingElement.caret.block.addEventListener("click", updatecaret);
SettingElement.caret.underline.addEventListener("click", updatecaret);

// pace caret
SettingElement.pacecaret.off.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.box.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.line.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.block.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.underline.addEventListener("click", updatepacecaret);

SettingElement.highlight.off.addEventListener("click", updatehighlight);
SettingElement.highlight.mode.letter.addEventListener("click", updatehighlight);
SettingElement.highlight.mode.word.addEventListener("click", updatehighlight);

SettingElement.fliptextcolor.off.addEventListener("click", updatefliptextcolor);
SettingElement.fliptextcolor.on.addEventListener("click", updatefliptextcolor);

function updatefliptextcolor(evt) {
  evt.preventDefault();
  if ( this.dataset.value === "off" && !Config.fliptextcolor ) return;
  if ( this.dataset.value === "on" && Config.fliptextcolor ) return;
  
  if ( this.dataset.value === "off" ) {
    Config.fliptextcolor = false;
  } else {
    Config.fliptextcolor = true;
  }
  SettingUI.changeUIFliptextcolorButtonTo(this.dataset.value);
  
  // make necessary changes in ui here..
}

function updatehighlight(evt) {
  evt.preventDefault();
  const highlight = this.dataset.value;
  if (highlight === "letter" && Config.highlight.mode.letter) return;
  if (highlight === "word" && Config.highlight.mode.word) return;
  if (highlight === "off" && Config.highlight.off) return;

  if ( highlight === "word" ) {
    Config.highlight.off = false;
    Config.highlight.mode.letter = false;
    Config.highlight.mode.word = true;
  } else if ( highlight === "letter" ) {
    Config.highlight.off = false;
    Config.highlight.mode.letter = true;
    Config.highlight.mode.word = false;
  } else {
    Config.highlight.off = true;
    Config.highlight.mode.letter = false;
    Config.highlight.mode.word = false;
  }
  SettingUI.changeUIHighlightButtonTo(highlight);  
}

function updatecaret(evt) {
  evt.preventDefault();
  if ( this.dataset.value === Config.caret.type ) return;
  const prev = Config.caret.type;
  SettingUI.changeUICaretButtonTo(this);

  if ( this.dataset.value === "off" ) {
    Config.caret.off = true;
  } else {
    Config.caret.off = false;
  }
  Config.caret.type = this.dataset.value;

  if ( Config.dynamicsettingchange ) {
    SettingUI.applyupdatedcaret(prev);
  }
}

function updatepacecaret(evt) {
  evt.preventDefault();
  if ( this.dataset.type === Config.pacecaret.type ) return;

  SettingUI.changeUICaretButtonTo(this);

  if ( this.dataset.value === "off" ) {
    Config.pacecaret.off = true;
  } else {
    Config.pacecaret.off = false;
  }
  Config.pacecaret.type = this.dataset.value;
}