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