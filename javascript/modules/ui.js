import * as Element from "./element.js";

const CaretUI = {
	addcaretto(letter) {
    letter.setAttribute("id", Config.caret.type);
  },
  removecaretfrom(letter) {
    letter.setAttribute("id", "");
  },
}

const SettingUI = {

	settextcolor(element, color) {},	
	setbackgroundcolor(element, color) {},
	setproperty(property, value) {},

	update(type = "") {
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
}

const KeyboardUI = {

}

export { CaretUI, SettingUI, KeyboardUI };