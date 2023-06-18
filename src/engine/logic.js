import Config from "../../include/config.js";
import * as CaretController from "../controllers/caret-controller.js";
import * as TestAreaElement from "../elements/testarea-elements.js";
import * as Misc from "../utils/misc.js";
import { time, typedchar, mInput, user } from "../../include/stats-trackers.js";
import { Test, text, word } from "../main.js";

let wasSpace = false;
mInput.keydownUnidentified = true;

// 1. keydown
export function registerkeydown(evt) {

	if ( !evt.isTrusted ) return;

	if ( (evt.key === "Unidentified") || (evt.code === "") ) {
		mInput.keydownUnidentified = true;
		return;
	}

	if ( !user.istyping ) {
		time.begin = performance.now();
		user.istyping = true;
	}

	typedchar.reset();
  typedchar.value = evt.key;
	
	if ( (Misc.isspace(word.activeletter)) && (typedchar.value === " ") ) { // space is typed
		if ( !Config.text.highlight.flip ) {
			word.activeletter.classList.remove("whitespace-color-active");
		} else {
			word.activeletter.classList.add("whitespace-color-active");
		}
		
		wasSpace = true;
		
		CaretController.removecaretfrom(word.activeletter);

		if ( Config.text.underline && (text.activewordindex > 0) ) {
			removeunderline(text.prevword);
			text.incrementwordindex();
		}

		word.loadword(text.nextword, { nextword: true });
		
		if ( Config.text.underline ) {
			addunderline(text.activeword);
		}
		CaretController.addcaretto(word.activeletter);
		
	} else if ( typedchar.value === word.activeletter.textContent ) { // correct char is typed

		CaretController.removecaretfrom(word.activeletter);

		word.activeletter.classList.add("correct");
		if ( Config.text.underline ) {
			word.activeletter.style["text-decoration-color"] = "var(--text-secondary-color)";
		}

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretController.addcaretto(word.nextletter);
		} else {

			// load next word
			if ( word.activeletterindex === word.lastletterindex ) {

				if ( text.activewordindex < text.lastwordindex ) {
					word.loadword(text.nextword, { nextword: true });
					CaretController.addcaretto(word.activeletter);
				}	

				if ( !Config.text.highlight.flip ) { 
					word.activeletter.classList.add("whitespace-color-active");
				}

				// test complete
				if ( text.activewordindex === text.lastwordindex ) {
					time.end = window.performance.now();
					user.hastypedallwords = true;
					return;
				}
			}	
		}
	} else if ( typedchar.value === "Backspace" ) { // deletion

		// caret is on first letter of first word, so no deletion
		if ( word.activeletterindex === 0 && text.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd/win + backspace

			CaretController.removecaretfrom(word.activeletter);
			text.resetwordindex();
			word.loadword(text.activeword, { activeword: true });
			CaretController.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			for ( const letter of text.activeword.children ) {
				letter.classList.remove("correct");
				letter.style["text-decoration-color"] = "var(--text-primary-color)";
			}

			if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				removeunderline(text.activeword);
				
				if ( Misc.isspace(text.word_at(text.activewordindex - 1)?.children[0])) {

					text.decrementwordindex();
				}

				CaretController.removecaretfrom(word.activeletter);
				word.loadword(text.prevword, { prevword: true });
				addunderline(text.activeword);
				CaretController.addcaretto(word.activeletter);
				
				for ( const letter of text.activeword.children ) {
					letter.classList.remove("correct");
					letter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretController.removecaretfrom(word.activeletter);
			word.resetletterindex();
			CaretController.addcaretto(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {

				word.activeletter.classList.remove("correct");
				if ( Config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.removecaretfrom(word.activeletter);
				CaretController.addcaretto(word.prevletter);

				word.activeletter.classList.remove("correct");
				if ( Config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				
			} else if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				CaretController.removecaretfrom(word.activeletter);
				removeunderline(text.activeword);
				word.loadword(text.prevword, { prevword: true });
				
				if ( Config.text.underline && (text.activewordindex > 0) && Misc.isspace(word.activeletter)) {
					text.decrementwordindex();
					addunderline(text.activeword);
					text.incrementwordindex();
				}
				word.activeletter.classList.remove("correct");
				if ( Config.text.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--text-primary-color)";
				}
				CaretController.addcaretto(word.activeletter);
			}
		}
	} else {
		// error handling
	}
}

// 2. keypress
export function registerkeypress(evt) {
	if ( !evt.isTrusted ) return;
}

// 3. beforeinput
export function registerbeforeinput(evt) {
	if ( !evt.isTrusted ) return;
}

// 4. input
export function registerinput(evt) {

	if ( !evt.isTrusted ) return;

	if ( mInput.keydownUnidentified ) {
		
		TestAreaElement.input.focus();

		if ( !Config.user.istyping ) {
			time.begin = performance.now();
			Config.user.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			TestAreaElement.input.value = "";
			
			CaretController.removecaretfrom(word.activeletter);
			word.loadword(text.nextword, { nextword: true });
			CaretController.addcaretto(word.activeletter);
			
		} else if ( mInput.data === word.activeletter.textContent ) { // correct char is typed
			
			CaretController.removecaretfrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				CaretController.addcaretto(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					if ( text.activewordindex < text.lastwordindex ) { // load next word
						word.loadword(text.nextword, { nextword: true });
						CaretController.addcaretto(word.activeletter);
					}	
	
					if ( text.activewordindex === text.lastwordindex ) { // test complete
						time.end = window.performance.now();
						Test.restart();
					}
				}	
			}
		}
	}
	mInput.reset();
}

// 5. keyup
export function registerkeyup(evt) {

	if ( !evt.isTrusted ) return;

	if ( wasSpace ) {
		TestAreaElement.input.value = "";
		wasSpace = false;
	}

	if ( user.hastypedallwords ) {
		TestAreaElement.input.blur();
		CaretController.removecaretfrom(word.activeletter);
		console.log(((Misc.totalchar() / 5) / (time.duration / 1000)) * 60);
		Test.restart();
	}
}

export function removeunderline(word) {
	for ( const letter of word.children ) {
		letter.classList.remove("__");
	}
}

export function addunderline(word) {
	for (const letter of word.children ) {	
		letter.classList.add("__");
	}
}

// setTimeout(() => {
	// Misc.autotyper(400);
// }, 3000);

export { text, word };