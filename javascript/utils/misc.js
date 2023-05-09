import Config from "../include/config.js";

import w1k from "../static/w1k.js";
import w3k from "../static/w3k.js";
import rootword from "../static/rootword.js";

import * as Const from "../include/constant.js";
import * as ConfigHandler from "../handler/confighandler.js";
import * as MiscElement from "../HTMLElement/MiscElement.js";
import * as SettingElement from "../HTMLElement/SettingElement.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

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

export function showspeed(lettercount, time) {
  const wpm = ((lettercount / 5) / (time)) * 60;
  MiscElement.speed.style.color = "deeppink";
  MiscElement.speed.textContent = `${Math.ceil(wpm)}wpm`;
  setTimeout(() => {
    MiscElement.speed.style.color = "lightgray";
  }, 2500);
}

export function randomwords() {
  let words = new Array(Config.phrase.word.count);
  for (let i = 0; i < Config.phrase.word.count; ++i) {
    // words[i] = w1k[Math.floor(Math.random() * w1k.length)];
    words[i] = w3k[Math.floor(Math.random() * w3k.length)];
    // words[i] = rootword[Math.floor(Math.random() * rootword.length)];
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
    letter.innerHTML = `&nbsp;`;
    
    word.appendChild(letter);
    wordarray.push(word);
  }

  return wordarray;
}

export function wordtags_tostring() {
	let s = "", ws_code = 0;
  let words = HTMLCollection("word", { tagname: true });
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

export function validphrase(phrase) {
  // phrase type must be object i.e, array and it should not be empty,
  // every string should be in <word></word> tag and every character should
  // be in <letter></letter> tag and no letter tag must contain more than
  // one character
  const validtype = typeof(phrase) === "object";
  const notempty = phrase.length > 0;
  const validwordtags = phrase.every((word) => word.tagName === "WORD");
  const validlettertags = phrase.every((word) => {
    return Array.from(word?.children).every((letter) => {
      return letter.tagName === "LETTER" && letter.textContent.length === 1;
    });
  });
  if (validtype && notempty && validwordtags && validlettertags) return true;
  return false;
}

export function startautotyper(wpm) {

  const keystroke_interval = 60000/ (wpm * 5);
	const letters = document.getElementsByTagName("letter");
	let i = 0, id = 0, s = "";

	for ( const l of letters ) {
		if ( l.textContent.charCodeAt(0) === 160 ) {
			s += " ";
		} else {
			s += l.textContent;
		}
	}

	setInterval(() => {
		TestAreaElement.input.dispatchEvent(new KeyboardEvent("keydown", {key: s[i]}));
    // keep some delay between keydown & keyup to avoid getting caught
		TestAreaElement.input.dispatchEvent(new KeyboardEvent("keyup", {key: s[i]}));
		++i;
		if ( i == s.length - 1 ) clearInterval(id);
	}, keystroke_interval);
}

export function deviceinformation() {
  let s = navigator.userAgent;
  return { os: "", devicetype: "" };
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

export const computedstyles = getComputedStyle(MiscElement.root);

export function storeConfigInLocalStorage() {
  window.localStorage.setItem('Config', JSON.stringify(Config));
}

export function loadconfig(localconfig) {
  if ( typeof(localconfig) !== 'object' ) return;
  Config.caret.off = localconfig.caret.off;
  Config.caret.type = localconfig.caret.type;
}