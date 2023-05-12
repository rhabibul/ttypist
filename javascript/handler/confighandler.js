import Config from "../include/config.js";
import * as Misc from "../utils/misc.js";

export function on(value) {};
export function off(value) {};
export function setdefaultsconfig() {};

export function changeCaretTo(type) {
  Config.caret.type = type;
  if ( type === "off" ) {
    Config.caret.off = true;
    // next step is to reveal the input box
  } else {
    Config.caret.off = false;
    // next step is to hide the input box
  }
}

export function changePaceCaretTo(type) {
  Config.pacecaret.type = type;
  if ( type === "off" ) {
    Config.pacecaret.off = true;
  } else {
    Config.pacecaret.off = false;
  }
}

export function changeHighlightTo(type) {
  if ( type === "word" ) {
    Config.highlight.off = false;
    Config.highlight.mode.letter = false;
    Config.highlight.mode.word = true;
  } else if ( type === "letter" ) {
    Config.highlight.off = false;
    Config.highlight.mode.letter = true;
    Config.highlight.mode.word = false;
  } else {
    Config.highlight.off = true;
    Config.highlight.mode.letter = false;
    Config.highlight.mode.word = false;
  }
}