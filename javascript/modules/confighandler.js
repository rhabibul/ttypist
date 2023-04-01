import Config from "./config.js";
import * as Misc from "./misc.js";

export function on(value) {};
export function off(value) {};
export function setdefaultsconfig() {};

export function changeConfigWhitespace(type, code, character) {
	if ( type === "off" ) {
		Config.whitespace.off = true;
	} else {
		Config.whitespace.off = false;
	}
	Config.whitespace.type = type;
	Config.whitespace.code = code;
	Config.whitespace.character = character;
}

export function changeConfigCaret(type) {

  Config.caret.type = type;

  if ( type === "off" ) {
    Config.caret.off = true;
    // next reveal the input box
  } else {
    Config.caret.off = false;
    // next hide the input box
  }
}