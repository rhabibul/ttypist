import * as Misc from "./misc.js";
import * as Element from "./element.js";
import { StopWatch, Time } from "./time.js";

const keypressduration = {
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
  
  store(key, time) {
    this.symbol.get(key)?.push(time);
  },
  
  show() {
    for ( const [key, value] of this.symbol.entries() ) {
      console.log(key, value);
    }
  },

  reset() {
    for ( const [key, _] of this.symbol.entries() ) {
      this.symbol.set(key, new Array());
    }
  }
}

class Sentence {
  #words; // array of <word></word> tag which contains <letter></letter> tags
  #wordindex; // keeps track of the index of <word></word> tag which is to be typed

  constructor(words) {
    this.#wordindex = 0;
    this.#words = words;
    
    Element.input.value = "";
    Element.sentence.innerHTML = "";
    for ( const word of this.#words ) {
    	Element.sentence.insertAdjacentElement("beforeend", word);
    }
  }

  get size() {
    return this.#words.length;
  }

  set activewordindex(index) {
    this.#wordindex = index;
  }
  get activewordindex() {
    return this.#wordindex;
  }
  get activeword() {
    try {
      if (this.#wordindex < 0 || this.#wordindex >= this.#words.length) {
        throw `wordindex(${this.#wordindex}) is out of bounds 'activeword'`;
      }
      return this.#words[this.#wordindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get prevword() {
    try {
      this.decrementwordindex();
      if (this.#wordindex < 0) {
        throw `wordindex(${this.#wordindex}) is out of bounds 'prevword'`;
      }
      return this.#words[this.#wordindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get nextword() {
    try {
      this.incrementwordindex();
      if (this.#wordindex >= this.#words.length) {
        throw `wordindex(${this.#wordindex}) is out of bounds 'nextword'`;
      }
      return this.#words[this.#wordindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  resetwordindex() {
    this.#wordindex = 0;
  }
  decrementwordindex() {
    this.#wordindex = this.#wordindex - 1;
  }
  incrementwordindex() {
    this.#wordindex = this.#wordindex + 1;
  }
}

// goal is to first implement insertion and deletion of extra letter like texteditor
class Word {
  #word; // contains all <letter></letter> tags for a single <word></word> tag
  #letterindex; // keeps track of the index of <letter></letter> tag which is to be typed

  constructor(word) {
    this.#letterindex = 0;
    this.#word = Array.from(word?.children);
  }

  get size() {
    return this.#word.length;
  }
  
  set activeletterindex(index) {
    this.#letterindex = index;
  }
  get activeletterindex() {
    return this.#letterindex;
  }
  get prevletter() {
    try {
      this.decrementletterindex();
      if (this.#letterindex < 0) {
        throw `letterindex(${this.#letterindex}) is out of bounds 'prevletter'`;
      }
      return this.#word[this.#letterindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get nextletter() {
    try {
      this.incrementletterindex();
      if (this.#letterindex >= this.#word.length) {
        throw `letterindex(${this.#letterindex}) is out of bounds 'nextletter'`;
      }
      return this.#word[this.#letterindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activeletter() {
    try {
      if (this.#letterindex < 0 || this.#letterindex >= this.#word.length) {
        throw `letterindex(${this.#letterindex}) is out of bounds 'activeletter'`;
      }
      return this.#word[this.#letterindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activelettervalue() {
    return this.activeletter.textContent;
  }
  get activelettercode() {
    return this.activeletter.textContent.charCodeAt(0);
  }
  resetletterindex() {
    this.#letterindex = 0;
  }
  decrementletterindex() {
    this.#letterindex = this.#letterindex - 1;
  }
  incrementletterindex() {
    this.#letterindex = this.#letterindex + 1;
  }
  loadprevword(word) {
    this.#word = Array.from(word?.children);
    this.#letterindex = this.#word.length - 1;
  }
  loadnextword(word) {
    this.#word = Array.from(word?.children);
    this.#letterindex = 0;
  }
  me() { 
    return this.#word[0].parentElement;
  }

  // error letter handling method
  insert(letter) {}
  delete(word = false) {}
}


const s = ['azlan', 'nusrat', 'habibul', 'najma', 'rahmat'];
let sentence = new Sentence(Misc.wordelementsfrom(s));
let word = new Word(sentence.activeword);

class Test {
  constructor() {}
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
}

const test = new Test();

const typedchar = {
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


// Element.input.addEventListener("keydown", registerkeydown);
// Element.input.addEventListener("keyup", registerkeyup);

function registerkeydown(evt) {
  evt.preventDefault(); // typedchars are not displayed in input field
  evt.stopPropagation();

  typedchar.value = evt.key;
  
  if ( !evt.isTrusted ) return;
  
  if ( evt.repeat ) {
    typedchar.repeated = true;
  } else {
    typedchar.keydown = performance.now();
  }
}

function registerkeyup(evt) {
  evt.stopPropagation();
}