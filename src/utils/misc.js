import { config } from "../include/config.js";
import * as HTMLElement from "../include/elements.js";
import w1k from "../../static/texts/dictionary/w1k.js";

export function totalLetterCount() {
  let cnt = 0;
  Array.from(document.getElementsByTagName("word")).forEach((word) => {
    cnt += word?.children.length;
  });
  return cnt;
}

export function getRandomWords() {
  let random_words = new Array(config.text.word.count);
  for (let i = 0; i < config.text.word.count; ++i) {
    random_words[i] = w1k[Math.floor(Math.random() * w1k.length)];
  }
  return random_words;
}

function wordContainingSpace() {
  let word = document.createElement("word");
  let letter = document.createElement("letter");    

  word.classList.add("whitespace")
  letter.classList.add(config.caret);
  
  if ( config.text.whitespace === "bullet" ) {
    letter.classList.add("bullet");
    letter.innerHTML = "&nbsp;";
  } else if ( config.text.whitespace === "bar" ) {
    letter.classList.add("bar");
    letter.innerHTML = "␣";
  } else if ( config.text.whitespace === "space" ) {
    letter.classList.add("space");
    letter.innerHTML = "&nbsp;";
  } else {
    letter.classList.add("off");
    letter.innerHTML = "";
  }
  
  word.appendChild(letter);

  return word;
}

export function createWordElementsFrom(words) {  

  let text = [];
  let word, letter;

  for (let i = 0; i < words.length; ++i) {
    word = document.createElement("word");
    for (let j = 0; j < words[i].length; ++j) {
      letter = document.createElement("letter");
      letter.textContent = words[i][j];
      letter.classList.add(config.caret);
      word.appendChild(letter);
    }
    text.push(word);
    text.push(wordContainingSpace());
  }

  return text;
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
		HTMLElement.textInputField.dispatchEvent(new KeyboardEvent("keydown", { key: s[i] }));
		HTMLElement.textInputField.dispatchEvent(new KeyboardEvent("keyup",   { key: s[i] }));
		++i;
		if ( i == s.length ) clearInterval(id);
	}, interval);
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

