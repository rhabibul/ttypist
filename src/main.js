import { config } from "./include/config.js";
import * as CaretController from "./controllers/CaretController.js";
import * as UIController from "./controllers/UIController.js"
import * as HTMLElement from "./include/elements.js";
import * as Misc from "./utils/misc.js";
import { text, word } from "./include/components.js";
import { isPrintableCharacter } from "./include/constants.js";

export function handle_keydown(evt) {

	if ( !evt.isTrusted ) return;
	
	if ( evt.repeat ) console.log("🎹repeat:", evt.key);

	if ( word.current_letter().classList.contains(config.text.whitespace) && evt.key === " " ) {
		CaretController.removeCaretFrom(word.current_letter());
		text.incrementWordIndex();
		word.load_letters(text.current_word());
		CaretController.addCaretTo(word.current_letter());
	} else if ( evt.key === word.current_letter(true) ) {
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
				ignition.start();
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
			if ( (word.getLetterIndex() > 0) && (word.getLetterIndex() < word.length()) ) { // caret is between two letter of the word
				CaretController.removeCaretFrom(word.current_letter());
				word.setLetterIndexTo(0);
				CaretController.addCaretTo(word.current_letter());
			} else {
				if ( word.getLetterIndex() === 0 ) {
					if ( text.current_word().classList.contains("whitespace") ) { // caret is after last letter of the word (i.e, on whitespace letter)
						CaretController.removeCaretFrom(word.current_letter());
						text.decrementWordIndex();
						word.load_letters(text.current_word());
						CaretController.addCaretTo(word.current_letter());
					} else { // caret is at first letter of the word (not whitespace word though)
						CaretController.removeCaretFrom(word.current_letter());
						text.setWordIndexTo(text.getWordIndex() - 2);
						word.load_letters(text.current_word());
						CaretController.addCaretTo(word.current_letter());
					}
				}
			}			
		} else { // backspace/delete

			if ( word.getLetterIndex() > 0 ) { // still we can delete more letter in this word

// let list = [];
// list.push(letter);
// list.push(error_letter);
// let letter = list.pop();
// if ( letter.contains("extra") ) letter.remove();

				// 🫵 i'm here
				if ( word.previous_letter().classList.contains("extra") ) {
					
				}
				
				CaretController.removeCaretFrom(word.current_letter());
				word.decrementLetterIndex();
				CaretController.addCaretTo(word.current_letter());
			} else if ( (word.getLetterIndex() === 0) && (text.getWordIndex() > 0) ) { // no letter(s) left in this word to delete
				CaretController.removeCaretFrom(word.current_letter());
				word.load_letters(text.previous_word(), true);
				text.decrementWordIndex();
				CaretController.addCaretTo(word.current_letter());
			}
		}
	} else {
		if ( isPrintableCharacter(evt.key) ) {
			let error_letter = Misc.createErrorLetterElement(evt.key);
			word.current_letter().insertAdjacentElement("beforebegin", error_letter);
		}
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
		HTMLElement.textInputField.focus();
	}
}

function main() {	
	ignition.init();
	ignition.start();
}
main();