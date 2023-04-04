import Config from "./include/config.js";
import { Test } from "./testlogic/logic.js";
import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";

function main() { }

window.addEventListener('load', (evt) => {
	if ( localStorage.getItem('Config') === null ) {
		// first time loaded in browser, so store the config object in local storage
		window.localStorage.setItem('Config', JSON.stringify(Config));
		Test.init();
	} else {
		// ttypist has been visited atleast once
		Misc.loadconfig(JSON.parse(window.localStorage.getItem('Config')));
		loadeverything_accordingtoconfig();
		Test.restart();
	}
});

function loadeverything_accordingtoconfig() {
	SettingUI.changeUIWhitespace(Config.whitespace.type);
	SettingUI.changeUICaret(SettingElement.caret[Config.caret.type]);
}