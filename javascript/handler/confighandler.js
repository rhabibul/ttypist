import Config from "../include/config.js";
import * as Misc from "../utils/misc.js";

export function on(value) {};
export function off(value) {};
export function setdefaultsconfig() {};

export function changeConfigCaret(type) {

  Config.caret.type = type;

  if ( type === "off" ) {
    Config.caret.off = true;
    // next step is to reveal the input box
  } else {
    Config.caret.off = false;
    // next step is to hide the input box
  }
}

export function loadstoredconfig(storedconfig) {
	if ( typeof storedconfig !== 'object' ) return;
	Config.caret.off = storedconfig.caret.off;
	Config.caret.type = storedconfig.caret.type;
}