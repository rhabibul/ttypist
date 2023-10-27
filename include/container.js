import { config } from "../include/config.js";
import * as TypingAreaElements from "../src/elements/typing-area-element.js";

export const text = {
	string: "",
	word_elements: [],
	word_index: 0, // index of the word which is being currently typed

	replaceTextWordsWith(latest) {
		// 1. update previous words with new one and reset word index
		// 2. reset input field and delete previous word elements in DOM
		// 3. load new word elements in DOM
	},
  raw() {
		return this.string;
	},
  get length() {
		return this.#word_elements.length;
	}
  get word_index() {
		return this.#word_index;
	}
  set word_index(index) {
		this.#word_index = index;
	}
  get previous_word() {}
  get current_word() {}
  get next_word() {}

	at(index) {
		if ( index < 0 || index > this.length() - 1 ) return;
		return this.letter_elements[index];
	}
	resetWordIndex() {
		this.#word_index = 0;
	}
	decrementWordIndex() {
		this.#word_index = this.#word_index - 1;
	}
  incrementWordIndex() {
		this.#word_index = this.#word_index + 1;
	}
}

export const word = {
	string: "",
	letter_elements: [],
	letter_index: 0,
	
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
	resetLetterIndex() {
		this.#word_index = 0;
	},
	decrementLetterIndex() {
		this.#word_index = this.#word_index - 1;
	},
  incrementLetterIndex() {
		this.#word_index = this.#word_index + 1;
	}
}