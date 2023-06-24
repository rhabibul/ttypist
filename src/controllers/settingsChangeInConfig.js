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