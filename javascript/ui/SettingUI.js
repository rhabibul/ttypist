// this file will contain all ui related methods (create, delete modify) for
// settings on the website
// everything will be import as SettingUI from this file
import * as Element from "../modules/element.js";

export function changeWhitespaceTo(type = "") {

	if ( type === "" ) return;

	if ( type === "off" ) {
		Element.setting.whitespace.off.id = "turnItOff";
		Element.setting.whitespace.dot.id = "";
		Element.setting.whitespace.space.id = "";
	} else if ( type === "dot" ) {
		Element.setting.whitespace.off.id = "";
		Element.setting.whitespace.dot.id = "chosen";
		Element.setting.whitespace.space.id = "";
	} else if ( type === "space" ) {
		Element.setting.whitespace.off.id = "";
		Element.setting.whitespace.dot.id = "";
		Element.setting.whitespace.space.id = "chosen";
	}
}