import { config } from "./include/config.js";
import * as CaretController from "./controllers/CaretController.js";
import * as UIController from "./controllers/UIController.js"
import * as HTMLElement from "./include/elements.js";
import * as Misc from "./utils/misc.js";
import { time, keypress, mInput, user } from "./include/trackers.js";
import { text, word } from "./include/components.js";


let wasSpace = false;
mInput.keydownUnidentified = true;

function isspace(word) {
	return word.current_letter().classList.contains(config.text.whitespace);
}

export function handle_keydown(evt) {

	if ( !evt.isTrusted ) return;
	
	if ( evt.repeat ) console.error("key repeat (keydown 📌");
	// console.log("down:", evt.key);
	// console.log(evt);

}

export function handle_keyup(evt) {

	if ( !evt.isTrusted ) return;

	// console.log("up:", evt.key);
	// console.log(evt);

}

export const ignition = {
	init() {		
		HTMLElement.textInputField.addEventListener("keydown", handle_keydown);
		HTMLElement.textInputField.addEventListener("keyup", handle_keyup);
	},
	start() {
		text.load_words();
		word.load_letters(text.current_word());
		CaretController.addCaretTo(word.current_letter());
		HTMLElement.textInputField.value = "";
		HTMLElement.textInputField.focus();
	}
}

function main() {	
	ignition.init();
	ignition.start();
}
main();