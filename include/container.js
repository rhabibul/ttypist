import { config } from "../include/config.js";
import * as TypingAreaElements from "../src/elements/typing-area-element.js";

export const text = {
	txt: "",
	word: [],
	index: 0,

	load(text) {
		// 1. update previous words with new one and reset word index
		// 2. reset input field and delete previous word elements in DOM
		// 3. load new word elements in DOM
	},
  text() {
		return this.string;
	},
  length() {
		return this.word.length;
	},
	at(i) {
		if ( (i < 0) || (i > this.length() - 1) ) return;
		return this.word[i];
	},
	setWordIndexTo(index) {
		this.index = index;
	},
	resetWordIndex() {
		this.index = 0;
	},
	decrementWordIndex() {
		this.index = this.index - 1;
	},
  incrementWordIndex() {
		this.index = this.index + 1;
	},
	previous_word() {
		if ( this.index - 1 >= 0 ) {

		} 
	},
  current_word() {},
  next_word() {},
}

export const word = {
	txt: "",
	letter: [],
	index: 0,
	
	load(word, isPreviousWord = false) {

		this.letter_elements = Array.from(word?.children);

		if ( !isPreviousWord ) {
			this.letter_index = 0; // next/current word
		} else {
			this.letter_index = this.letter_elements.length - 1; // previous word
		}
	},
	text() {
		return this.string;
	},
	length() {
		return this.letter_elements.length;
	},
	self() {
		return this.letter_elements[0]?.parentElement;
	},
	at(index) {
		if ( index < 0 || index > this.length() - 1 ) return;
		return this.letter_elements[index];
	},
	setLetterIndexTo(index) {
		this.index = index;
	},
	resetLetterIndex() {
		this.#word_index = 0;
	},
	decrementLetterIndex() {
		this.#word_index = this.#word_index - 1;
	},
  incrementLetterIndex() {
		this.#word_index = this.#word_index + 1;
	},
	previous_letter() {},
	current_letter() {},
	next_letter() {},
}