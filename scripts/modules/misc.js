import Config from "./config.js";
import words1k from "./words1k.js";
import words3k from "./words3k.js";
import * as Constants from "./constants.js";

const firstsentence = "the quick brown fox jumps over the lazy dog";

function charcode(char) {
  if ( char === Constants.whitespace.space ) return 160;
  if ( char === Constants.whitespace.dot) return 11825;
  return char.charCodeAt(0);
}

function getRandomWords() {
  if (Config.firsttest) {
    Config.firsttest = false;
    return convertToWordElements(firstsentence.split(" "));
  }

  let words = new Array(Config.wordcount);
  let randomindex = 0;

  for (let i = 0; i < Config.wordcount; ++i) {
    randomindex = Math.floor(Math.random() * words1k.length);
    words[i] = words1k[randomindex];
  }

  return convertToWordElements(words);
}

function convertToWordElements(wordsInStringForm) {
  let wordelements = new Array(wordsInStringForm.length);
  let word, letter;

  for (let i = 0; i < wordsInStringForm.length; ++i) {
    word = document.createElement("word");

    for (let j = 0; j < wordsInStringForm[i].length; ++j) {
      letter = document.createElement("letter");
      letter.textContent = wordsInStringForm[i][j];
      letter.classList.add(Constants.carettypes[Config.caret]);
      word.appendChild(letter);
    }

    letter = document.createElement("letter"); // letter with space/dot
    letter.innerHTML = `${Config.wordseparator}`;
    letter.classList.add(Constants.carettypes[Config.caret]);
    word.appendChild(letter);

    wordelements[i] = word;
  }

  return wordelements;
}

export { getRandomWords, convertToWordElements, charcode };