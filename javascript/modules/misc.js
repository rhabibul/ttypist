import * as Const from "./const.js";
import * as Element from "./element.js"
// import w3k from "./w3k.js";
import w1k from "./w1k.js";
import Config from "./config.js";

function showspeed(cnt, time) {
  const wpm = ((cnt / 5) / (time)) * 60;
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

function wordelements(s) {  

  let wordarray = new Array();
  let word, letter;

  for (let i = 0; i < s.length; ++i) {

    // create a word which has no letter which contains
    word = document.createElement("word");
    for (let j = 0; j < s[i].length; ++j) {
      letter = document.createElement("letter");
      letter.textContent = s[i][j];
      letter.classList.add(Config.caret.type);
      word.appendChild(letter);
    }
    wordarray.push(word);

    if ( !Config.endtestwithspace && (i === s.length - 1) ) return wordarray;

    // create a word which will only contain a letter with whitespace in it
    word = document.createElement("word");
    letter = document.createElement("letter");
    letter.classList.add("whitespace");
    letter.classList.add(Config.caret.type);
    if ( Config.whitespace.character === Const.whitespace.space.character ) {
      letter.innerHTML = `${Config.whitespace.character}`;
    } else if ( Config.whitespace.character === Const.whitespace.dot.character ) {
      letter.innerHTML = `<span id="wdot">${Config.whitespace.character}</span>`;
    } else {
      // bar whitespace, but first add proper styling to bar character
    }
    word.appendChild(letter);
    wordarray.push(word);
  }

  return wordarray;
}

function getsentence() {
	let s = "", ws_code = 0;
  let words = document.getElementsByTagName('word');
	for ( let word of words ) {
		let letters = word.children;
		for ( let letter of letters ) {
      ws_code = letter.textContent.charCodeAt(0);
			if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
				s += " ";
			} else {
				s += letter.textContent;
			}
		}
	}
  return s;
}
function lettertagtext(letter) {
  const ws_code = letter.textContent.charCodeAt(0);
  if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) return " ";
  return letter.textContent;
}
function wordtagtext(word) {
  let ws_code = 0, text = new String();
  for ( const letter of word.children ) {
    ws_code = letter.textContent.charCodeAt(0);
    if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
      text += " ";
    } else {
      text += letter.textContent;
    }
  }
  return text;
}
function validsentence(sentence) {
  // sentence type must be object i.e, array and it should not be empty,
  // every string should be in <word></word> tag and every character should
  // be in <letter></letter> tag and no letter tag must contain more than
  // one character
  const validtype = typeof(sentence) === "object";
  const notempty = sentence.length > 0;
  const validwordtags = sentence.every((word) => word.tagName === "WORD");
  const validlettertags = sentence.every((word) => {
    return Array.from(word?.children).every((letter) => {
      return letter.tagName === "LETTER" && letter.textContent.length === 1;
    });
  });
  if (validtype && notempty && validwordtags && validlettertags) return true;
  return false;
}

function automatetyping(keystroke_time) {
	
	let id, i = 0;
	let s = getsentence();

	id = setInterval(() => {
		Element.input.dispatchEvent(new KeyboardEvent("keydown", {key: s[i]}));
		Element.input.value += s[i];
		++i;
		if ( i == s.length - 1 ) clearInterval(id);
	}, keystroke_time);	
}

function os() {
  let s = navigator.userAgent;
}
function tolower(letter) { // Lowercase: 0'11'?????
  return String.fromCharCode(letter.charCodeAt(0) | (1 << 5));
}
function toupper(letter) { // Uppercase: 0'10'?????
  return String.fromCharCode(letter.charCodeAt(0) & (~(1 << 5)));
}
function binaryof(value) {
  return Number(value).toString(2);
}

export { 
  randomwords,
  wordelements,
  
  lettertagtext,
  wordtagtext,
  
  tolower,
  toupper,
  binaryof,

  validsentence,

  os,

  showspeed,
  getsentence,
  automatetyping
};