import Config from "./include/config.js";
import { Test } from "./testlogic/logic.js";
import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";
import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";

function main() {
	// will be delegated tasks later..
}

window.addEventListener('load', (evt) => {
	if ( localStorage.getItem('Config') === null ) {
		window.localStorage.setItem('Config', JSON.stringify(Config));
		Test.init();
	} else {
		Misc.loadconfig(JSON.parse(window.localStorage.getItem('Config')));
		SettingUI.changeUICaret(SettingElement.caret[Config.caret.type]);
		Test.restart();
	}
});

// Misc.startautotyper(100);

window.addEventListener("offline", (evt) => { console.log("You're offline."); });
window.addEventListener("online", (evt) => { console.log("You're online."); })

window.addEventListener("click", (evt) => {
	// config testing
})