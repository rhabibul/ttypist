import Config from "../../include/config.js"
import * as SettingsElement from "../elements/settingsElements.js";

export function changeDynamicSettingsInUI(value) {
	if ( value === "off" ) {
		SettingsElement.setting.dynamic.off.id = "selected";
		SettingsElement.setting.dynamic.on.id = "";
	}	else {
		SettingsElement.setting.dynamic.off.id = "";
		SettingsElement.setting.dynamic.on.id = "selected";
	}
}

export function changeWebsiteThemeInUI(value) {
	if ( value === "dark" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "selected";
	} else if ( value === "midnight" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "selected";
		SettingsElement.websiteTheme.dark.id = "";
	} else {
		SettingsElement.websiteTheme.light.id = "selected";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "";
	}
}

export function changeTapeModeInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "selected";
		SettingsElement.tape.mode.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "selected";
	} else {
		SettingsElement.tape.off.id = "selected";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "";
	}
}

export function changeTextInputInUI(value) {
	if ( value === "visible" ) {
		SettingsElement.textInput.hidden.id = "";
		SettingsElement.textInput.visible.id = "selected";
	} else {
		SettingsElement.textInput.hidden.id = "selected";
		SettingsElement.textInput.visible.id = "";
	}
}