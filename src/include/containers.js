import { config } from "./config";
import * as Misc from "../utils/misc.js";

export const text = {
	word_text: [],
	word_element: [],
	index: 0,

	load(arrayOfWords) {
		this.word_text = arrayOfWords;
		this.word_element = createWordElementsFrom(arrayOfWords);
		this.index = 0;
	},
  length() {
		return this.word_element.length;
	},
	getWordIndex() {
		return this.index;
	},
	setWordIndexTo(i) {
		this.index = i;
	},
	decrementWordIndex() {
		this.index = this.index - 1;
	},
  incrementWordIndex() {
		this.index = this.index + 1;
	},
	previous_word() {
		if ( this.index < 0 ) throw this.index;
		return this.word_element[this.index - 1];
	},
  current_word() {
		if ( (this.index < 0) || (this.index > this.word_element.length - 1) ) throw this.index;
		return this.word_element[this.index];
	},
	next_word() {
		if ( this.index >= this.word_element.length - 1 ) throw this.index;
		return this.word_element[this.index + 1];
	},
	word_at(i) {
		if ( (i < 0) || (i > this.word_element.length - 1) ) throw i;
		return this.word_element[i];
	},
}

export const word = {
	letter_text: [],
	letter_element: [],
	index: 0,
	
	load(word, isPreviousWord = false) {

		this.letter_element = Array.from(word?.children);

		if ( isPreviousWord ) {
			this.index = this.letter.length - 1; // for previous word
		} else {
			this.index = 0; // for next/current word
		}
	},
	length() {
		return this.letter_element.length;
	},
	getLetterIndex() {
		return this.index;
	},
	setLetterIndexTo(index) {
		this.index = index;
	},
	decrementLetterIndex() {
		this.index = this.index - 1;
	},
  incrementLetterIndex() {
		this.index = this.index + 1;
	},
	previous_letter() {
		if ( this.index < 0 ) throw `index: ${this.index}`;
		return this.letter_element[this.index - 1];
	},
	current_letter() {
		if ( (this.index < 0) || (this.index > this.letter.length - 1) ) throw this.index;
		return this.letter_element[this.index];
	},
	next_letter() {
		if ( this.index >= this.letter_element.length - 1 ) throw this.index;
		return this.letter_element[this.index + 1];
	},
	letter_at(i) {
		if ( (i < 0) || (i > this.letter_element.length - 1) ) throw i;
		return this.letter_element[i];
	},

	insert() {},
	delete() {},
}