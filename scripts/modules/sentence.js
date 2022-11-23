import Config from "./Config.js";
import randomWordsGenerator from "./misc.js";

class Sentence {
  #words; // array of strings
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor(words) {
    // expects an 1D array of strings

    if ( arguments.length === 0 ) {

    } else {
      if ( typeof(words) === 'string' ) {
        this.#words = words.split(' ');
      } else {
        this.#words = Array.from(words); // for node list
      }
    }

    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

  showwords() {
    console.log(this.#words);
  }

  push_front(...words) {
    for (let word of words) {
      this.#words.unshift(word);
    }
  }
  push_back(...words) {
    for (let word of words) {
      this.#words.push(word);
    }
  }
  pop_front() {
    return this.#words.shift();
  }
  pop_back() {
    return this.#words.pop();
  }

  get totalwords() {
    // return the total number of words present in words array
    return this.#words.length;
  }

  get activeWord() {
    // returns the active word
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

  get activeLetter() {
    // returns the active letter
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw `'currentWordIndex' is out of bound (${this.#currentWordIndex})`;
      }

      if (
        this.#currentLetterIndex < 0 ||
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].length
      ) {
        throw `'currentLetterIndex' is out of bound (${this.#currentLetterIndex})`;
      }

      return this.#words[this.#currentWordIndex][this.#currentLetterIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeWordLength() {
    // returns length of active word
    return this.#words[this.#currentWordIndex].length;
  }

  get activeWordIndex() {
    // returns active word's index
    return this.#currentWordIndex;
  }
  get activeLetterIndex() {
    // returns active letter's index of active word
    return this.#currentLetterIndex;
  }

  set activeWordIndex(index) {
    // set new index for active word
    this.#currentWordIndex = index;
  }
  set activeLetterIndex(index) {
    // set new index for active letter of active word
    this.#currentLetterIndex = index;
  }

  resetActiveWordIndex() {
    this.#currentWordIndex = 0;
  }
  resetActiveLetterIndex() {
    this.#currentLetterIndex = 0;
  }
  resetindexes() {
    this.resetActiveWordIndex();
    this.resetActiveLetterIndex();
  }

  goToNextLetter() {
    this.#currentLetterIndex++;
  }
  goToPreviousLetter() {
    this.#currentLetterIndex--;
  }
  goToNextWord() {
    this.#currentWordIndex++;
  }
  goToPreviousWord() {
    this.#currentWordIndex--;
  }
}

class WordsCorrected {}
class WordsNotCorrected {}

export default Sentence;
