import Config from "../../include/config.js"
import { Test } from "../main.js";

import * as SettingUI from "../ui/setting-buttons-ui.js";
import * as TestUI from "../ui/testarea-ui.js";
import * as SettingElement from "../elements/settings-elements.js"
import * as TestAreaElement from "../elements/testarea-elements.js";

// input field
TestAreaElement.text.addEventListener("click", () => { TestAreaElement.input.focus(); });

// reset button
SettingElement.reset.addEventListener("click", () => { Test.restart(); });

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
SettingElement.flip.off.addEventListener("click", updatefliphighlightcolor);
SettingElement.flip.on.addEventListener("click", updatefliphighlightcolor);

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
SettingElement.difficulty.off.addEventListener("click", updatedifficulty);
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
SettingElement.warning.capslock.addEventListener("click", updatewarning);
SettingElement.warning.numlock.addEventListener("click", updatewarning);
SettingElement.warning.scrolllock.addEventListener("click", updatewarning);

// inputarea
SettingElement.inputarea.hidden.addEventListener("click", updateinputarea);
SettingElement.inputarea.visible.addEventListener("click", updateinputarea);

// error
SettingElement.error.off.addEventListener("click", updateerror);
SettingElement.error.insert.addEventListener("click", updateerror);
SettingElement.error.replace.addEventListener("click", updateerror);

// forgive
SettingElement.forgive.off.addEventListener("click", updateforgive);
SettingElement.forgive.on.addEventListener("click", updateforgive);

// stop
SettingElement.stop.off.addEventListener("click", updatestop);
SettingElement.stop.letter.addEventListener("click", updatestop);
SettingElement.stop.word.addEventListener("click", updatestop);

// whitespace
SettingElement.whitespace.off.addEventListener("click", updatewhitespace);
SettingElement.whitespace.bullet.addEventListener("click", updatewhitespace);
SettingElement.whitespace.space.addEventListener("click", updatewhitespace);
SettingElement.whitespace.bar.addEventListener("click", updatewhitespace);

// underline
SettingElement.underline.off.addEventListener("click", updateunderline);
SettingElement.underline.on.addEventListener("click", updateunderline);

// endwithspace
SettingElement.endwithspace.off.addEventListener("click", updateendwithspace);
SettingElement.endwithspace.on.addEventListener("click", updateendwithspace);

// oppositeshift
SettingElement.oppositeshift.off.addEventListener("click", updateoppositeshift);
SettingElement.oppositeshift.on.addEventListener("click", updateoppositeshift);

// live
SettingElement.live.speed.addEventListener("click", updatelive);
SettingElement.live.accuracy.addEventListener("click", updatelive);
SettingElement.live.burst.addEventListener("click", updatelive);
SettingElement.live.timer.addEventListener("click", updatelive);

// focus
SettingElement.focus.off.addEventListener("click", updatefocus);
SettingElement.focus.on.addEventListener("click", updatefocus);

// focus
function updatefocus(evt) {
  if ( !evt.isTrusted ) return;
  
  if ( this.dataset.value === "off" ) {
    Config.warning.focus = false;
  } else {
    Config.warning.focus = true;
  }

  SettingUI.changeUIFocusButtonTo(this.dataset.value);
}

// live
function updatelive(evt) {
  
  if ( !evt.isTrusted ) return;
  
  if ( this.dataset.value === "speed" ) {
    if ( this.id === "chosen" ) {
      Config.live.speed = false;
    } else {
      Config.live.speed = true;
    }
  } else if ( this.dataset.value === "accuracy" ) {
    if ( this.id === "chosen" ) {
      Config.live.accuracy = false;
    } else {
      Config.live.accuracy = true;
    }
  } else if ( this.dataset.value === "burst" ) {
    if ( this.id === "chosen" ) {
      Config.live.burst = false;
    } else {
      Config.live.burst = true;
    }
  } else {
    if ( this.id === "chosen" ) {
      Config.live.timer = false;
    } else {
      Config.live.timer = true;
    }
  }

  SettingUI.toggleUILiveButton(this);
}

// oppostieshift
function updateoppositeshift(evt) {
  
  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && !Config.oppositeshift ) return;
  if ( this.dataset.value === "on" && Config.oppositeshift ) return;

  SettingUI.changeUIOppositeshiftButtonTo(this.dataset.value);

  if ( this.dataset.value === "on" ) {
    Config.oppositeshift = true;
  } else {
    Config.oppositeshift = false;
  }
}

// endwithspace
function updateendwithspace(evt) {
  
  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && !Config.endwithspace ) return;
  if ( this.dataset.value === "on" && Config.endwithspace ) return;

  SettingUI.changeUIEndwithspaceButtonTo(this.dataset.value);

  if ( this.dataset.value === "on" ) {
    Config.endwithspace = true;
  } else {
    Config.endwithspace = false;
  }
}

// underline
function updateunderline(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && !Config.underline ) return;
  if ( this.dataset.value === "on" && Config.underline ) return;

  SettingUI.changeUIUnderlineButtonTo(this.dataset.value);

  if ( this.dataset.value === "on" ) {
    Config.underline = true;
  } else {
    Config.underline = false;
  }
}

// whitespace
function updatewhitespace(evt) {

  if ( !evt.isTrusted ) return;
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

// difficulty
function updatedifficulty(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && Config.difficulty.off ) return;
  if ( this.dataset.value === "expert" && Config.difficulty.expert ) return;
  if ( this.dataset.value === "master" && Config.difficulty.master ) return;

  SettingUI.changeUIDifficultyButtonTo(this.dataset.value);

  if ( this.dataset.value === "expert" ) {
    Config.difficulty.off = false;
    Config.difficulty.expert = true;
    Config.difficulty.master = false;
  } else if ( this.dataset.value === "master" ) {
    Config.difficulty.off = false;
    Config.difficulty.expert = false;
    Config.difficulty.master = true;
  } else {
    Config.difficulty.off = true;
    Config.difficulty.expert = false;
    Config.difficulty.master = false;

    Config.error.insert = false;
    Config.error.forgive = false;
  }
}

// stop on error 📌
function updatestop(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && Config.error.stop.off ) return;
  if ( this.dataset.value === "letter" && Config.error.stop.letter ) return;
  if ( this.dataset.value === "word" && Config.error.stop.word ) return;

  if ( this.dataset.value === "letter" ) {

    Config.error.stop.off = false;
    Config.error.stop.letter = true;
    Config.error.stop.word = false;

    Config.error.insert = false;
    Config.error.forgive = false;
    Config.error.replace = false;
    
  } else if ( this.dataset.value === "word" ) {
    
    Config.error.stop.off = false;
    Config.error.stop.letter = false;
    Config.error.stop.word = true;

    Config.backspace.off = false;
    Config.error.forgive = false;

  } else {

    Config.error.stop.off = true; 
    Config.error.stop.letter = false; 
    Config.error.stop.word = false; 
  }
}

// forgive 📌
function updateforgive(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && !Config.error.forgive ) return;
  if ( this.dataset.value === "on" && Config.error.forgive ) return;

  if ( this.dataset.value === "on" ) {
    Config.error.forgive = true;
    Config.error.insert = true;
    Config.error.replace = false;
  } else {
    Config.error.forgive = false;
  }
}

// error 📌
function updateerror(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && Config.error.off ) return;
  if ( this.dataset.value === "insert" && Config.error.insert ) return;
  if ( this.dataset.value === "replace" && Config.error.replace ) return;

  if ( this.dataset.value === "replace" ) {

    Config.error.replace = true;
    Config.error.off = false;
    Config.error.forgive = false;
    Config.error.insert = false;
    
  } else if ( this.dataset.value === "insert" ) {

    // replace is not possible while inserting errors, but forgive error is possible
    // so we will turn off replace, users can turn on forgive
    Config.error.off = false;
    Config.error.insert = true;
    Config.error.replace = false;

    // stop on letter is not possible while inserting errors but stop on word
    // is possible, initially we will turn off the stop on errors buttons, if
    // user wants then they can turn on stop on word while keeping error
    // insertion turned
    Config.error.stop.off = true;
    Config.error.stop.letter = false;
    Config.error.stop.word = false;
  } else { // off button
    Config.error.off = true;
    Config.error.insert = false;
    Config.error.replace = false;
    Config.error.forgive = false;
    Config.error.stop.off = true;
    Config.error.stop.letter = false;
    Config.error.stop.word = false;
  }
}

// inputarea
function updateinputarea(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "hidden" && Config.inputarea === "hidden" ) return;
  if ( this.dataset.value === "visible" && Config.inputarea === "visible" ) return;

  SettingUI.changeUIinputareaButtonTo(this.dataset.value);

  if ( this.dataset.value === "visible" ) {
    Config.inputarea = "visible";
  } else {
    Config.inputarea = "hidden";
  }
}

// warning
function updatewarning(evt) {

  if ( !evt.isTrusted ) return;

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
  } else if ( this.dataset.value === "numlock" ) {
    if ( this.id === "chosen" ) {
      Config.warning.numlock = false;
    } else {
      Config.warning.numlock = true;
    }
  } else {
    if ( this.id === "chosen" ) {
      Config.warning.scrolllock = false;
    } else {
      Config.warning.scrolllock = true;
    }
  }

  SettingUI.toggleUIWarningButton(this);
}

// keyboard
function updatekeyboard(evt) {

  if ( !evt.isTrusted ) return;

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
  
  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "abrupt" && Config.abrupt === "abrupt" ) return;
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
  
  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "low" && Config.confidence.low ) return;
  if ( this.dataset.value === "high" && Config.confidence.high ) return;
  if ( this.dataset.value === "max" && Config.confidence.max ) return;
  
  SettingUI.changeUIConfidenceButtonTo(this.dataset.value);

  if ( this.dataset.value === "high" ) {
    Config.confidence.low = false;
    Config.confidence.high = true;
    Config.confidence.max = false;
  } else if ( this.dataset.value === "max" ) {
    Config.confidence.low = false;
    Config.confidence.high = false;
    Config.confidence.max = true;
  } else {
    Config.confidence.low = true;
    Config.confidence.high = false;
    Config.confidence.max = false;
  }
}

// tape
function updatetape(evt) {
  
  if ( !evt.isTrusted ) return;
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

  if ( !evt.isTrusted ) return;
  
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

  if ( !evt.isTrusted ) return;
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
function updatefliphighlightcolor(evt) {

  if ( !evt.isTrusted ) return;
  if ( this.dataset.value === "off" && !Config.fliphighlightcolor ) return;
  if ( this.dataset.value === "on" && Config.fliphighlightcolor ) return;
  
  if ( this.dataset.value === "off" ) {
    Config.fliphighlightcolor = false;
  } else {
    Config.fliphighlightcolor = true;
  }
  SettingUI.changeUIFliphighlightcolorButtonTo(this.dataset.value);
  TestUI.fliphighlightcolor();
}

// highlight
function updatehighlight(evt) {

  if ( !evt.isTrusted ) return;
  if (this.dataset.value === "letter" && Config.highlight.mode.letter) return;
  if (this.dataset.value === "word" && Config.highlight.mode.word) return;
  if (this.dataset.value === "off" && Config.highlight.off) return;

  SettingUI.changeUIHighlightButtonTo(this.dataset.value);

  if ( this.dataset.value === "word" ) {
    Config.highlight.off = false;
    Config.highlight.mode.letter = false;
    Config.highlight.mode.word = true;
  } else if ( this.dataset.value === "letter" ) {
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

  if ( !evt.isTrusted ) return;
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

  if ( !evt.isTrusted ) return;
  if ( this.dataset.type === Config.pacecaret.type ) return;

  SettingUI.changeUICaretButtonTo(this);

  if ( this.dataset.value === "off" ) {
    Config.pacecaret.off = true;
  } else {
    Config.pacecaret.off = false;
  }
  Config.pacecaret.type = this.dataset.value;
}