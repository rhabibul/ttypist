import Config from "./config.js";
import { Sentence, Word } from "./container.js";
import * as Const from "./const.js";
import * as Element from "./element.js";
import * as Misc from "./misc.js"

let sentence = new Sentence(Misc.wordelements(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxyz']));
let word = new Word(sentence.activeword);

class Utility {

  constructor() {
		Element.input.addEventListener("keydown", registerkeydown);
		Element.input.addEventListener("keyup", registerkeyup);
	}
	
  finishedtyping() {
    const islastword = word.activeletterindex === word.size - 1;
    const islastletter = sentence.activewordindex === sentence.size - 1;
    return islastword && islastletter;
  }

  addcaretto(letterelement) {
    letterelement.setAttribute("id", Config.caret.type);
  }

  removecaretfrom(letterelement) {
    letterelement.setAttribute("id", "");
  }
  
  putcaret_onprevletter() {
    removecaretfrom(word.activeletter);
    addcaretto(word.prevletter);
  }

  putcaret_onnextletter() {
  	removecaretfrom(word.activeletter);
    addcaretto(word.nextletter);	
  }

  restart() {

  }
	isspace(code) {
		return code === Config.whitespace.code;
	}
}

const util = new Utility();

const typedchar2 = {
  value: "",
  keydown: 0,
  keyup: 0,
  repeated: false,
  reset() {
    this.keydown = 0;
    this.keyup = 0;
    this.repeated = false;
  }
};

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

let typedchar = "";
let keydown = 0, keyup = 0, repeated = false;

function registerkeydown(evt) {
  evt.preventDefault(); // typedchars are not displayed in input field
  evt.stopPropagation();

  if ( !evt.isTrusted ) return;
  
  typedchar = evt.key;

	// things are going to slow down for ttypist website from tomorrow,
	// working on ttypist will be a part time task (1hr/day)
	// dsa & cp will be 60%
	// ml will be 20%
	if ( util.isspace(word.activelettercode) && typedchar === " " ) {
		
	}
}

function registerkeyup(evt) {
  evt.stopPropagation();
}