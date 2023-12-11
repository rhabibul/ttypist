import { config } from "../include/config.js"
import * as SettingsElement from "../elements/setting-element.js";

// keyboard reaction
export function changeKeyboardReactionInConfig(value) {
	if ( value === "next" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = true;
	} else if ( value === "static" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = true;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = false;
	} else if ( value === "react" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = true;
		config.keyboard.reaction.next = false;
	} else {
		config.keyboard.reaction.off = true;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = false;
	}
}

// keyboard emulate
export function changeKeyboardLayoutEmulateInConfig(value) {
	if ( value === "on" ) {
		config.keyboard.layout.emulate = true;
	}	else {
		config.keyboard.layout.emulate = false;
	}
}

// tape mode
export function changeTapeModeInConfig(value) {
	if ( value === "letter" ) {
		config.tape.off = false;
		config.tape.mode.letter = true;
		config.tape.mode.word = false;
	} else if ( value === "word" ) {
		config.tape.off = false;
		config.tape.mode.letter = false;
		config.tape.mode.word = true;
	} else {
		config.tape.off = true;
		config.tape.mode.letter = false;
		config.tape.mode.word = false;
	}
}

// text input
export function changeTextInputInConfig(value) {
	if ( value === "visible" ) {
		config.text.input.hidden = false;
		config.text.input.visible = true;
	} else {
		config.text.input.hidden = true;
		config.text.input.visible = false;
	}
}

// text highlight
export function changeTextHightlightInConfig(value) {
	if ( value === "word" ) {
		config.text.highlight.off = false;
		config.text.highlight.mode.letter = false;
		config.text.highlight.mode.word = true;
	}	else if ( value === "letter" ) {
		config.text.highlight.off = false;
		config.text.highlight.mode.letter = true;
		config.text.highlight.mode.word = false;
	} else {
		config.text.highlight.off = true;
		config.text.highlight.mode.letter = false;
		config.text.highlight.mode.word = false;
	}
}

// flip text highlight
export function changeFlipTextHightlightInConfig(value) {
	if ( value === "off" ) {
		config.text.highlight.flip = false;
	} else {
		config.text.highlight.flip = true;
	}
}

// text underline
export function changeTextUnderlineInConfig(value) {
	if ( value === "off" ) {
		config.text.underline = false;
	} else {
		config.text.underline = true;
	}
}

// text whitespace
export function changeTextWhitespaceInConfig(value) {
	config.text.whitespace = value;
}

// strict space
export function changeStrictSpaceInConfig(value) {
	if ( value === "off" ) {
		config.strictspace = false;
	} else {
		config.strictspace = true;
	}
}

// quick end
export function changeQuickEndInConfig(value) {
	if ( value === "off" ) {
		config.quickend = false;
	} else {
		config.quickend = true;
	}
}

// test difficulty
export function changeDifficultyInConfig(value) {
	if ( value === "expert" ) {
		config.difficulty.ease = false;
		config.difficulty.expert = true;
		config.difficulty.master = false;
	} else if ( value === "master" ) {
		config.difficulty.ease = false;
		config.difficulty.expert = false;
		config.difficulty.master = true;
	} else {
		config.difficulty.ease = true;
		config.difficulty.expert = false;
		config.difficulty.master = false;
	}
}

// confidence
export function changeConfidenceInConfig(value) {
	if ( value === "high" ) {
		config.confidence.low = false;
		config.confidence.high = true;
		config.confidence.peak = false;
	}	else if ( value === "peak" ) {
		config.confidence.low = false;
		config.confidence.high = false;
		config.confidence.peak = true;
	} else {
		config.confidence.low = true;
		config.confidence.high = false;
		config.confidence.peak = false;
	}
}

// text deletion
export function changeTextDeletionInConfig(value) {
	if ( value === "on" ) {
		config.delete = true;
	} else {
		config.delete = false;
	}
}

// delete previous correct word
export function changeDeletePreviousCorrectWordInConfig(value) {
	if ( value === "off" ) {
		config.delcorrect = false;
	} else {
		config.delcorrect = true;
	}
}

// modifier key
export function changeModifierKeyInConfig() {
	// alt
	if ( SettingsElement.modifierKeyConfig.alt.checked ) {
		config.modifier.alt = true;
	} else {
		config.modifier.alt = false;
	}

	// ctrl
	if ( SettingsElement.modifierKeyConfig.ctrl.checked ) {
		config.modifier.ctrl = true;
	} else {
		config.modifier.ctrl = false;
	}

	// meta
	if ( SettingsElement.modifierKeyConfig.meta.checked ) {
		config.modifier.meta = true;
	} else {
		config.modifier.meta = false;
	}
}

// text include
export function changeIncludeSpecialsInConfig() {
	// digit
	if ( SettingsElement.includeSpecialsInTextConfig.digit.checked ) {
		config.text.include.digit = true;
	} else {
		config.text.include.digit = false;
	}

	// punctuation
	if ( SettingsElement.includeSpecialsInTextConfig.punctuation.checked ) {
		config.text.include.punctuation = true;
	} else {
		config.text.include.punctuation = false;
	}
}

// error
export function changeErrorInConfig(value) {
	if ( value === "skip" ) {
		config.error.off = false;
		config.error.insert = false;
		config.error.skip = true;
		config.error.replace = false;
	}	else if ( value === "replace" ) {
		config.error.off = false;
		config.error.insert = false;
		config.error.skip = false;
		config.error.replace = true;
	} else if ( value === "insert" ) {
		config.error.off = false;
		config.error.insert = true;
		config.error.skip = false;
		config.error.replace = false;
	} else {
		config.error.off = true;
		config.error.insert = false;
		config.error.skip = false;
		config.error.replace = false;
	}
}

// forgive error
export function changeForgiveErrorInConfig(value) {
	if ( value === "on" ) {
		config.error.forgive = true;
	} else {
		config.error.forgive = false;
	}
}

// stop on error
export function changeStopOnErrorInConfig(value) {
	if ( value === "letter" ) {
		config.error.stop.off = false;
		config.error.stop.letter = true;
		config.error.stop.word = false;
	} else if ( value === "word" ) {
		config.error.stop.off = false;
		config.error.stop.letter = false;
		config.error.stop.word = true;
	} else {
		config.error.stop.off = true;
		config.error.stop.letter = false;
		config.error.stop.word = false;
	}
}

// opposite shift mode
export function changeOppositeShiftModeInConfig(value) {
	if ( value === "on" ) {
		config.oppositeshift = true;
	} else {
		config.oppositeshift = false;
	}
}

// text word count
export function changeTextWordCountInConfig(value) {
	config.text.word.count = Number(value);
}

// timer time
export function changeTimerSecondsInConfig(value) {
	config.time = Number(value);
}

export function changeCaretStyleInConfig(value) {
	config.caret = value;
}

export function changeBlindModeInConfig(value) {
	if ( value === "on" ) {
		config.blind = true;
	} else {
		config.blind = false;
	}
}