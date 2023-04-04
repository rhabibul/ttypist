import Config from "../include/config.js";
import * as Misc from "../utils/misc.js";

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

export function loadstoredconfig(storedconfig) {
	if ( typeof storedconfig !== 'object' ) return;
	
	Config.whitespace.off = storedconfig.whitespace.off
	Config.whitespace.type = storedconfig.whitespace.type
	Config.whitespace.code = storedconfig.whitespace.code
	Config.whitespace.character = storedconfig.whitespace.character
	
	Config.caret.off = storedconfig.caret.off;
	Config.caret.type = storedconfig.caret.type;
}