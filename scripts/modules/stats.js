
/**
 *      wpm: ((correctchars / 5) / 60)
 *   rawwpm: ((correctchars + incorrectchars + extrachars) / 5) / 60)
 * accuracy: (correctchars / (correctchars + incorrectchars)) * 100)
 * 
 * Gross Words (typed words):
 * This is the total number of words typed by the candidate; it includes 
 * both correct and incorrect words. Gross words per minnute is total 
 * number of words typed in one minute.
 * 
 * gwpm = (gross words)/(time taken in minutes)
 * 
 * Net words (correct words): The number of correct words typed.
 * nwpm = (net words)/(time taken in minutes)
 * 
 * Accuracy: 
 * The number of correct words entered, calculated as (nwpm * 100)/(gwpm)
 * 
**/

const teststats = {
  completed: 0,
  incompleted: 0,
};
const charstats = {
  extra: 0,
  totalchars: 0,
  correct: 0,
  incorrect: 0,
};
const wordstats = {
  totalwords: 0,
  correct: 0,
  incorrect: 0,
  wordscorrected: 0,
};

class Stats {
  #nwpm; // net wpm
  #gwpm; // gross wpm
}
class History { }
