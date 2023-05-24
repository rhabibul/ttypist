import * as Const from "../../include/constants.js";
import * as MiscElement from "../elements/misc-elements.js"

export function fliphighlightcolor() {
	const css = getComputedStyle(MiscElement.root);
	const primary = css.getPropertyValue("--textcolor-primary");
	MiscElement.root.style.setProperty("--textcolor-primary", css.getPropertyValue("--textcolor-secondary"));
	MiscElement.root.style.setProperty("--textcolor-secondary", primary);
}

export function addwordhighlight(word) {
	if ( (typeof word === "object" ) && ( word?.tagName === "WORD" ) ) {
		// add active class to word
	}
}

export function removewordhighlight(word) {
	if ( (typeof word === "object") && (word?.tagName === "WORD") ) {
		// remove active class from word
	}
}

export function fadeletter(letter) {
	if ( (typeof letter === "object") && (letter?.tagName === "LETTER") ) {
		// add fade class to letter
	}
}

export function unfadeletter(letter) {
	if ( (typeof letter === "object") && (letter?.tagName === "LETTER") ) {
		// remove fade class from letter
	}
}