import Config from "./config.js";
import { Sentence, Word } from "./container.js";
import * as Const from "./const.js";
import * as Element from "./element.js";
import * as Misc from "./misc.js"

let sentence = new Sentence(Misc.wordelements(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxyz']));
let word = new Word(sentence.activeword);

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
		this.addcaretto(word.activeletter);
		Element.input.addEventListener("keydown", registerkeydown);
		Element.input.addEventListener("keyup", registerkeyup);
		Element.input.addEventListener("input", registerinput); // mobile devices (input.value, InputEvent.data)
		Element.input.focus();
	}
	
	testreset() {
		charstat.reset();
		keystroketime.reset();
		teststat.reset();
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

// error insertion and deletion + letter/word highlight
function registerkeydown(evt) {
  // evt.preventDefault(); // typedchars are not displayed in input field
  // evt.stopPropagation();

  if ( !evt.isTrusted ) return;

	if ( !Config.ttypist.istyping ) {
		teststat.starttime = performance.now();
		Config.ttypist.istyping = true;
	}

	// charstat.reset();
	
  typedchar = evt.key;
	chartotype = word.activeletter.textContent;

	// if ( typedchar === 'Tab' ) {
  //   Element.input.blur();
  //   Element.setting.restart.button.focus();
	// 	util.testreset();
  // }	

	if ( typedchar === " " && util.isspace(word.activeletter) ) { // space is typed

		util.removecaretfrom(word.activeletter)
		word.loadword(sentence.nextword, { nextword: true });
		util.addcaretto(word.activeletter);
		
	} else if ( typedchar === chartotype ) { // correct char is typed
		
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
	} else if ( typedchar === "Backspace" ) { // deletion

		if ( evt.metaKey ) { // cmd + backspace

			util.removecaretfrom(word.activeletter);
			sentence.resetwordindex();
			word.loadword(sentence.activeword, { activeword: true });
			util.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			// delete previous word in caret on first letter of the word
			util.removecaretfrom(word.activeletter);
			if ( sentence.activewordindex > 0 && word.activeletterindex === 0 ) {
				word.loadword(sentence.prevword, { prevword: true }); // sets index to (word.length - 1)th letter
				util.addcaretto(word.activeletter);
			}

			// delete all typed letters of the active word and put caret to first letter
			word.resetletterindex();
			util.addcaretto(word.activeletter);

		} else { // just backspace

			if ( word.activeletterindex > 0 ) {
				util.removecaretfrom(word.activeletter);
				util.addcaretto(word.prevletter);
			} else if ( word.activeletterindex === 0 && sentence.activewordindex > 0 ) {
				util.removecaretfrom(word.activeletter);
				word.loadword(sentence.prevword, { prevword: true });
				word.resetletterindex();
				util.addcaretto(word.activeletter);
			}
		}
	} else {
		// error handling, insert of error, stop on error etc..
	}
}

function registerkeyup(evt) {
  evt.stopPropagation();
}

function registerinput(evt) {
	
}

export { sentence, word, util };