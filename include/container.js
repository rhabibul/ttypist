import { config } from "../include/config.js";
import * as TypingAreaElements from "../src/elements/typing-area-element.js";

export class WordsContainer {
  #text;
  #word_elements;
  #word_index; // index of the word which needs to be typed

  constructor() {
    this.#text = new String();
    this.#word_elements = new Array();
    this.#word_index = new Number();
  }
	replaceTextWordsWith(latest) {
		this.#word_elements = latest;
		this.#word_index = 0;

		// reset input field and delete previous word elements in DOM
		TypingAreaElements.textInputField.value = "";
		TypingAreaElements.textContainerElement.innerHTML = "";

		// load word elements in DOM
		for ( const wordElement of this.#word_elements ) {
    	TypingAreaElements.textContainerElement.insertAdjacentElement("beforeend", wordElement);
    }
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
	letterElementsContainer: new Object(),
}