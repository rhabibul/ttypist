import { Config, TextConfig, MiscConfig } from "./config.js";
import { Sentence, Word } from "./container.js";
import * as Const from "./const.js";
import * as Element from "./element.js";
import * as Misc from "./misc.js"

let sentence = new Object();
let word = new Object();

let typedchar = "", chartotype = "";
let keydown = 0, keyup = 0, repeated = false;

const keystroketime = {
  symbol: new Map([
    ["a", []], ["b", []], ["c", []], ["d", []], ["e", []], ["f", []], ["g", []],
    ["h", []], ["i", []], ["j", []], ["k", []], ["l", []], ["m", []], ["n", []],
    ["o", []], ["p", []], ["q", []], ["r", []], ["s", []], ["t", []], ["u", []],
    ["v", []], ["w", []], ["x", []], ["y", []], ["z", []],
    ["A", []], ["B", []], ["C", []], ["D", []], ["E", []], ["F", []], ["G", []],
    ["H", []], ["I", []], ["J", []], ["K", []], ["L", []], ["M", []], ["N", []],
    ["O", []], ["P", []], ["Q", []], ["R", []], ["S", []], ["T", []], ["U", []],
    ["V", []], ["W", []], ["X", []], ["Y", []], ["Z", []],
    ["0", []], ["1", []], ["2", []], ["3", []], ["4", []], ["5", []], ["6", []],
    ["7", []], ["8", []], ["9", []], ["`", []], ["~", []], ["!", []], ["@", []],
    ["#", []], ["$", []], ["%", []], ["^", []], ["&", []], ["*", []], ["(", []],
    [")", []], ["-", []], ["_", []], ["=", []], ["+", []], ["[", []], ["]", []],
    ["{", []], ["}", []], [";", []], [":", []], ["'", []], ["|", []],
    ["\"",[]], ["\\",[]],
    [",", []], ["<", []], [".", []], [">", []], ["/", []], ["?", []],
  ]),
  
  log(sym, time) {
    this.symbol.get(sym)?.push(time);
  },
  
  show() {
    for ( const [sym, value] of this.symbol.entries() ) {
      console.log(sym, value);
    }
  },

  reset() {
    for ( const [sym, _] of this.symbol.entries() ) {
      this.symbol.set(sym, new Array());
    }
  }
}

const charstat = {
	typedchar: "",
	chartotype: "",

  keydown: 0,
  keyup: 0,
  repeated: false,

  reset() {
		this.typedchar = "";
		this.chartotype = "";

    this.keydown = 0;
    this.keyup = 0;
    this.repeated = false;
  }
};


const teststat = {
	starttime: 0,
	endtime: 0,

	testduration() {
		return this.endtime - this.starttime;
	},
	reset() {
		this.starttime = 0;
		this.entime = 0;
	}
}

class Utility {

  constructor() {
		this.init();
	}

	init() {
		sentence = new Sentence(Misc.wordelements(Misc.randomwords()));
		word = new Word(sentence.activeword, { activeword: true });

		this.addcaretto(word.activeletter);

		Element.input.addEventListener("input", registerinput); // input.value, InputEvent.data
		Element.input.addEventListener("keydown", registerkeydown);
		Element.input.addEventListener("keyup", registerkeyup);
		
		Config.ttypist.istyping = false;
		Element.input.value = "";
		Element.input.focus();
	}
	
	testreset() {
		charstat.reset();
		keystroketime.reset();
		teststat.reset();

		this.init();
	}

  addcaretto(letter) {
    letter.setAttribute("id", Config.caret.type);
  }
  removecaretfrom(letter) {
    letter.setAttribute("id", "");
  }

	addwordhighlight(word) { }
	removewordhighlight(word) {}
	fadeletter(letter) {}
	unfadeletter(word) {}
	
	isspace(letter) {
		return letter?.textContent.charCodeAt(0) === Config.whitespace.code;
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
		this.delete = false;
		this.keydown_unidentified = false;
	}
}

function registerinput(evt) {

	if ( mInput.keydown_unidentified ) {

		if ( !Config.ttypist.istyping ) {
			teststat.starttime = performance.now();
			Config.ttypist.istyping = true;
			Element.input.focus();
		}

		if ( evt.data !== null ) {
			mInput.data = evt.data[evt.data.length - 1];
			mInput.delete = false;
		} else {
			mInput.delete = true;
		}

		mInput.chartotype = word.activeletter.textContent;

		if ( mInput.data === " " && util.isspace(word.activeletter) ) { // space is typed

			util.removecaretfrom(word.activeletter)
			word.loadword(sentence.nextword, { nextword: true });
			util.addcaretto(word.activeletter);
			
		} else if ( mInput.data === mInput.chartotype ) { // correct char is typed
			
			util.removecaretfrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				util.addcaretto(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					// load next word
					if ( sentence.activewordindex < sentence.lastwordindex ) {
						word.loadword(sentence.nextword, { nextword: true });
						util.addcaretto(word.activeletter);
					}	
	
					// user has typed typed all words
					if ( sentence.activewordindex === sentence.lastwordindex ) {
						teststat.endtime = window.performance.now();
						util.removecaretfrom(word.activeletter);
		
						Element.input.removeEventListener('input', registerinput);
						Element.input.removeEventListener('keydown', registerkeydown);
						Element.input.removeEventListener('keyup', registerkeyup);
		
						Misc.showspeed(Misc.totalchar(), (teststat.testduration() / 1000));
						util.testreset();
					}
				}	
			}
		}
	}

	mInput.reset();
}

function registerkeydown(evt) {

	if ( !evt.isTrusted ) {
		return;
	}

	mInput.keydown_unidentified = (evt.key === "Unidentified") || (evt.code === "");

	if ( mInput.keydown_unidentified ) { return; }

	if ( !Config.ttypist.istyping ) {
		teststat.starttime = performance.now();
		Config.ttypist.istyping = true;
	}

	charstat.reset();
  charstat.typedchar = evt.key;
	charstat.chartotype = word.activeletter.textContent;

	if ( charstat.typedchar === 'Tab' ) {
		Element.input.value = "";
    Element.input.blur();
    Element.setting.restart.button.focus();
  }	

	if ( charstat.typedchar === " " && util.isspace(word.activeletter) ) { // space is typed

		util.removecaretfrom(word.activeletter)
		word.loadword(sentence.nextword, { nextword: true });
		util.addcaretto(word.activeletter);
		
	} else if ( charstat.typedchar === charstat.chartotype ) { // correct char is typed
		util.removecaretfrom(word.activeletter);

		if ( word.activeletterindex < word.lastletterindex ) {
			util.addcaretto(word.nextletter);
		} else {

			if ( word.activeletterindex === word.lastletterindex ) {
				// load next word
				if ( sentence.activewordindex < sentence.lastwordindex ) {
					word.loadword(sentence.nextword, { nextword: true });
					util.addcaretto(word.activeletter);
				}	

				// user typed has typed all words
				if ( sentence.activewordindex === sentence.lastwordindex ) {
					teststat.endtime = window.performance.now();
					util.removecaretfrom(word.activeletter);
	
					Element.input.removeEventListener('input', registerinput);
					Element.input.removeEventListener('keydown', registerkeydown);
					Element.input.removeEventListener('keyup', registerkeyup);
	
					Misc.showspeed(Misc.totalchar(), (teststat.testduration() / 1000));
					util.testreset();
				}
			}	
		}
	} else if ( charstat.typedchar === "Backspace" ) { // deletion

		if ( word.activeletterindex === 0 && sentence.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd + backspace

			util.removecaretfrom(word.activeletter);
			sentence.resetwordindex();
			word.loadword(sentence.activeword, { activeword: true });
			util.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {

				if ( util.isspace(sentence.word_at(sentence.activewordindex - 1)?.children[0])) {
					sentence.decrementwordindex();
				}

				util.removecaretfrom(word.activeletter);
				word.loadword(sentence.prevword, { prevword: true });
				util.addcaretto(word.activeletter);
			}

			// delete all typed letters of the active word and put caret to first letter
			util.removecaretfrom(word.activeletter);
			word.resetletterindex();
			util.addcaretto(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {
				util.removecaretfrom(word.activeletter);
				util.addcaretto(word.prevletter);
			} else if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {
				util.removecaretfrom(word.activeletter);
				word.loadword(sentence.prevword, { prevword: true });
				util.addcaretto(word.activeletter);
			}
		}
	} else {
		
		// error handling, insert of error, stop on error etc..
	}
}

function registerkeyup(evt) {

}

export { sentence, word, util };