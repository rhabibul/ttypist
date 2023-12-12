import * as SettingsElement from "../include/elements.js";

// tape mode
export function changeTapeModeInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.tapeModeConfig.off.id = "";
		SettingsElement.tapeModeConfig.mode.letter.id = "selected";
		SettingsElement.tapeModeConfig.mode.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.tapeModeConfig.off.id = "";
		SettingsElement.tapeModeConfig.mode.letter.id = "";
		SettingsElement.tapeModeConfig.mode.word.id = "selected";
	} else {
		SettingsElement.tapeModeConfig.off.id = "selected";
		SettingsElement.tapeModeConfig.mode.letter.id = "";
		SettingsElement.tapeModeConfig.mode.word.id = "";
	}
}

// text input
export function changeTextInputInUI(value) {
	if ( value === "visible" ) {
		SettingsElement.textInputFieldConfig.hidden.id = "";
		SettingsElement.textInputFieldConfig.visible.id = "selected";
	} else {
		SettingsElement.textInputFieldConfig.hidden.id = "selected";
		SettingsElement.textInputFieldConfig.visible.id = "";
	}
}

// text highlight
export function changeTextHightlightInUI(value) {
	if ( value === "word" ) {
		SettingsElement.textHighlightConfig.off.id = "";
		SettingsElement.textHighlightConfig.mode.letter.id = "";
		SettingsElement.textHighlightConfig.mode.word.id = "selected";
	} else if ( value === "letter" ) {		
		SettingsElement.textHighlightConfig.off.id = "";
		SettingsElement.textHighlightConfig.mode.letter.id = "selected";
		SettingsElement.textHighlightConfig.mode.word.id = "";
	} else {
		SettingsElement.textHighlightConfig.off.id = "selected";
		SettingsElement.textHighlightConfig.mode.letter.id = "";
		SettingsElement.textHighlightConfig.mode.word.id = "";
	}
}

// flip text highlight
export function changeFlipTextHightlightInUI(value) {

	if ( value === "on" ) {
		SettingsElement.flipTextHighlightConfig.off.id = "";
		SettingsElement.flipTextHighlightConfig.on.id = "selected";
	} else {
		SettingsElement.flipTextHighlightConfig.off.id = "selected";
		SettingsElement.flipTextHighlightConfig.on.id = "";
	}
}

// text underline
export function changeTextUnderlineInUI(value) {
	if ( value === "off" ) 	{
		SettingsElement.textUnderlineConfig.off.id = "selected";
		SettingsElement.textUnderlineConfig.on.id = "";
	} else {
		SettingsElement.textUnderlineConfig.off.id = "";
		SettingsElement.textUnderlineConfig.on.id = "selected";
	}
}

// text whitespace
export function changeTextWhitespaceInUI(value) {
	if ( value === "bullet" ) {
		SettingsElement.textWhitespaceConfig.off.id = "";
		SettingsElement.textWhitespaceConfig.style.bullet.id = "selected";
		SettingsElement.textWhitespaceConfig.style.space.id = "";
		SettingsElement.textWhitespaceConfig.style.bar.id = "";
	} else if ( value === "bar" ) {
		SettingsElement.textWhitespaceConfig.off.id = "";
		SettingsElement.textWhitespaceConfig.style.bullet.id = "";
		SettingsElement.textWhitespaceConfig.style.space.id = "";
		SettingsElement.textWhitespaceConfig.style.bar.id = "selected";
	} else if ( value === "space" ) {
		SettingsElement.textWhitespaceConfig.off.id = "";
		SettingsElement.textWhitespaceConfig.style.bullet.id = "";
		SettingsElement.textWhitespaceConfig.style.space.id = "selected";
		SettingsElement.textWhitespaceConfig.style.bar.id = "";
	} else {
		SettingsElement.textWhitespaceConfig.off.id = "selected";
		SettingsElement.textWhitespaceConfig.style.bullet.id = "";
		SettingsElement.textWhitespaceConfig.style.space.id = "";
		SettingsElement.textWhitespaceConfig.style.bar.id = "";
	}
}

// strict space
export function changeStrictSpaceInUI(value) {
	if ( value === "off" ) {
		SettingsElement.strictSpaceConfig.off.id = "selected";
		SettingsElement.strictSpaceConfig.on.id = "";
	} else {
		SettingsElement.strictSpaceConfig.off.id = "";
		SettingsElement.strictSpaceConfig.on.id = "selected";
	}	
}

// quick end
export function changeQuickEndInUI(value) {
	if ( value === "off" ) {
		SettingsElement.quickEndConfig.off.id = "selected";
		SettingsElement.quickEndConfig.on.id = "";
	} else {
		SettingsElement.quickEndConfig.off.id = "";
		SettingsElement.quickEndConfig.on.id = "selected";
	}
}

// test difficulty
export function changeDifficultyInUI(value) {
	if ( value === "expert" ) {
		SettingsElement.testDifficultyConfig.ease.id = "";
		SettingsElement.testDifficultyConfig.expert.id = "selected";
		SettingsElement.testDifficultyConfig.master.id = "";
	} else if ( value === "master" ) {
		SettingsElement.testDifficultyConfig.ease.id = "";
		SettingsElement.testDifficultyConfig.expert.id = "";
		SettingsElement.testDifficultyConfig.master.id = "selected";
	} else {
		SettingsElement.testDifficultyConfig.ease.id = "selected";
		SettingsElement.testDifficultyConfig.expert.id = "";
		SettingsElement.testDifficultyConfig.master.id = "";
	}
}

// user confidence (controls backspacing)
export function changeConfidenceInUI(value) {
	if ( value === "high" ) {
		SettingsElement.userConfidenceConfig.low.id = "";
		SettingsElement.userConfidenceConfig.high.id = "selected";
		SettingsElement.userConfidenceConfig.peak.id = "";
	}	else if ( value === "peak" ) {
		SettingsElement.userConfidenceConfig.low.id = "";
		SettingsElement.userConfidenceConfig.high.id = "";
		SettingsElement.userConfidenceConfig.peak.id = "selected";
	} else {
		SettingsElement.userConfidenceConfig.low.id = "selected";
		SettingsElement.userConfidenceConfig.high.id = "";
		SettingsElement.userConfidenceConfig.peak.id = "";
	}
}

// delete text (backspace)
export function changeTextDeletionInUI(value) {
	if ( value === "off" ) {
		SettingsElement.deleteConfig.off.id = "selected";
		SettingsElement.deleteConfig.on.id = "";
	}	else {
		SettingsElement.deleteConfig.off.id = "";
		SettingsElement.deleteConfig.on.id = "selected";
	}
}

// delete correct previous word
export function changeDeletePreviousCorrectWordInUI(value) {
	if ( value === "off" ) {
		SettingsElement.delcorrectConfig.off.id = "selected";
		SettingsElement.delcorrectConfig.on.id = "";
	}	else {
		SettingsElement.delcorrectConfig.off.id = "";
		SettingsElement.delcorrectConfig.on.id = "selected";
	}
}

// error
export function changeErrorInUI(value) {
	if ( value === "skip" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "selected";
		SettingsElement.errorHandlingConfig.replace.id = "";
	} else if ( value === "replace" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "selected";
	} else if ( value === "insert" ) {
		SettingsElement.errorHandlingConfig.off.id = "";
		SettingsElement.errorHandlingConfig.insert.id = "selected";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "";
	} else {
		SettingsElement.errorHandlingConfig.off.id = "selected";
		SettingsElement.errorHandlingConfig.insert.id = "";
		SettingsElement.errorHandlingConfig.skip.id = "";
		SettingsElement.errorHandlingConfig.replace.id = "";
	}
}

// forgive error
export function changeForgiveErrorInUI(value) {
	if ( value === "on" ) {
		SettingsElement.errorHandlingConfig.forgive.off.id = "";
		SettingsElement.errorHandlingConfig.forgive.on.id = "selected";
	} else {
		SettingsElement.errorHandlingConfig.forgive.off.id = "selected";
		SettingsElement.errorHandlingConfig.forgive.on.id = "";
	}
}

// stop on error
export function changeStopOnErrorInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.errorHandlingConfig.stop.off.id = "";
		SettingsElement.errorHandlingConfig.stop.letter.id = "selected";
		SettingsElement.errorHandlingConfig.stop.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.errorHandlingConfig.stop.off.id = "";
		SettingsElement.errorHandlingConfig.stop.letter.id = "";
		SettingsElement.errorHandlingConfig.stop.word.id = "selected";
	} else {
		SettingsElement.errorHandlingConfig.stop.off.id = "selected";
		SettingsElement.errorHandlingConfig.stop.letter.id = "";
		SettingsElement.errorHandlingConfig.stop.word.id = "";
	}
}

// opposite shift mode
export function changeOppositeShiftModeInUI(value) {
	if ( value === "on" ) {
		SettingsElement.useOppositeShiftConfig.off.id = "";
		SettingsElement.useOppositeShiftConfig.on.id = "selected";
	} else {
		SettingsElement.useOppositeShiftConfig.off.id = "selected";
		SettingsElement.useOppositeShiftConfig.on.id = "";
	}
}

// text word count
export function changeTextWordCountInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.textWordsCountConfig.off.id = "selected";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "10" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "selected";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	}	else if ( value === "25" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "selected";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "50" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "selected";
		SettingsElement.textWordsCountConfig.words100.id = "";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	} else if ( value === "100" ) {
		SettingsElement.textWordsCountConfig.off.id = "";
		SettingsElement.textWordsCountConfig.words10.id = "";
		SettingsElement.textWordsCountConfig.words25.id = "";
		SettingsElement.textWordsCountConfig.words50.id = "";
		SettingsElement.textWordsCountConfig.words100.id = "selected";
		SettingsElement.textWordsCountConfig.customWordsCountButton.id = "";
	}
}

// timer time
export function changeTimerSecondsInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.timerSecondsCountConfig.off.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "15" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	}	else if ( value === "30" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "60" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "selected";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	} else if ( value === "120" ) {
		SettingsElement.timerSecondsCountConfig.off.id = "";
		SettingsElement.timerSecondsCountConfig.seconds15.id = "";
		SettingsElement.timerSecondsCountConfig.seconds30.id = "";
		SettingsElement.timerSecondsCountConfig.seconds60.id = "";
		SettingsElement.timerSecondsCountConfig.seconds120.id = "selected";
		SettingsElement.timerSecondsCountConfig.customSecondsCountButton.id = "";
	}
}

function addColorsToCaretShape(shapeClicked, shape) {
	if ( shapeClicked === shape.classList[1] ) {
		// make caret active which is clicked
		if ( shapeClicked === "underscoreCaretShape" ) {
			shape.style.borderBottomColor = "var(--selected-color)";
		} else if ( (shapeClicked === "lineCaretShape") || (shapeClicked === "blockCaretShape") ) {
			shape.style.backgroundColor = "var(--selected-color)";
		} else if ( shapeClicked === "boxCaretShape" ) {
			shape.style.borderColor = "var(--selected-color)";
		}
	} else {
		// make all those carets inactive which are not clicked
		if ( (shapeClicked !== "underscoreCaretShape") && (shape.classList[1] === "underscoreCaretShape") ) {
			shape.style.borderBottomColor = "var(--setting-caret-color)";
		} 
		if ( (shapeClicked !== "lineCaretShape") && (shape.classList[1] === "lineCaretShape") ) {
			shape.style.backgroundColor = "var(--setting-caret-color)";
		}
		if ( (shapeClicked !== "blockCaretShape") && (shape.classList[1] === "blockCaretShape") ) {
			shape.style.backgroundColor = "var(--setting-caret-color)";
		}
		if ( (shapeClicked !== "boxCaretShape") && (shape.classList[1] === "boxCaretShape") ) {
			shape.style.borderColor = "var(--setting-caret-color)";
		}
	}
}

function changeCaretShapeColor(shapeClicked) {

	const caretShapes = Array.from(document.querySelectorAll("div#caretStyleConfig button > span.shape"));

	for ( const shape of caretShapes ) {
		addColorsToCaretShape(shapeClicked, shape);
	}
}

export function changeCaretStyleInUI(value) {
	if ( value === "off" ) {
		changeCaretShapeColor("offCaretShape");
		SettingsElement.caretStyleConfig.off.id = "selected"
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "underscore" ) {
		changeCaretShapeColor("underscoreCaretShape");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = "selected"
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "line" ) {
		changeCaretShapeColor("lineCaretShape");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = "selected"
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "box" ) {
		changeCaretShapeColor("boxCaretShape");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = "selected"
		SettingsElement.caretStyleConfig.style.block.id = ""
	} else if ( value === "block" ) {
		changeCaretShapeColor("blockCaretShape");
		SettingsElement.caretStyleConfig.off.id = ""
		SettingsElement.caretStyleConfig.style.underscore.id = ""
		SettingsElement.caretStyleConfig.style.line.id = ""
		SettingsElement.caretStyleConfig.style.box.id = ""
		SettingsElement.caretStyleConfig.style.block.id = "selected"
	}
}

export function changeBlindModeInUI(value) {
	if ( value === "on" ) {
		SettingsElement.goBlindConfig.off.id = "";
		SettingsElement.goBlindConfig.on.id = "selected";
	} else {
		SettingsElement.goBlindConfig.off.id = "selected";
		SettingsElement.goBlindConfig.on.id = "";
	}
}