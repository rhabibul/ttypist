import { config } from "../include/config.js";
import * as TypingAreaElements from "../src/elements/typing-area-element.js";

export class WordsContainer {
  #text;
  #word_elements;
  #word_index; // index of the word which needs to be typed

  constructor() {
    this.#text = "";
    this.#word_elements = [];
    this.#word_index = 0;
  }
	replaceTextWordsWith(latest) {
		// 1. update previous words with new one and reset word index
		// 2. reset input field and delete previous word elements in DOM
		// 3. load new word elements in DOM
	}
	resetCurrentWordIndex() {
		this.#word_index = 0;
	}
	decrementWordElementIndex() {
		this.#word_index = this.#word_index - 1;
	}
  incrementWordElementIndex() {
		this.#word_index = this.#word_index + 1;
	}
  get raw_text() {
		return this.#text;
	}
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
  get wordAtIndex() {}
}

export const word = {
	text: "",
	letter_elements: [],
	letter_index: 0,
}