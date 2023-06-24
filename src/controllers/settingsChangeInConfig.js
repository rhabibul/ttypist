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