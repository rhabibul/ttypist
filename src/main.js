import { config } from "./include/config.js";
import * as CaretController from "./controllers/CaretController.js";
import * as UIController from "./controllers/UIController.js"
import * as HTMLElement from "./include/elements.js";
import * as Misc from "./utils/misc.js";
import { time, keypress, mInput, user } from "./include/trackers.js";
import { text, word } from "./include/components.js";

export function handle_keydown(evt) {

	if ( !evt.isTrusted ) return;
	
	if ( evt.repeat ) console.error("key repeat (keydown 📌");

	if ( word.current_letter().classList.contains(config.text.whitespace) && evt.key === " " ) {
		
		CaretController.removeCaretFrom(word.current_letter());
		text.incrementWordIndex();
		word.load_letters(text.current_word());
		CaretController.addCaretTo(word.current_letter());

	} else if ( evt.key === word.current_letter().textContent ) {

		CaretController.removeCaretFrom(word.current_letter());
				
		if ( word.getLetterIndex() < word.length() - 1 ) { // move caret to next letter
			word.incrementLetterIndex();
			CaretController.addCaretTo(word.current_letter());
		} else if ( word.getLetterIndex() === word.length() - 1) { // last letter has been typed
			if ( text.getWordIndex() < text.length() - 1 ) { // load next word if it exists
				text.incrementWordIndex();
				word.load_letters(text.current_word());
				CaretController.addCaretTo(word.current_letter());
			}
			if ( text.getWordIndex() === text.length() - 1 ) {
				console.log("TEST COMPLETE");
				return;
			}
		}

	} else if ( evt.key === "Backspace" ) {

		if ( (text.getWordIndex() === 0) && (word.getLetterIndex() === 0) ) return;
		
		if ( evt.metaKey ) { // win/cmd + backspace
			CaretController.removeCaretFrom(word.current_letter());
			text.setWordIndexTo(0);
			word.load_letters(text.current_word());
			CaretController.addCaretTo(word.current_letter());
		} else if ( evt.altKey || evt.ctrlKey ) { // alt/ctrl + backspace

		} else { // backspace/delete

		}

	} else {
		console.log("ERROR");
	}
}

export function handle_keyup(evt) {

	if ( !evt.isTrusted ) return;

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