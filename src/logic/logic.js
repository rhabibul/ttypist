import Config from "../include/config.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";
import * as Misc from "../utils/misc.js";

import { time, typedchar, mInput } from "./statskeeper.js";
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

	if ( !Config.ttypist.istyping ) {
		time.begin = performance.now();
		Config.ttypist.istyping = true;
	}

	typedchar.reset();
  typedchar.value = evt.key;

	if ( (Misc.isspace(word.activeletter)) && (typedchar.value === " ") ) { // space is typed

		wasSpace = true;
		
		CaretHandler.removecaretfrom(word.activeletter);

		if ( Config.underline && (text.activewordindex > 0) ) {
			removeunderline(text.prevword);
			text.incrementwordindex();
		}
		word.loadword(text.nextword, { nextword: true });
		if ( Config.underline ) {
			addunderline(text.activeword);
		}
		CaretHandler.addcaretto(word.activeletter);
		
	} else if ( typedchar.value === word.activeletter.textContent ) { // correct char is typed

		CaretHandler.removecaretfrom(word.activeletter);

		word.activeletter.classList.add("correct");
		if ( Config.underline ) {
			word.activeletter.style["text-decoration-color"] = "var(--textcolor-secondary)";
		}

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretHandler.addcaretto(word.nextletter);
		} else {

			if ( word.activeletterindex === word.lastletterindex ) { // load next word

				if ( text.activewordindex < text.lastwordindex ) {
					word.loadword(text.nextword, { nextword: true });
					CaretHandler.addcaretto(word.activeletter);
				}	

				if ( text.activewordindex === text.lastwordindex ) { // test complete
					time.end = window.performance.now();
					Config.ttypist.hastypedeveryword = true;
					return;
				}
			}	
		}
	} else if ( typedchar.value === "Backspace" ) { // deletion

		// caret is on first letter of first word, so no deletion
		if ( word.activeletterindex === 0 && text.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd + backspace

			CaretHandler.removecaretfrom(word.activeletter);
			text.resetwordindex();
			word.loadword(text.activeword, { activeword: true });
			CaretHandler.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				if ( Misc.isspace(text.word_at(text.activewordindex - 1)?.children[0])) {
					text.decrementwordindex();
				}

				CaretHandler.removecaretfrom(word.activeletter);
				word.loadword(text.prevword, { prevword: true });
				CaretHandler.addcaretto(word.activeletter);
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretHandler.removecaretfrom(word.activeletter);
			word.resetletterindex();
			CaretHandler.addcaretto(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {

				word.activeletter.classList.remove("correct");
				if ( Config.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--textcolor-primary)";
				}
				CaretHandler.removecaretfrom(word.activeletter);
				CaretHandler.addcaretto(word.prevletter);

				word.activeletter.classList.remove("correct");
				if ( Config.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--textcolor-primary)";
				}
				
			} else if ( word.activeletterindex === 0 && text.activewordindex > 0 ) {

				CaretHandler.removecaretfrom(word.activeletter);
				word.loadword(text.prevword, { prevword: true });
				
				if ( Config.underline && (text.activewordindex > 0) && Misc.isspace(word.activeletter)) {
					text.decrementwordindex();
					addunderline(text.activeword);
					text.incrementwordindex();
				}
				word.activeletter.classList.remove("correct");
				if ( Config.underline ) {
					word.activeletter.style["text-decoration-color"] = "var(--textcolor-primary)";
				}
				CaretHandler.addcaretto(word.activeletter);
			}
		}
	} else {
		// if ( !Const.NOT_PRINTABLE.includes(typedchar.value) ) {
		// 	word.activeletter.classList.add("____");
		// }
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

		if ( !Config.ttypist.istyping ) {
			time.begin = performance.now();
			Config.ttypist.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			TestAreaElement.input.value = "";
			
			CaretHandler.removecaretfrom(word.activeletter);
			word.loadword(text.nextword, { nextword: true });
			CaretHandler.addcaretto(word.activeletter);
			
		} else if ( mInput.data === word.activeletter.textContent ) { // correct char is typed
			
			CaretHandler.removecaretfrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				CaretHandler.addcaretto(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					if ( text.activewordindex < text.lastwordindex ) { // load next word
						word.loadword(text.nextword, { nextword: true });
						CaretHandler.addcaretto(word.activeletter);
					}	
	
					if ( text.activewordindex === text.lastwordindex ) { // test complete
						
						time.end = window.performance.now();
						Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
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

	if ( Config.ttypist.hastypedeveryword ) {
		TestAreaElement.input.blur();
		CaretHandler.removecaretfrom(word.activeletter);
		Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
		Test.restart();
	}
}

export function removeunderline(word) {
	for ( const letter of word.children ) {
		letter.classList.remove("____");
	}
}

export function addunderline(word) {
	for (const letter of word.children ) {	
		letter.classList.add("____");
	}
}

export { text, word };