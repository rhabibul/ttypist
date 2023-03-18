import * as Misc from "./misc.js";
import * as Element from "./element.js";

class Sentence {
  #words; // array of <word></word> tag which contains <letter></letter> tags
  #wordindex; // keeps track of the index of <word></word> tag which is to be typed

  constructor(words) {
    this.#wordindex = 0;
    this.#words = words;
    // for ( const word of this.#words ) {
    // 	Element.sentence.insertAdjacentElement("beforeend", word);
    // }
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

  get size() {
    return this.#words.length;
  }
  get prevword() {
    try {
      this.decrementwordindex();
      if (this.#wordindex < 0) {
        throw `#wordindex is out of bounds (${this.#wordindex})`;
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
        throw `#wordindex is out of bounds (${this.#wordindex})`;
      }
      return this.#words[this.#wordindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activeword() {
    try {
      if (this.#wordindex < 0 || this.#wordindex >= this.#words.length) {
        throw `#wordindex is out of bounds (${this.#wordindex})`;
      }
      return this.#words[this.#wordindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activewordindex() {
    return this.#wordindex;
  }
}

// goal is to first implement insertion and deletion of extra letter like texteditor
class Word {
  #word; // contains all <letter></letter> tags for the <word></word> tag
  #letterindex; // keeps track of the index of <letter></letter> tag which is to be typed

  constructor(word) {
    this.#letterindex = 0;
    this.#word = Array.from(word?.children);
  }

  me() {
    return this.#word[0].parentElement;
  }

  loadprevword(word) {
    this.#word = Array.from(word?.children);
    this.#letterindex = this.#word.length - 1;
  }
  loadnextword(word) {
    this.#word = Array.from(word?.children);
    this.#letterindex = 0;
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

  get size() {
    return this.#word.length;
  }
  get prevletter() {
    try {
      this.decrementletterindex();
      if (this.#letterindex < 0) {
        throw `#letterindex is out of bounds (${this.#letterindex})`;
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
        throw `#letterindex is out of bounds (${this.#letterindex})`;
      }
      return this.#word[this.#letterindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activeletter() {
    try {
      if (this.#letterindex < 0 || this.#letterindex >= this.#word.length) {
        throw `#letterindex is out of bounds (${this.#letterindex})`;
      }
      return this.#word[this.#letterindex];
    } catch (outofbound) {
      console.error(outofbound);
    }
  }
  get activeletterindex() {
    return this.#letterindex;
  }
  insert(letter) {}
  delete(letter) {}
}

class Test {
  #sentence;
  #word;

  constructor() {
    const s = "the quick brown fox jumped over the lazy dog";
    const words = Misc.wordelementsfrom(s.split(" "));

    this.#sentence = new Sentence(words);
    this.#word = new Word(this.#sentence.activeword);
    this.testing();
  }

  testing() {
    console.log("testing...");
  }

  init() {
    // just add eventlisteners and you are good to go, user just needs to start
    // typing since sentence and word objects are already initialized
  }
  wordtext(word) {
    let ws_code = 0, text = new String();
    for ( const letter of word.children ) {
      ws_code = letter.textContent.charCodeAt(0);
      if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
        text += " ";
      } else {
        text += letter.textContent;
      }
    }
    return text;
  }
  lettertext(letter) {
		const ws_code = letter.textContent.charCodeAt(0);
		if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
			return " ";
		} else {
			return letter.textContent;
		}
	}
  valid(sentence) {
    // sentence type must be object i.e, array and it should not be empty,
    // every string should be in <word></word> tag and every character should
    // be in <letter></letter> tag and no letter tag must contain more than
    // one character
    const validtype = typeof sentence === "object";
    const notempty = sentence.length > 0;
    const validwordtags = sentence.every((word) => word.tagName === "WORD");
    const validlettertags = sentence.every(function (word) {
      return Array.from(word?.children).every(function (letter) {
        return letter.tagName === "LETTER" && letter.textContent.length === 1;
      });
    });
    if (validtype && notempty && validwordtags && validlettertags) {
      return true;
    } else {
      return false;
    }
  }
  restart() {
    // ui change
    Element.input.value = "";
    Element.sentence.innerHTML = "";

    this.#sentence = new Sentence(Misc.wordelementsfrom(Misc.randomwords()));
    this.#word = new Word(this.#sentence.activeword);
  }
  over() {
    const islastword =
      this.#sentence.activewordindex === this.#sentence.size - 1;
    const islastletter = this.#word.activeletterindex === this.#word.size - 1;
    return islastword && islastletter;
  }
  registerkeydown() {} // registerkeydown will use caret related functionality
  registerkeyup() {}
}

const test = new Test();
