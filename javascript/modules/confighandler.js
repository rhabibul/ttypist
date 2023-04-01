import Config from "./config.js";

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