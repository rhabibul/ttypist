import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

export default class Phrase {
  #words; // array of <word></word> tag which contains <letter></letter> tags
  #wordindex; // keeps track of the index of <word></word> tag

  constructor() {
    this.#words = new Array();
    this.#wordindex = 0;
    
    TestAreaElement.input.value = "";
    TestAreaElement.phrase.innerHTML = "";
  }

  text() {} // phrase.text();

  loadwords(words) {
    this.#words = words;
    this.#wordindex = 0;
    
    TestAreaElement.input.value = "";
    TestAreaElement.phrase.innerHTML = "";

    for ( const word of this.#words ) {
    	TestAreaElement.phrase.insertAdjacentElement("beforeend", word);
    }
    
    this.#words[this.#wordindex].classList.add("underline-word");
  }

  get size() {
    return this.#words.length;
  }
  get lastwordindex() {
    return this.size  - 1;
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

  word_at(index) {
    try {
      if ( index < 0 || index >= this.#words.length - 1 ) {
        throw `index(${index}) is out of bound 'word_at'`;
      }
      return this.#words[index];
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