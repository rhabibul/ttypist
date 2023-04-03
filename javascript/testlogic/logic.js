import Config from "../include/config.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";
import * as Const from "../include/constant.js";
import * as Misc from "../utils/misc.js"

import Sentence from "../include/sentence.js"
import Word from "../include/word.js"

import { time, typedchar } from "./statskeeper.js";
import { Sentence, word } from "../main.js"

let sentence = new Object();
let word = new Object();

class Utility {

  constructor() {
		this.init();
	}

	init() {
		sentence = new Sentence(Misc.wordelements(Misc.randomwords()));
		word = new Word(sentence.activeword);

		CaretHandler.addcaretto(word.activeletter);

		TestAreaElement.input.addEventListener("input", registerinput);
		TestAreaElement.input.addEventListener("keydown", registerkeydown);
		TestAreaElement.input.addEventListener("keyup", registerkeyup);
		
		Config.teststate.istyping = false;
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	}
	
	testreset() {
		charstat.reset();
		// keystroketime.reset();
		teststat.reset();

		this.init();
	}
}

const util = new Utility();

const mInput = {
	data: "",
	chartotype: "",
	delete: false,
	keydown_unidentified: false,

	reset() {
		this.data = "";
		this.chartotype = "";
		this.keydown_unidentified = false;
	}
}

export function registerinput(evt) {

	if ( mInput.keydown_unidentified ) {
		
		TestAreaElement.input.focus();

		if ( !Config.teststate.istyping ) {
			teststat.starttime = performance.now();
			Config.teststate.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		mInput.chartotype = word.activeletter.textContent;

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			CaretHandler.removecaretfrom(word.activeletter);
			word.loadword(sentence.nextword, { nextword: true });
			CaretHandler.addcaretto(word.activeletter);
			
		} else if ( mInput.data === mInput.chartotype ) { // correct char is typed
			
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
						
						teststat.endtime = window.performance.now();
						CaretHandler.removecaretfrom(word.activeletter);
		
						TestAreaElement.input.removeEventListener('input', registerinput);
						TestAreaElement.input.removeEventListener('keydown', registerkeydown);
						TestAreaElement.input.removeEventListener('keyup', registerkeyup);
		
						Misc.showspeed(Misc.totalchar(), (teststat.testduration() / 1000));
						util.testreset();
					}
				}	
			}
		}
	}

	mInput.reset();
}

export function registerkeydown(evt) {

	if ( !evt.isTrusted ) return;

	if ( (evt.key === "Unidentified") || (evt.code === "") ) { 
		mInput.keydown_unidentified = true;
		return;
	}

	if ( !Config.teststate.istyping ) {
		time.begin = performance.now();
		Config.teststate.istyping = true;
	}

	typedchar.reset();
  typedchar.value = evt.key;

	if ( (Misc.isspace(word.activeletter)) && (typedchar.value === " ") ) { // space is typed

		CaretHandler.removecaretfrom(word.activeletter);
		word.loadword(sentence.nextword, { nextword: true });
		CaretHandler.addcaretto(word.activeletter);
		
	} else if ( typedchar.value === evt.key ) { // correct char is typed

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
					teststat.endtime = window.performance.now();
					CaretHandler.removecaretfrom(word.activeletter);
	
					TestAreaElement.input.removeEventListener('input', registerinput);
					TestAreaElement.input.removeEventListener('keydown', registerkeydown);
					TestAreaElement.input.removeEventListener('keyup', registerkeyup);
	
					Misc.showspeed(Misc.totalchar(), (teststat.testduration() / 1000));
					util.testreset();
				}
			}	
		}
	} else if ( charstat.typedchar === "Backspace" ) { // deletion

		if ( word.activeletterindex === 0 && sentence.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd + backspace

			CaretHandler.removecaretfrom(word.activeletter);
			sentence.resetwordindex();
			word.loadword(sentence.activeword, { activeword: true });
			CaretHandler.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {

				if ( util.isspace(sentence.word_at(sentence.activewordindex - 1)?.children[0])) {
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
		if ( !Const.nonPrintableCharacter.includes(word.activeletter) ) {
			// error handling
		}
	}
}

export function registerkeyup(evt) {

}

export { sentence, word, util };