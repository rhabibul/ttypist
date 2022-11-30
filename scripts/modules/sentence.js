import Config from "./config.js";
import * as Misc from "./misc.js";
import * as Elements from "./elements.js";
import * as Constants from "./constants.js"

// Used for:
// storing all the word & letter elements and also keeps track of indexes of
// active word and active letter.
class Sentence {
  #words; // array of word elements
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor() {
    this.#words = Misc.getRandomWords();
    this.loadwords();
    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

  loadwords() {
    Elements.inputbox.value = "";
    Elements.wordcontainer.innerHTML = "";

    for (let word of this.#words) {
      Elements.wordcontainer.insertAdjacentElement("beforeend", word);
    }
  }
  
  get getwords() {
    return this.#words;
  }

  get totalwords() {
    return this.#words.length;
  }
  
  get totalcharacters() {
    let count = 0;
    for (let word of this.#words) {
      count += word.children.length;
    }
    return count;
  }

  // get active letter in string type
  get activeLetterValue() {
    return this.activeLetter.textContent;
  }


  get activeWordLength() {
    let word = this.activeWord.children;
    return word.length;
  }

  // get active word in string type
  get activeWordValue() {
    //       "⸱".charCodeAt(0) = 11825
    // "&nbsp;".charCodeAt(0) = 160
    let code = 0;
    let stringform = "";
    let word = this.activeWord.children;

    for (let letter of word) {
      code = letter.textContent.charCodeAt(0);
      if (code === 160 || code === 11825) {
        stringform += " ";
      } else {
        stringform += letter.textContent;
      }
    }
    return stringform;
  }

  // get word element
  get activeWord() {
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw `'currentWordIndex' is out of bound (${this.#currentWordIndex})`;
      }
      return this.#words[this.#currentWordIndex];
      
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  // get letter element
  get activeLetter() {
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw `'currentWordIndex' is out of bound (${this.#currentWordIndex})`;
      }

      if (
        this.#currentLetterIndex < 0 || 
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].children.length
      ) {
        throw `'currentLetterIndex' is out of bound (${ this.#currentLetterIndex })`;
      }
      return this.#words[this.#currentWordIndex].children[this.#currentLetterIndex];

    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  // getters (indexes)
  get activeWordIndex() {
    return this.#currentWordIndex;
  }
  get activeLetterIndex() {
    return this.#currentLetterIndex;
  }

  // setters (indexes)
  set activeWordIndex(index) {
    this.#currentWordIndex = index;
  }
  set activeLetterIndex(index) {
    this.#currentLetterIndex = index;
  }

  // increment letter & word indexes
  incrementLetterIndex() {
    this.#currentLetterIndex++;
  }
  incrementWordIndex() {
    this.#currentWordIndex++;
  }

  // decrement letter & word indexes
  decrementLetterIndex() {
    this.#currentLetterIndex--;
  }
  decrementWordIndex() {
    this.#currentWordIndex--;
  }

  // reset letter & word indexes
  resetIndexes() {
    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }
  resetActiveWordIndex() {
    this.#currentWordIndex = 0;
  }
  resetActiveLetterIndex() {
    this.#currentLetterIndex = 0;
  }
}

export default Sentence;