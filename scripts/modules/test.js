// Caret will have all the helper functions like goToNextWord, goToNextLetter,
// goToPreviousWord, goToPreviousLetter.
// All these function will be provide the sentence object as parameter.
import * as Caret from "./caret.js";

// Test object will run the game
class Test {
  #testStarted; // boolean
  #lastKeypressedTimestamp; // performance.now();
  #stats;
  #timer;
  #sentence;

  constructor() {
    this.#timer = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }

  // test.complete()
  complete() {
    return (sentence.activeLetterIndex() === sentence.activeWordLength()) && (sentence.activeWordIndex() === sentence.totalwords());
  }
}

class History { }