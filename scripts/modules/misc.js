import Config from "./config.js";
import words1k from "./words1k.js";
import words3k from "./words3k.js";
import * as Elements from "./elements.js"
import * as Constants from "./constants.js";

function charcode(char) {
  if ( char === Constants.whitespace.space ) return 160;
  if ( char === Constants.whitespace.dot) return 11825;
  return char.charCodeAt(0);
}

function showspeed(sentence, time) {

  const wpm = (((sentence.letterCount - 1) / 5) / (time.duration)) * 60;

  Elements.speedtag.style.color = "deeppink";
  Elements.speedtag.style.fontWeight = "400";
  Elements.speedtag.textContent = `${Math.ceil(wpm)}wpm`;
  
  setTimeout(() => {
    Elements.speedtag.style.color = "lightgray";
  }, 2500);
}

function getRandomWords() {

  if (Config.sentence.numbers) {  };
  if (Config.sentence.punctuations) {  };
  
  let totalwords = Config.sentence.wordcount;
  let words = new Array(totalwords);
  let randomindex = 0;

  for (let i = 0; i < totalwords; ++i) {
    randomindex = Math.floor(Math.random() * words1k.length);
    words[i] = words1k[randomindex];
    // randomindex = Math.floor(Math.random() * words3k.length);
    // words[i] = words3k[randomindex];
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

    // avoid addition of space/dot on last word of the sentence 
    // if ( i !== wordsInStringForm.length - 1 ) { 
    //   // bug: test ends after typing 2nd last character of last word
    // }

    letter = document.createElement("letter"); // for letter with space/dot
    if ( Config.sentence.wordseparator == Constants.whitespace.space ) {
      letter.innerHTML = `${Config.sentence.wordseparator}`;
    } else {
      letter.innerHTML = `<span class="wordseparator_dot">${Config.sentence.wordseparator}</span>`;
    }
    letter.classList.add(Constants.carettypes[Config.caret]);
    word.appendChild(letter);

    wordelements[i] = word;
  }

  return wordelements;
}

export { getRandomWords, convertToWordElements, charcode, showspeed };