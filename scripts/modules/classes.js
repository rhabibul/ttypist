let testHasStarted = true;

const wordstats = {
  correct: 0,
  incorrect: 0,
  missed: 0,
};

class History {

  #tests;
  constructor() {
    this.#tests = new Array();
  }

  totaltests() {
    return this.#tests.length;
  }
}

class Timer {
  #testStartTime;
  #testEndTime;

  constructor() {
    this.#testStartTime = 0;
    this.#testEndTime = 0;
  }

  startTimer() {
    this.#testStartTime = performance.now();
  }
  stopTimer() {
    this.#testEndTime = performance.now();
  }
  testDuration() {
    return this.#testStartTime - this.#testEndTime;
  }
}

class Stats {
  #wpm;
  #cpm;
  #raw;
  #accuracy;

  constructor() {
    this.#cpm = 0;
    this.#wpm = 0;
    this.#raw = 0;
    this.#accuracy = 0;
  }
}

class Test {
  #stats;
  #sentence;
  #time;

  constructor() {
    this.#time = new Timer();
    this.#stats = new Stats();
    this.#sentence = new Sentence();
  }
}

class Sentence {
  #words; // array of strings
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor(words) {
    // expects an 1D array of strings

    if (arguments.length === 0) {
      this.#words = new Array();
    } else {
      this.#words = Array.from(words);
    }

    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

  showwords() {
    console.log(this.#words.join(" "));
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
    // return the active word
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeLetter() {
    // return the active letter
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      if (
        this.#currentLetterIndex < 0 ||
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].length
      ) {
        throw "'currentLetterIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex][this.#currentLetterIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeWordLength() {
    // return length of active word
    return this.#words[this.#currentWordIndex].length;
  }

  get activeWordIndex() {
    // return active word's index
    return this.#currentWordIndex;
  }
  set activeWordIndex(index) {
    // set new index for active word
    this.#currentWordIndex = index;
  }

  get activeLetterIndex() {
    // return active letter's index
    return this.#currentLetterIndex;
  }
  set activeLetterIndex(index) {
    // set new index for active letter in active word
    this.#currentLetterIndex = index;
  }

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

/**
 * Gross Words
 * Total number of words typed by user (correct + incorrect)
 *
 * 				GWPM = (gross words) / (time taken in mins)
 * 
 * Net Words
 * Total number of corrects words typed by the user
 * 
 * 				NWPM = (net words) / (time taken in mins)
 * 
 * Accuracy
 * The number of correct words entered
 * 				Acc = (NWPM / GWPM) * 100
 * Note that all errors, whether corrected or not, should be 
 * counted in the accuracy calculation, unlike the net WPM 
 * calculation.
 * 
 * https://www.speedtypingonline.com/typing-equations
 * 
 * With no error penalties:
 * Include spaces, numbers, letters & punctuations but ignore function 
 * keys like backspace, ctrl, alt, meta, shift etc.
 * 				Gross WPM = ((all typed entries) / 5) / (time in minutes)
 * 
 * Error rate = (errors left) / (total time taken for typing all words)
 * 
 * Net WPM = [((all typed entries) / 5) - (uncorrected errors)] / (time in mins)
 * 				 = [(total words) - (uncorrect errors)] / (time in mins)
 *
**/