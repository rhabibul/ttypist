// this file will contain all ui related methods (create, delete modify) for
// settings on the website
// everything will be import as SettingUI from this file
import * as SettingElement from "../HTMLElement/StatsElement.js";

export function changeUIWhitespace(type = "") {

	if ( type === "" ) return;

	if ( type === "off" ) {
		SettingElement.whitespace.off.id = "turnItOff";
		SettingElement.whitespace.dot.id = "";
		SettingElement.whitespace.space.id = "";
	} else if ( type === "dot" ) {
		SettingElement.whitespace.off.id = "";
		SettingElement.whitespace.dot.id = "chosen";
		SettingElement.whitespace.space.id = "";
	} else if ( type === "space" ) {
		SettingElement.whitespace.off.id = "";
		SettingElement.whitespace.dot.id = "";
		SettingElement.whitespace.space.id = "chosen";
	}
}