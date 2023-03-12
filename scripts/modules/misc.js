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

  if (Config.sentence.include.digits) {  };
  if (Config.sentence.include.punctuations) {  };

  let words = new Array(Config.sentence.word.count);

  for (let i = 0; i < Config.sentence.word.count; ++i) {
    words[i] = w3k[Math.floor(Math.random() * w3k.length)];
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
      letter.classList.add(Constants.carettypes[Config.caret.type]);
      
      word.appendChild(letter);
    }

    letter = document.createElement("letter"); // for letter with space/dot
    letter.classList.add("whitespace"); // used when changing whitespace (space/dot)
    if ( Config.sentence.whitespace == Constants.whitespace.space ) {
      letter.innerHTML = `${Config.sentence.whitespace}`;
    } else {
      letter.innerHTML = `<span id="whitespace-dot" style="width: 100%; height: 100%">${Config.sentence.whitespace}</span>`;
    }
    letter.classList.add(Constants.carettypes[Config.caret.type]);
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

export { 
  getRandomWords,
  convertToWordElements,
  charcode,
  showspeed,
  getsentence,
  automatetyping
};