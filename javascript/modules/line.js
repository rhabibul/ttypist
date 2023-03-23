import * as Misc from "./misc.js";
import * as Element from "./element.js";
import { StopWatch, Time } from "./time.js";

const s = "the quick brown fox jumped over the lazy dog";
const samplewords = s.split(' ');

class Sentence {
  #words; // array of <word></word> tag which contains <letter></letter> tags
  #wordindex; // keeps track of the index of <word></word> tag which is to be typed

  constructor(words) {
    this.#wordindex = 0;
    this.#words = words;
    for ( const word of this.#words ) {
    	Element.sentence.insertAdjacentElement("beforeend", word);
    }
  }

  get size() {
    return this.#words.length;
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

  resetletterindex() {
    this.#letterindex = 0;
  }
  decrementletterindex() {
    this.#letterindex = this.#letterindex - 1;
  }
  incrementletterindex() {
    this.#letterindex = this.#letterindex + 1;
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

class Test {
  #sentence;
  #word;

  constructor() {
    const words = Misc.wordelementsfrom(samplewords);

    this.#sentence = new Sentence(words);
    this.#word = new Word(this.#sentence.activeword);
  }
  finishedtypingwords() {
    const waslastletter = this.#word.activeletterindex === this.#word.size - 1;
    const waslastword = this.#sentence.activewordindex === this.#sentence.size - 1;
    return waslastword && waslastletter;
  }

  init() {
    // just add eventlisteners and you are good to go, user just needs to start
    // typing since sentence and word objects are already initialized
    Element.input.addEventListener("keydown", registerkeydown);
    Element.input.addEventListener("keyup", registerkeyup);
  }
  restart() {
    // ui change
    Element.input.value = "";
    Element.sentence.innerHTML = "";

    this.#sentence = new Sentence(Misc.wordelementsfrom(Misc.randomwords()));
    this.#word = new Word(this.#sentence.activeword);
  }
}

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

const key = {
  down: 0,
  up: 0,
  wasrepeating: false,
  pressduration: 0,

  reset() {
    this.down = 0;
    this.up = 0;
    this.wasrepeating = false;
    this.pressduration = 0;
  }
};

// note:
//   implement only caret movement with deletion (bs, alt/ctrl+bs, cmd+bs)
//   without error handling ui and without word/letter highlight
function registerkeydown(evt) {
  evt.preventDefault(); // characters are not displayed in input field
  evt.stopPropagation();

  if ( !evt.isTrusted ) return;
  
  if ( evt.repeat ) {
    key.wasrepeating = true;
  } else {
    key.down = performance.now();
  }
}

function registerkeyup(evt) {
  evt.stopPropagation();

  if ( key.wasrepeating ) {
    key.wasrepeating = false;
  } else {
    key.up = performance.now();
    key.pressduration = key.up - key.down;
    keypressduration.store(evt.key, key.pressduration);
  }
}

// const test = new Test();