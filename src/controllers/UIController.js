import * as HTMLElement from "../include/elements.js";

export function removeTextUnderlineFrom(word) {
	for ( const letter of word.children ) {
		letter.classList.remove("underline");
	}
}

export function addTextUnderlineTo(word) {
	for (const letter of word.children ) {	
		letter.classList.add("underline");
	}
}

export function addWordElementsInDOM(words) {
	HTMLElement.textContainerElement.innerHTML = "";
	HTMLElement.textInputField.value = "";

	for ( const word of words ) {
		HTMLElement.textContainerElement.insertAdjacentElement("beforeend", word);
	}
}