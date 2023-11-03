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
  raw() {
		return this.txt;
	},
  length() {
		return this.word.length;
	},
	self() {
		return this.word[0]?.parentElement;
	},
	word_at(i) {
		if ( (i < 0) || (i > this.word.length() - 1) ) throw "index out of bounds";
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
		if ( this.index < 0 ) throw `w[${this.index}] - no word before`;
		return this.word[this.index - 1];
	},
  current_word() {
		if ( (this.index < 0) || (this.index > this.word.length - 1) ) throw `w[${this.index}] index is out of bounds`
		return this.word[this.index];
	},
  next_word() {
		if ( this.index >= this.word.length - 1 ) throw `w[${this.index}] - no word after`;
		return this.word[this.index + 1];
	},
}

export const word = {
	txt: "",
	letter: [],
	index: 0,
	
	load(word, isPreviousWord = false) {

		this.letter = Array.from(word?.children);

		if ( !isPreviousWord ) {
			this.index = 0; // for next/current word
		} else {
			this.index = this.letter.length - 1; // for previous word
		}
	},
	raw() {
		return this.string;
	},
	length() {
		return this.letter.length;
	},
	self() {
		return this.letter[0]?.parentElement;
	},
	letter_at(index) {
		if ( index < 0 || index > this.length() - 1 ) throw `letter[${this.index}] index out of bound`;
		return this.letter[index];
	},
	setLetterIndexTo(index) {
		this.index = index;
	},
	resetLetterIndex() {
		this.index = 0;
	},
	decrementLetterIndex() {
		this.index = this.index - 1;
	},
  incrementLetterIndex() {
		this.index = this.index + 1;
	},
	previous_letter() {},
	current_letter() {},
	next_letter() {},
}