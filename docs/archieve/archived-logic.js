import { config } from "./include/config.js";
import * as CaretController from "./controllers/CaretController.js";
import * as UIController from "./controllers/UIController.js"
import * as HTMLElement from "./include/elements.js";
import * as Misc from "./utils/misc.js";
import { time, keypress, mInput, user } from "./include/trackers.js";

import Text from "./include/text.js";
import Word from "./include/word.js";

export const text = new Text();
export const word = new Word();

let wasSpace = false;
mInput.keydownUnidentified = true;

function isspace() {
	return word.activeletter.classList.contains(config.text.whitespace);
}

export function registerKeydownEvent(evt) {

	if ( !evt.isTrusted ) return;

	if ( !user.istyping ) {
		time.begin = performance.now();
		user.istyping = true; 
	}

	keypress.reset();
  keypress.char = evt.key;
	
	// space hit at correct time
	if ( isspace() && (keypress.char === " ") ) {

		word.activeletter.classList.add("correct");
		
		if ( !config.text.highlight.flip ) {
			word.activeletter.classList.remove("ws-active");
		} else {
			word.activeletter.classList.add("ws-active");
		}
		
		wasSpace = true;
		
		CaretController.removeCaretFrom(word.activeletter);

		if ( config.text.underline && (text.activewordindex > 0) ) {
			UIController.removeTextUnderlineFrom(text.prevword);
			text.incrementwordindex();
		}

		word.loadword(text.nextword, { nextword: true });
		
		if ( config.text.underline ) {
			UIController.addTextUnderlineTo(word.me());
		}
		CaretController.addCaretTo(word.activeletter);
		
	} else if ( keypress.char === word.activeletter.textContent ) { // correct char is typed

		CaretController.removeCaretFrom(word.activeletter);
		word.activeletter.classList.add("correct");

		if ( config.text.underline ) {
			word.activeletter.style["text-decoration-color"] = "var(--text-secondary-color)";
		}

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretController.addCaretTo(word.nextletter);
		} else {

			// load next word
			if ( word.activeletterindex === word.lastletterindex ) {

				if ( text.activewordindex < text.lastwordindex ) {
					word.loadword(text.nextword, { nextword: true });
					CaretController.addCaretTo(word.activeletter);
				}	

				if ( !config.text.highlight.flip ) { 
					word.activeletter.classList.add("ws-active");
				}

				// test complete
				if ( text.activewordindex === text.lastwordindex ) {
					time.end = window.performance.now();
					user.hastypedallwords = true;
					return;
				}
			}	
		}
	} else if ( keypress.char === "Backspace" ) { // deletion

		// caret is on first letter of first word, so no deletion
		if ( word.activeletterindex === 0 && text.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd/win + backspace

			CaretController.removeCaretFrom(word.activeletter);
			text.resetwordindex();
			word.loadword(text.activeword, { activeword: true });
			CaretController.addCaretTo(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			for ( const letter of text.activeword.children ) {
				letter.classList.remove("correct");
				letter.style["text-decoration-color"] = "var(--text-primary-color)";
			}

			if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				UIController.removeTextUnderlineFrom(text.activeword);
				
				if ( Misc.isspace(text.word_at(text.activewordindex - 1).children[0])) {
					text.word_at(text.activewordindex - 1).children[0].classList.remove("correct");
					text.decrementwordindex();
				}

				CaretController.removeCaretFrom(word.activeletter);
				word.activeletter.classList.remove("correct");
				word.loadword(text.prevword, { prevword: true });
				UIController.addTextUnderlineTo(text.activeword);
				CaretController.addCaretTo(word.activeletter);
				
				for ( const letter of text.activeword.children ) {
					letter.classList.remove("correct");
					letter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretController.removeCaretFrom(word.activeletter);
			word.resetletterindex();
			CaretController.addCaretTo(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {

				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.removeCaretFrom(word.activeletter);
				CaretController.addCaretTo(word.prevletter);

				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				
			} else if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				CaretController.removeCaretFrom(word.activeletter);
				UIController.removeTextUnderlineFrom(text.activeword);
				word.loadword(text.prevword, { prevword: true });
				
				if ( config.text.underline && (text.activewordindex > 0) && Misc.isspace(word.activeletter)) {
					text.decrementwordindex();
					UIController.addTextUnderlineTo(text.activeword);
					text.incrementwordindex();
				}
				word.activeletter.classList.remove("correct");
				if ( config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.addCaretTo(word.activeletter);
			}
		}
	} else { // error handling
		
	}
}

export function registerKeyupEvent(evt) {

	if ( !evt.isTrusted ) return;

	if ( wasSpace ) {
		HTMLElement.textInputField.value = "";
		wasSpace = false;
	}

	if ( user.hastypedallwords ) {
		HTMLElement.textInputField.blur();
		CaretController.removeCaretFrom(word.activeletter);
		console.log(((Misc.totalLetterCount() / 5) / (time.duration / 1000)) * 60);
		ignition.restart();
	}
}

export const ignition = {
	init() {		
		HTMLElement.textInputField.addEventListener("keydown", registerKeydownEvent);
		HTMLElement.textInputField.addEventListener("keyup", registerKeyupEvent);
	},
	restart() {
		user.istyping = false;
		user.hastypedallwords = false;
		keypress.reset();
		time.reset();
		mInput.reset();
		text.loadwords(Misc.createWordElementsFrom(Misc.getRandomWords()));
		word.loadword(text.activeword, { activeword: true });
		CaretController.addCaretTo(word.activeletter);
		HTMLElement.textInputField.value = "";
		HTMLElement.textInputField.focus();
	}
}

function main() {	
	ignition.init();
	ignition.restart();
}
main();