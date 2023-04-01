/**
 * grosswords (typed words):
 * This is the total number of words typed by the candidate; it includes 
 * both correct and incorrect words. Gross words per minnute is total 
 * number of words typed in one minute. ((gross words)/(time taken in minutes))
 * 
 * networds: The number of correct words typed ((net words)/(time taken in minutes))
 * accuracy: The number of correct words typed, calculated as ((nwpm * 100)/(gwpm))
 * 
 *     netwpm: ((correctchars / 5) / 60)
 *   grosswpm: ((correctchars + incorrectchars) / 5) / 60)
 *   accuracy: ((correctchars) / (correctchars + incorrectchars)) * 100)
 * 
 * 
 *   correct? -> typed character which is     equal to active letter. (count)
 * incorrect? -> typed character which is not equal to active letter. (count)
**/

let accuracy = 0;   // acc
let netspeed = 0;   // wpm: ((correct / 5) / 60)
let grossspeed = 0; // raw: (((correct + incorrect + extra) / 5) / 60)

function compute() {} // Call it on every keystoke when live update speed & accuracy is turned on.

let wordstatus = {
  word: "",
  typosLeft: false,
  typosCorrected: false,
  typedCorrectly: false,
  
  char: {
    extra: 0,
    correct: 0,
    incorrect: 0,
  }
}

class History {
  #testcount;
  #stats;
  #sentences;
  
  constructor() {
    this.#stats = new Array(), // stores stats for corresponding for sentences
    this.#sentences = new Array(), // stores all sentences typed by user

    this.#testcount = new Object({
      completed: 0, // should be equal to sentences.length and stats.length
      notcompleted: 0, // can be greater/less/equal to sentence.length and stats.length
    })
  }
}