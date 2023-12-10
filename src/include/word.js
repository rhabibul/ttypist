export default class Word {
  #word; // contains all <letter></letter> tags for a single <word></word> tag
  #letterindex; // keeps track of the index of <letter></letter> tag

  constructor() {
    this.#letterindex = 0;
    this.#word = new Array();
  }

  loadword(word, option) {

    this.#word = Array.from(word?.children);
    
    if ( option?.nextword || option?.activeword ) {
      this.#letterindex = 0;
    } else if ( option?.prevword ) {
      this.#letterindex = this.#word.length - 1;
    } else {
      console.error("wrong option provided");
    }
  }

  get size() { // go with the convention of js and use length instead of size
    return this.#word.length;
  }
  get lastletterindex() {
    return this.size - 1;
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
  letter_at(index) {
    // previousElementSibling or nextElementSibling will be used in future, (this will be deleted)
    try {
      if (index < 0 || index >= this.#word.length) {
        throw `index(${index}) is out of bounds 'letter_at'`;
      }
      return this.#word[index];
    } catch (outofbound) {
      console.error(outofbound);
    }
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
  me() { 
    return this.#word[0].parentElement;
  }

  // error letter handling methods
  insert(letter) {}
  delete(word = false) {}
}