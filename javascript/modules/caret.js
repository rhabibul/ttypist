import Config from "./config.js";

function addCaretTo(letter) {
	letter.setAttribute("id", Config.caret.type);
}

function removeCaretFrom(letter) {
	letter.removeAttribute("id");
}

function addHighlightTo(word) {
	word.classList.add("active");
}

function removeHighlightFrom(word) {
	word.classList.remove("active");
}

function fade(letter) {
	letter.classList.add("fade");
}
function unfade(letter) {
	letter.classList.remove("fade");
}

function goToNextLetter(sentence) {
	removeCaretFrom(sentence.activeLetter);
	if ( Config.sentence.highlight.letter ) fade(sentence.activeLetter);
	sentence.incrementLetterIndex();
	addCaretTo(sentence.activeLetter);
}

function goToPreviousLetter(sentence) {
	removeCaretFrom(sentence.activeLetter);
	sentence.decrementLetterIndex();
	if ( Config.sentence.highlight.letter ) unfade(sentence.activeLetter);
	addCaretTo(sentence.activeLetter);
}

function goToNextWord(sentence) {
	if ( Config.sentence.highlight.word ) removeHighlightFrom(sentence.activeWord);
	sentence.incrementWordIndex();
	if ( Config.sentence.highlight.word ) addHighlightTo(sentence.activeWord);
}

function goToPreviousWord(sentence) {
	if ( Config.sentence.highlight.word ) removeHighlightFrom(sentence.activeWord);
	sentence.decrementWordIndex();
	if ( Config.sentence.highlight.word ) addHighlightTo(sentence.activeWord);
}

export { 
	goToPreviousWord, 	goToNextWord,
	goToPreviousLetter, goToNextLetter,
	addCaretTo, 				removeCaretFrom,
	addHighlightTo, 		removeHighlightFrom,
};