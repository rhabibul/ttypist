import { config } from "../../include/config.js";
import * as TypingAreaElements from "../elements/typing-area-element.js";
// import w3k from "../../static/texts/words/w3k.js";
import w1k from "../../static/texts/words/w1k.js";
// import rootword from "../../static/texts/words/root-words.js";

export function isspace(letter) {
  return letter?.textContent.charCodeAt(0) === 160;
}

export function NodeList(cssQueryString) {
  return document.querySelectorAll(cssQueryString);
}

export function HTMLCollection(name, option) {
  if ( option?.tagname ) {
    return document.getElementsByTagName(name);
  } else if ( option?.classname ) {
    return document.getElementsByClassName(name);
  } else {
    console.error("wrong option provided to get HTMLCollection (only classname/tagname is valid)");
  }
}

export function totalchar() {
  let cnt = 0;
  Array.from(HTMLCollection("word", { tagname: true })).forEach((word) => {
    cnt += word?.children.length;
  });
  return cnt;
}

export function randomwords() {
  // modify the string here with all config options like capitalizations of letters
  // word type, word length, word count etc
  let words = new Array(config.text.word.count);
  for (let i = 0; i < config.text.word.count; ++i) {
    // words[i] = rootword[Math.floor(Math.random() * rootword.length)];
    words[i] = w1k[Math.floor(Math.random() * w1k.length)];
    // words[i] = w3k[Math.floor(Math.random() * w3k.length)];
  }
  return words;
}

export function wordelements(s) {  

  let wordarray = new Array();
  let word, letter;

  for (let i = 0; i < s.length; ++i) {
    
    word = document.createElement("word");
    
    for (let j = 0; j < s[i].length; ++j) {
      letter = document.createElement("letter");
      letter.textContent = s[i][j];
      letter.classList.add(config.caret.style);
      word.appendChild(letter);
    }

    wordarray.push(word);

    if ( config.quickend && (i === s.length - 1) ) return wordarray;

    // create a word which will only contain a letter with whitespace in it
    word = document.createElement("word");
    letter = document.createElement("letter");    

    letter.classList.add(config.caret.style);
    letter.classList.add("whitespace");
    
    if ( config.text.whitespace.type.bullet ) {
      letter.classList.add("bullet");
      letter.innerHTML = "&nbsp;";
    } else if ( config.text.whitespace.type.bar ) {
      letter.classList.add("bar");
      letter.innerHTML = "␣";
    } else if ( config.text.whitespace.type.space ) {
      letter.classList.add("space");
      letter.innerHTML = "&nbsp;";
    } else {
      letter.classList.add("off");
      letter.innerHTML = "";
    }
    
    word.appendChild(letter);
    wordarray.push(word);
  }

  return wordarray;
}

export function autotyper(wpm, till = -1) {
	let i = 0, id = 0, s = "";
  const letters = document.getElementsByTagName("letter");
  const interval = (60000 / (wpm * 5));
	for ( const l of letters ) {
		if ( l.textContent.charCodeAt(0) === 160 ) {
			s += " ";
		} else {
			s += l.textContent;
		}
	}
	id = setInterval(() => {
    // keep some delay between keydown & keyup to avoid getting caught by cheat detector
		TypingAreaElements.input.dispatchEvent(new KeyboardEvent("keydown", { key: s[i] }));
		TypingAreaElements.input.dispatchEvent(new KeyboardEvent("keyup",   { key: s[i] }));
		++i;
		if ( i == s.length ) clearInterval(id);
	}, interval);
}

export function deviceinformation() {
  return navigator.userAgent;
}

export function tolower(letter) { // Lowercase: 0'11'?????
  return String.fromCharCode(letter.charCodeAt(0) | (1 << 5));
}

export function toupper(letter) { // Uppercase: 0'10'?????
  return String.fromCharCode(letter.charCodeAt(0) & (~(1 << 5)));
}

export function binaryof(value) {
  return Number(value).toString(2);
}

export function storeConfigInLocalStorage() {
  window.localStorage.setItem('config', JSON.stringify(config));
}

