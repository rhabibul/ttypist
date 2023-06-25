import Config from "../../include/config.js"
import * as SettingsElement from "../elements/settingsElements.js";

export function changeDynamicSettingsInConfig(value) {
	if ( value === "off" ) {
		Config.setting.dynamic = false;
	} else {
		Config.setting.dynamic = true;
	}
}

export function changeWebsiteThemeInConfig(value) {
	Config.websitetheme = value;
}

export function changeTapeModeInConfig(value) {
	if ( value === "letter" ) {
		Config.tape.off = false;
		Config.tape.mode.letter = true;
		Config.tape.mode.word = false;
	} else if ( value === "word" ) {
		Config.tape.off = false;
		Config.tape.mode.letter = false;
		Config.tape.mode.word = true;
	} else {
		Config.tape.off = true;
		Config.tape.mode.letter = false;
		Config.tape.mode.word = false;
	}
}

export function changeTextInputInConfig(value) {
	if ( value === "visible" ) {
		Config.text.input.hidden = false;
		Config.text.input.visible = true;
	} else {
		Config.text.input.hidden = true;
		Config.text.input.visible = false;
	}
}

export function changeTextScrollInConfig(value) {
	if ( value === "smooth" ) {
		Config.text.scroll.smooth = true;
		Config.text.scroll.abrupt = false;
	} else {
		Config.text.scroll.smooth = false;
		Config.text.scroll.abrupt = true;
	}
}

export function changeTextHightlightInConfig(value) {
	if ( value === "word" ) {
		Config.text.highlight.off = false;
		Config.text.highlight.mode.letter = false;
		Config.text.highlight.mode.word = true;
	}	else if ( value === "letter" ) {
		Config.text.highlight.off = false;
		Config.text.highlight.mode.letter = true;
		Config.text.highlight.mode.word = false;
	} else {
		Config.text.highlight.off = true;
		Config.text.highlight.mode.letter = false;
		Config.text.highlight.mode.word = false;
	}
}

export function changeFlipTextHightlightInConfig(value) {
	if ( value === "on" ) {
		Config.text.highlight.flip = true;
	} else {
		Config.text.highlight.flip = false;
	}
}

export function changeTextUnderlineInConfig(value) {
 if ( value === "off" ) {
	Config.text.underline = false;
 } else {
	 Config.text.underline = true;
 }
}

export function changeTextWhitespaceInConfig(value) {
	if ( value === "bullet" ) {
		Config.text.whitespace.off = false;
		Config.text.whitespace.type.bullet = true;
		Config.text.whitespace.type.space = false;
		Config.text.whitespace.type.bar = false;
		Config.text.whitespace.code = Number(SettingsElement.textWhitespace.type.bullet.dataset.code);
		Config.text.whitespace.character = String(SettingsElement.textWhitespace.type.bullet.dataset.character);
	} else if ( value === "bar" ) {
		Config.text.whitespace.off = false;
		Config.text.whitespace.type.bullet = false;
		Config.text.whitespace.type.space = false;
		Config.text.whitespace.type.bar = true;
		Config.text.whitespace.code = Number(SettingsElement.textWhitespace.type.bar.dataset.code);
		Config.text.whitespace.character = String(SettingsElement.textWhitespace.type.bar.dataset.character);
	} else if ( value === "space" ) {
		Config.text.whitespace.off = false;
		Config.text.whitespace.type.bullet = false;
		Config.text.whitespace.type.space = true;
		Config.text.whitespace.type.bar = false;
		Config.text.whitespace.code = Number(SettingsElement.textWhitespace.type.space.dataset.code);
		Config.text.whitespace.character = String(SettingsElement.textWhitespace.type.space.dataset.character);
	} else {
		Config.text.whitespace.off = true;
		Config.text.whitespace.type.bullet = false;
		Config.text.whitespace.type.space = false;
		Config.text.whitespace.type.bar = false;
		Config.text.whitespace.code = Number(SettingsElement.textWhitespace.off.dataset.code);
		Config.text.whitespace.character = String(SettingsElement.textWhitespace.off.dataset.character);
	}
}

export function changeStrictSpaceInConfig(value) {
	if ( value === "off" ) {
		Config.strictspace = false;
	} else {
		Config.strictspace = true;
	}
}

export function changeQuickEndInConfig(value) {
	if ( value === "off" ) {
		Config.quickend = false;
	} else {
		Config.quickend = true;
	}
}

export function changeDifficultyInConfig(value) {
	if ( value === "expert" ) {
		Config.difficulty.ease = false;
		Config.difficulty.expert = true;
		Config.difficulty.master = false;
	} else if ( value === "master" ) {
		Config.difficulty.ease = false;
		Config.difficulty.expert = false;
		Config.difficulty.master = true;
	} else {
		Config.difficulty.ease = true;
		Config.difficulty.expert = false;
		Config.difficulty.master = false;
	}
}

export function changeConfidenceInConfig(value) {
	if ( value === "high" ) {
		Config.confidence.low = false;
		Config.confidence.high = true;
		Config.confidence.peak = false;
	}	else if ( value === "peak" ) {
		Config.confidence.low = false;
		Config.confidence.high = false;
		Config.confidence.peak = true;
	} else {
		Config.confidence.low = true;
		Config.confidence.high = false;
		Config.confidence.peak = false;
	}
}

export function changeBackspaceKeyInConfig(value) {
	if ( value === "on" ) {
		Config.backspace.off = false;
	} else {
		Config.backspace.off = true;
	}
}

export function changeGoBackOnCorrectInConfig(value) {
	if ( value === "off" ) {
		Config.backspace.allowedOnCorrect = false;
	} else {
		Config.backspace.allowedOnCorrect = true;
	}
}

export function changeModifierKeyInConfig() {
	// alt
	if ( SettingsElement.modifier.alt.checked ) {
		Config.backspace.modifier.alt = true;
	} else {
		Config.backspace.modifier.alt = false;
	}

	// ctrl
	if ( SettingsElement.modifier.ctrl.checked ) {
		Config.backspace.modifier.ctrl = true;
	} else {
		Config.backspace.modifier.ctrl = false;
	}

	// meta
	if ( SettingsElement.modifier.meta.checked ) {
		Config.backspace.modifier.meta = true;
	} else {
		Config.backspace.modifier.meta = false;
	}
}

export function changeErrorInConfig(value) {
	if ( value === "skip" ) {
		Config.error.off = false;
		Config.error.insert = false;
		Config.error.skip = true;
		Config.error.replace = false;
	}	else if ( value === "replace" ) {
		Config.error.off = false;
		Config.error.insert = false;
		Config.error.skip = false;
		Config.error.replace = true;
	} else if ( value === "insert" ) {
		Config.error.off = false;
		Config.error.insert = true;
		Config.error.skip = false;
		Config.error.replace = false;
	} else {
		Config.error.off = true;
		Config.error.insert = false;
		Config.error.skip = false;
		Config.error.replace = false;
	}
}

export function changeForgiveErrorInConfig(value) {
	if ( value === "on" ) {
		Config.error.forgive = true;
	} else {
		Config.error.forgive = false;
	}
}

export function changeStopOnErrorInConfig(value) {
	if ( value === "letter" ) {
		Config.error.stop.off = false;
		Config.error.stop.letter = true;
		Config.error.stop.word = false;
	} else if ( value === "word" ) {
		Config.error.stop.off = false;
		Config.error.stop.letter = false;
		Config.error.stop.word = true;
	} else {
		Config.error.stop.off = true;
		Config.error.stop.letter = false;
		Config.error.stop.word = false;
	}
}