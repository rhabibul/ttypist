// Caret will have all the helper functions like goToNextWord, goToNextLetter,
// goToPreviousWord, goToPreviousLetter.
// All these function will be provide the sentence object as parameter.
import * as Caret from "./caret.js";

const teststats = {
  completed: 0,
  incompleted: 0,
};

// Test object will run the game
class Test {
  #stats;
  #timer;
  #sentence;
  #lastKeypressTimestamp; // performance.now();

  constructor() {
    this.#timer = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }

  // test.isOver()
  isOver() {
    return (sentence.activeLetterIndex() === sentence.activeWordLength()) && 
           (sentence.activeWordIndex() === sentence.totalwords());
  }
}

class History { }