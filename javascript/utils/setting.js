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

// confidence
function updateconfidence(evt) {
  evt.preventDefault();
  
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
  evt.preventDefault();

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
  evt.preventDefault();
  
  if ( this.dataset.value === "off" && !Config.tape ) return;
  if ( this.dataset.value === "on" && Config.tape ) return;

  SettingUI.changeUITapeButtonTo(this.dataset.value);
  
  if ( this.dataset.value === "on" ) {
    Config.tape = true;
  } else {
    Config.tape = false;
  }
}

// modifier keys (alt | modier | meta)
function updatemodifier(evt) {
  evt.preventDefault();

  SettingUI.toggleUIModifierButtonTo(this.dataset.value);

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
}

// backspace key (off | on)
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
  evt.preventDefault();
  if ( this.dataset.value === "off" && !Config.fliphighlightcolor ) return;
  if ( this.dataset.value === "on" && Config.fliphighlightcolor ) return;

  SettingUI.changeUIFliphighlightcolorButtonTo(this.dataset.value);
  
  if ( this.dataset.value === "off" ) {
    Config.fliphighlightcolor = false;
  } else {
    Config.fliphighlightcolor = true;
  }
}

// highlight (off | letter | word)
function updatehighlight(evt) {
  evt.preventDefault();
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

// caret (off | line | underline | box | block)
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

// pacecaret (off | line | underline | box | block)
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