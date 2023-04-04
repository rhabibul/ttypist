import Config from "../include/config.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";
import * as Const from "../include/constant.js";
import * as Misc from "../utils/misc.js"
import * as SettingUI from "../ui/SettingUI.js"

import { time, typedchar, mInput } from "./statskeeper.js";
import Sentence from "../include/sentence.js";
import Word from "../include/word.js";

const sentence = new Sentence(Misc.wordelements(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]));
const word = new Word(sentence.activeword);

export const Test = {
	init() {
		Config.ttypist.istyping = false;
		TestAreaElement.input.value = "";

		CaretHandler.addcaretto(word.activeletter);

		// InputElement.value | InputEvent.data
		TestAreaElement.input.addEventListener("input", registerinput);
		TestAreaElement.input.addEventListener("keydown", registerkeydown);
		TestAreaElement.input.addEventListener("keyup", registerkeyup);		
		TestAreaElement.input.focus();
	},
	restart() {
		typedchar.reset();
		time.reset();
		mInput.reset();
		sentence.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(sentence.activeword, { activeword: true });
		this.init();
	}
}

function registerinput(evt) {

	if ( !evt.isTrusted ) return;

	if ( mInput.keydownUnidentified ) {
		
		TestAreaElement.input.focus();

		if ( !Config.ttypist.istyping ) {
			time.begin = performance.now();
			Config.ttypist.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			CaretHandler.removecaretfrom(word.activeletter);
			word.loadword(sentence.nextword, { nextword: true });
			CaretHandler.addcaretto(word.activeletter);
			
		} else if ( mInput.data === word.activeletter.textContent ) { // correct char is typed
			
			CaretHandler.removecaretfrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				CaretHandler.addcaretto(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					if ( sentence.activewordindex < sentence.lastwordindex ) { // load next word
						word.loadword(sentence.nextword, { nextword: true });
						CaretHandler.addcaretto(word.activeletter);
					}	
	
					if ( sentence.activewordindex === sentence.lastwordindex ) { // test complete
						
						time.end = window.performance.now();
						CaretHandler.removecaretfrom(word.activeletter);
						Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
						Test.restart();
					}
				}	
			}
		}
	}

	mInput.reset();
}

function registerkeydown(evt) {

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

		CaretHandler.removecaretfrom(word.activeletter);
		word.loadword(sentence.nextword, { nextword: true });
		CaretHandler.addcaretto(word.activeletter);
		
	} else if ( typedchar.value === word.activeletter.textContent ) { // correct char is typed

		CaretHandler.removecaretfrom(word.activeletter);

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretHandler.addcaretto(word.nextletter);
		} else {

			if ( word.activeletterindex === word.lastletterindex ) { // load next word
				if ( sentence.activewordindex < sentence.lastwordindex ) {
					word.loadword(sentence.nextword, { nextword: true });
					CaretHandler.addcaretto(word.activeletter);
				}	

				if ( sentence.activewordindex === sentence.lastwordindex ) { // test complete
					time.end = window.performance.now();
					CaretHandler.removecaretfrom(word.activeletter);
	
					TestAreaElement.input.removeEventListener('input', registerinput);
					TestAreaElement.input.removeEventListener('keydown', registerkeydown);
					TestAreaElement.input.removeEventListener('keyup', registerkeyup);
	
					Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
					Test.restart();
				}
			}	
		}
	} else if ( typedchar.value === "Backspace" ) { // deletion

		if ( word.activeletterindex === 0 && sentence.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd + backspace

			CaretHandler.removecaretfrom(word.activeletter);
			sentence.resetwordindex();
			word.loadword(sentence.activeword, { activeword: true });
			CaretHandler.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {

				if ( Misc.isspace(sentence.word_at(sentence.activewordindex - 1)?.children[0])) {
					sentence.decrementwordindex();
				}

				CaretHandler.removecaretfrom(word.activeletter);
				word.loadword(sentence.prevword, { prevword: true });
				CaretHandler.addcaretto(word.activeletter);
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretHandler.removecaretfrom(word.activeletter);
			word.resetletterindex();
			CaretHandler.addcaretto(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {
				CaretHandler.removecaretfrom(word.activeletter);
				CaretHandler.addcaretto(word.prevletter);
			} else if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {
				CaretHandler.removecaretfrom(word.activeletter);
				word.loadword(sentence.prevword, { prevword: true });
				CaretHandler.addcaretto(word.activeletter);
			}
		}
	} else {
		// if ( !Const.nonPrintableCharacter.includes(word.activeletter) ) {
		// 	error handling
		// }
	}
}

function registerkeyup(evt) {
	if ( !evt.isTrusted ) return;
}

export { sentence, word };