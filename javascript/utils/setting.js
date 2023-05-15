import Config from "../include/config.js"
import { Test, word, text } from "../main.js";

import * as Const from "../include/constant.js";
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

// highlight
SettingElement.highlight.off.addEventListener("click", updatehighlight);
SettingElement.highlight.mode.letter.addEventListener("click", updatehighlight);
SettingElement.highlight.mode.word.addEventListener("click", updatehighlight);

// fliphighlightcolor
SettingElement.fliphighlightcolor.off.addEventListener("click", updatefliphighlight);
SettingElement.fliphighlightcolor.on.addEventListener("click", updatefliphighlight);

// backspace
SettingElement.backspace.off.addEventListener("click", updatebackspace);
SettingElement.backspace.on.addEventListener("click", updatebackspace);
SettingElement.backspace.modifier.alt.addEventListener("click", updatemodifier);
SettingElement.backspace.modifier.ctrl.addEventListener("click", updatemodifier);
SettingElement.backspace.modifier.meta.addEventListener("click", updatemodifier);

// tape
SettingElement.tape.off.addEventListener("click", updatetape);
SettingElement.tape.on.addEventListener("click", updatetape);

// difficulty
SettingElement.difficulty.normal.addEventListener("click", updatedifficulty);
SettingElement.difficulty.expert.addEventListener("click", updatedifficulty);
SettingElement.difficulty.master.addEventListener("click", updatedifficulty);

// confidence
SettingElement.confidence.low.addEventListener("click", updateconfidence);
SettingElement.confidence.high.addEventListener("click", updateconfidence);
SettingElement.confidence.max.addEventListener("click", updateconfidence);

// scroll
SettingElement.scroll.abrupt.addEventListener("click", updatescroll);
SettingElement.scroll.smooth.addEventListener("click", updatescroll);

// keyboard
SettingElement.keyboard.off.addEventListener("click", updatekeyboard);
SettingElement.keyboard.reaction.static.addEventListener("click", updatekeyboard);
SettingElement.keyboard.reaction.react.addEventListener("click", updatekeyboard);
SettingElement.keyboard.reaction.next.addEventListener("click", updatekeyboard);

// warning
SettingElement.warning.focus.addEventListener("click", updatewarning);
SettingElement.warning.capslock.addEventListener("click", updatewarning);
SettingElement.warning.numlock.addEventListener("click", updatewarning);

// inputvisibility
SettingElement.inputvisibility.hidden.addEventListener("click", updateinputvisibility);
SettingElement.inputvisibility.visible.addEventListener("click", updateinputvisibility);

// error
SettingElement.error.off.addEventListener("click", updateerror);
SettingElement.error.insert.addEventListener("click", updateerror);
SettingElement.error.replace.addEventListener("click", updateerror);

// forgive
SettingElement.forgive.off.addEventListener("click", updateforgive);
SettingElement.forgive.on.addEventListener("click", updateforgive);

// stoponerror
SettingElement.stoponerror.off.addEventListener("click", updatestoponerror);
SettingElement.stoponerror.letter.addEventListener("click", updatestoponerror);
SettingElement.stoponerror.word.addEventListener("click", updatestoponerror);

// whitespace
SettingElement.whitespace.off.addEventListener("click", updatewhitespace);
SettingElement.whitespace.bullet.addEventListener("click", updatewhitespace);
SettingElement.whitespace.space.addEventListener("click", updatewhitespace);
SettingElement.whitespace.bar.addEventListener("click", updatewhitespace);

// whitespace
function updatewhitespace(evt) {

  if ( this.dataset.value === "off" && Config.text.whitespace.off ) return;
  if ( this.dataset.value === "bullet" && Config.text.whitespace.type === "bullet" ) return;
  if ( this.dataset.value === "space" && Config.text.whitespace.type === "space" ) return;
  if ( this.dataset.value === "bar" && Config.text.whitespace.type === "bar" ) return;
  
  SettingUI.changeUIWhitespaceButtonTo(this.dataset.value);

  if ( this.dataset.value === "off" ) {
    Config.text.whitespace.off = true;
    Config.text.whitespace.type = "off";
    Config.text.whitespace.code = -1;
    Config.text.whitespace.character = "";
  } else if ( this.dataset.value === "bullet" ) {
    Config.text.whitespace.off = false;
    Config.text.whitespace.type = "bullet";
    Config.text.whitespace.code = this.dataset.code;
    Config.text.whitespace.character = this.dataset.character;
  } else if ( this.dataset.value === "bar" ) {
    Config.text.whitespace.off = false;
    Config.text.whitespace.type = "bar";
    Config.text.whitespace.code = this.dataset.code;
    Config.text.whitespace.character = this.dataset.character;
  } else {
    Config.text.whitespace.off = false;
    Config.text.whitespace.type = "space";
    Config.text.whitespace.code = this.dataset.code;
    Config.text.whitespace.character = this.dataset.character;
  }
}

// stoponerror 📌
function updatestoponerror(evt) {

  if ( this.dataset.value === "off" && Config.error.stop.off ) return;
  if ( this.dataset.value === "letter" && Config.error.stop.letter ) return;
  if ( this.dataset.value === "word" && Config.error.stop.word ) return;

}

// forgive 📌
function updateforgive(evt) {

  if ( this.dataset.value === "off" && !Config.error.forgive ) return;
  if ( this.dataset.value === "on" && Config.error.forgive ) return;
  
}

// error 📌
function updateerror(evt) {

  if ( this.dataset.value === "off" && Config.error.off ) return;
  if ( this.dataset.value === "insert" && Config.error.insert ) return;
  if ( this.dataset.value === "replace" && Config.error.replace ) return;

}

// inputvisibility
function updateinputvisibility(evt) {

  if ( this.dataset.value === "hidden" && Config.inputvisibility === "hidden" ) return;
  if ( this.dataset.value === "visible" && Config.inputvisibility === "visible" ) return;

  SettingUI.changeUIInputvisibilityButtonTo(this.dataset.value);

  if ( this.dataset.value === "visible" ) {
    Config.inputvisibility = "visible";
  } else {
    Config.inputvisibility = "hidden";
  }
}

// warning
function updatewarning(evt) {

  if ( this.dataset.value === "focus" ) {
    if ( this.id === "chosen" ) {
      Config.warning.focus = false;
    } else {
      Config.warning.focus = true;
    }
  } else if ( this.dataset.value === "capslock" ) {
    if ( this.id === "chosen" ) {
      Config.warning.capslock = false;
    } else {
      Config.warning.capslock = true;
    }
  } else {
    if ( this.id === "chosen" ) {
      Config.warning.numlock = false;
    } else {
      Config.warning.numlock = true;
    }
  }

  SettingUI.toggleUIWarningButton(this);
}

// keyboard
function updatekeyboard(evt) {

  if ( this.dataset.value === "off" && Config.keyboard.off ) return;
  if ( this.dataset.value === "static" && Config.keyboard.reaction === "static" ) return;
  if ( this.dataset.value === "react" && Config.keyboard.reaction === "react" ) return;
  if ( this.dataset.value === "next" && Config.keyboard.reaction === "next" ) return;

  SettingUI.changeUIKeyboardButtonTo(this.dataset.value);

  if ( this.dataset.value === "static" ) {
    Config.keyboard.off = false;
    Config.keyboard.reaction = "static";
  } else if ( this.dataset.value === "react" ) {
    Config.keyboard.off = false;
    Config.keyboard.reaction = "react";
  } else if ( this.dataset.value === "next" ) {
    Config.keyboard.off = false;
    Config.keyboard.reaction = "next";
  } else {
    Config.keyboard.off = true;
    Config.keyboard.reaction = "off";
  }
}

// scroll
function updatescroll(evt) {
  
  if ( this.dataset.value === "abrupt" && Config.scroll === "abrupt" ) return;
  if ( this.dataset.value === "smooth" && Config.scroll === "smooth" ) return;

  SettingUI.changeUIScrollButtonTo(this.dataset.value);

  if ( this.dataset.value === "smooth" ) {
    Config.scroll = "smooth";
  } else {
    Config.scroll = "abrupt";
  }
}

// confidence
function updateconfidence(evt) {
  
  if ( this.dataset.value === "low" && Config.confidence === Const.LOW ) return;
  if ( this.dataset.value === "high" && Config.confidence === Const.HIGH ) return;
  if ( this.dataset.value === "max" && Config.confidence === Const.MAX ) return;
  
  SettingUI.changeUIConfidenceButtonTo(this.dataset.value);

  if ( this.dataset.value === "high" ) {
    Config.confidence = Const.HIGH;
  } else if ( this.dataset.value === "max" ) {
    Config.confidence = Const.MAX;
  } else {
    Config.confidence = Const.LOW;
  }
}

// difficulty
function updatedifficulty(evt) {

  if ( this.dataset.value === "normal" && Config.difficulty === Const.NORMAL ) return;
  if ( this.dataset.value === "expert" && Config.difficulty === Const.EXPERT ) return;
  if ( this.dataset.value === "master" && Config.difficulty === Const.MASTER ) return;

  SettingUI.changeUIDifficultyButtonTo(this.dataset.value);

  if ( this.dataset.value === "expert" ) {
    Config.difficulty = Const.EXPERT;
  } else if ( this.dataset.value === "master" ) {
    Config.difficulty = Const.MASTER;
  } else {
    Config.difficulty = Const.NORMAL;
  }
}

// tape
function updatetape(evt) {
  
  if ( this.dataset.value === "off" && !Config.tape ) return;
  if ( this.dataset.value === "on" && Config.tape ) return;

  SettingUI.changeUITapeButtonTo(this.dataset.value);
  
  if ( this.dataset.value === "on" ) {
    Config.tape = true;
  } else {
    Config.tape = false;
  }
}

// modifier
function updatemodifier(evt) {

  if ( this.dataset.value === "alt" ) {
    if ( this.id === "chosen" ) {
      Config.backspace.modifier.alt = false;
    } else {
      Config.backspace.modifier.alt = true;
    }
  } else if ( this.dataset.value === "ctrl" ) {
    if ( this.id === "chosen" ) {
      Config.backspace.modifier.ctrl = false;
    } else {
      Config.backspace.modifier.ctrl = true;
    }
  } else {
    if ( this.id === "chosen" ) {
      Config.backspace.modifier.meta = false;
    } else {
      Config.backspace.modifier.meta = true;
    }
  }

  SettingUI.toggleUIModifierButton(this);
}

// backspace
function updatebackspace(evt) {
  evt.preventDefault()

  if ( this.dataset.value === "off" && Config.backspace.off ) return;
  if ( this.dataset.value === "on" && !Config.backspace.off ) return;

  SettingUI.changeUIBackspaceButtonTo(this.dataset.value);
  
  if ( this.dataset.value === "off" ) {
    Config.backspace.off = true;
  } else {
    Config.backspace.off = false;
  }
}

// fliphighlightcolor
function updatefliphighlight(evt) {
  if ( this.dataset.value === "off" && !Config.fliphighlightcolor ) return;
  if ( this.dataset.value === "on" && Config.fliphighlightcolor ) return;

  SettingUI.changeUIFliphighlightcolorButtonTo(this.dataset.value);
  
  if ( this.dataset.value === "off" ) {
    Config.fliphighlightcolor = false;
  } else {
    Config.fliphighlightcolor = true;
  }
}

// highlight
function updatehighlight(evt) {
  const highlight = this.dataset.value;
  if (highlight === "letter" && Config.highlight.mode.letter) return;
  if (highlight === "word" && Config.highlight.mode.word) return;
  if (highlight === "off" && Config.highlight.off) return;

  SettingUI.changeUIHighlightButtonTo(highlight);

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
}

// caret
function updatecaret(evt) {
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

// pacecaret
function updatepacecaret(evt) {
  if ( this.dataset.type === Config.pacecaret.type ) return;

  SettingUI.changeUICaretButtonTo(this);

  if ( this.dataset.value === "off" ) {
    Config.pacecaret.off = true;
  } else {
    Config.pacecaret.off = false;
  }
  Config.pacecaret.type = this.dataset.value;
}