import Config from "../include/config.js";
import * as Const from "../include/constant.js";
import * as MiscElement from "../HTMLElement/MiscElement.js"

export function fliphighlightcolor() {
	const primary = Const.css.getPropertyValue("--textcolor-primary");
	MiscElement.root.style.setProperty("--textcolor-primary", Const.css.getPropertyValue("--textcolor-secondary"));
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