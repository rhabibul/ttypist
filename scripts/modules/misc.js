import Config from "./config.js";
import w3k from "./w3k.js";
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
    randomindex = Math.floor(Math.random() * w3k.length);
    words[i] = w3k[randomindex];
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
    letter.classList.add("whitespace");
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

function getsentence() {
	let s = "";
  let words = document.getElementsByTagName('word');
	for ( let word of words ) {
		let letters = word.children;
		for ( let letter of letters ) {
			if ( letter.textContent.charCodeAt(0) === 160 ) {
				s += " ";
			} else {
				s += letter.textContent;
			}
		}
	}
  return s;
}

function automatetyping(keystroke_time) {
	
	let id, i = 0;
	let s = getsentence();

	id = setInterval(() => {
		Elements.inputbox.dispatchEvent(new KeyboardEvent("keydown", {key: `${s[i]}`}));
		Elements.inputbox.value += s[i];
		++i;
		if ( i == s.length - 1 ) {
			clearInterval(id);
		}
	}, keystroke_time);	
}

export { getRandomWords, convertToWordElements, charcode, showspeed, getsentence, automatetyping };