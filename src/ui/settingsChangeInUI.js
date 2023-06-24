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