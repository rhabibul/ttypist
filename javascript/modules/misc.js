import * as CONST from "./const.js";
import * as Element from "./element.js"
// import w3k from "./w3k.js";
import w1k from "./w1k.js";
import Config from "./config.js";

function charcode(char) {
  
  if ( char === CONST.whitespace.space ) return 160;
  if ( char === CONST.whitespace.dot) return 11825;

  return char.charCodeAt(0);
}

function showspeed(sentence, time) {

  const wpm = (((sentence.letterCount - 1) / 5) / (time.duration)) * 60;

  Element.speedtag.style.color = "deeppink";
  Element.speedtag.textContent = `${Math.ceil(wpm)}wpm`;
  
  setTimeout(() => {
    Element.speedtag.style.color = "lightgray";
  }, 2500);
}

function randomwords() {

  if (Config.sentence.include.digits) {  };
  if (Config.sentence.include.punctuations) {  };

  let words = new Array(Config.sentence.word.count);

  for (let i = 0; i < Config.sentence.word.count; ++i) {
    words[i] = w1k[Math.floor(Math.random() * w1k.length)];
  }
  return words;
}

function wordelementsfrom(wordsInStringForm) {  

  let wordelements = new Array(wordsInStringForm.length);
  let word, letter;

  for (let i = 0; i < wordsInStringForm.length; ++i) {

    word = document.createElement("word");

    for (let j = 0; j < wordsInStringForm[i].length; ++j) {

      letter = document.createElement("letter");
      letter.textContent = wordsInStringForm[i][j];
      letter.classList.add(CONST.caret[Config.caret.type]);
      
      word.appendChild(letter);
    }

    // letter with whitespace
    letter = document.createElement("letter");
    letter.classList.add(CONST.caret[Config.caret.type]);
    letter.classList.add("whitespace");

    if ( Config.sentence.whitespace == CONST.whitespace.space ) {
      letter.innerHTML = `${Config.sentence.whitespace}`;
    } else {
      letter.innerHTML = `<span id="wdot">${Config.sentence.whitespace}</span>`;
    }
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
			if ( letter.textContent.charCodeAt(0) === 160 || letter.textContent.charCodeAt(0) === 11825 ) {
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
		Element.input.dispatchEvent(new KeyboardEvent("keydown", {key: `${s[i]}`}));
		Element.input.value += s[i];
		++i;
		if ( i == s.length - 1 ) {
			clearInterval(id);
		}
	}, keystroke_time);	
}

function operatingsystem() {
  let s = navigator.userAgent;
}

function tolower(letter) {
  return String.fromCharCode(letter.charCodeAt(0) | (1 << 5));
}

function toupper(letter) {
  return String.fromCharCode(letter.charCodeAt(0) & (~(1 << 5)));
}

export { 
  randomwords,
  wordelementsfrom,
  charcode,
  showspeed,
  getsentence,
  automatetyping
};