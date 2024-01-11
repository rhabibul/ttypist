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
		this.word_text = [];
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
	previous_word(flag = false) {
		if ( this.index < 0 ) {
			throw `OUT-OF-BOUNDS: No word at this (${this.index}) index.`;
		}
		if ( flag ) {
			return this.word_text[this.index - 1];
		} else {
			return this.word_element[this.index - 1];
		}
	},
  current_word(flag = false) {
		if ( (this.index < 0) || (this.index > this.word_element.length - 1) ) {
			throw `OUT-OF-BOUNDS: No word at this (${this.index}) index.`;
		}
		if ( flag ) {
			return this.word_text[this.index];
		} else {
			return this.word_element[this.index];
		}
	},
	next_word(flag = false) {
		if ( this.index >= this.word_element.length - 1 ) {
			throw `OUT-OF-BOUNDS: No word at this (${this.index}) index.`;
		}
		if ( flag ) {
			return this.word_text[this.index + 1];
		} else {
			return this.word_element[this.index + 1];
		}
	},
	getWordAt(i, flag = false) {
		if ( (i < 0) || (i > this.word_element.length - 1) ) {
			throw `OUT-OF-BOUNDS: No word at this (${i}) index.`;
		}
		if ( flag ) {
			return this.word_text[i];
		} else {
			return this.word_element[i];
		}
	},
}

export const word = {
	letter_element: [],
	index: 0,
	
	load_letters(word, isPreviousWord = false) {
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
		if ( this.index <= 0 ) throw `No previous letter available (index: ${this.index}).`;
		return this.letter_element[this.index].previousElementSibling;
	},
	current_letter(flag = false) {
		if ( (this.index < 0) || (this.index > this.letter_element.length - 1) ) {
			throw `OUT-OF-BOUNDS: No letter at this (${this.index}) index.`;
		}
		if ( flag ) {
			return this.letter_element[this.index].textContent;
		} else {
			return this.letter_element[this.index];
		}
	},
	next_letter() {
		if ( this.index >= this.letter_element.length - 1 ) throw `No next letter available (index: ${this.index})`;
		return this.letter_element[this.index].nextElementSibling;
	},
	getLetterAt(i, flag = false) {
		if ( (i < 0) || (i > this.letter_element.length - 1) ) {
			throw `OUT-OF-BOUNDS: No letter at this (${i}) index.`;
		}
		if ( flag ) {
			return this.letter_text[i];
		} else {
			return this.letter_element[i];
		}
	},
}