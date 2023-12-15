import { config } from "./config.js";
import * as Misc from "../utils/misc.js";
import * as HTMLElement from "./elements.js";
import * as UIController from "../controllers/UIController.js";

export const text = {
	word_text: [],
	word_element: [],
	index: 0,

	load_words() {
		this.index = 0;
		this.word_element = Misc.createWordElementsFrom(Misc.getRandomWords());
		for ( const word of this.word_element ) {
			this.word_text.push(word.textContent);
		}
		UIController.loadWordElementsInDOM(this.word_element);
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
	getWordAt(i) {
		if ( (i < 0) || (i > this.word_element.length - 1) ) throw i;
		return this.word_element[i];
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
}

export const word = {
	letter_text: [],
	letter_element: [],
	index: 0,
	
	load_letters(word, isPreviousWord = false) {

		for ( const letter of word.children ) {
			this.letter_text.push(letter.textContent);
		}

		this.letter_element = Array.from(word?.children);

		if ( isPreviousWord ) {
			this.index = this.letter_element.length - 1; // for previous word
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
		if ( (this.index < 0) || (this.index > this.letter_element.length - 1) ) throw this.index;
		return this.letter_element[this.index];
	},
	next_letter() {
		if ( this.index >= this.letter_element.length - 1 ) throw this.index;
		return this.letter_element[this.index + 1];
	},
	getLetterAt(i) {
		if ( (i < 0) || (i > this.letter_element.length - 1) ) throw i;
		return this.letter_element[i];
	},

	insert() {},
	delete() {},
}