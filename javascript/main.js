import Config from "./include/config.js";
import { Test } from "./testlogic/logic.js";
import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";

function main() {
	// will be delegated tasks later..
}

window.addEventListener('load', (evt) => {
	if ( localStorage.getItem('Config') === null ) {
		// first time loaded in browser, so store the config object in local storage
		window.localStorage.setItem('Config', JSON.stringify(Config));

		Test.init();
	} else {
		// ttypist has been visited atleast once
		Misc.loadconfig(JSON.parse(window.localStorage.getItem('Config')));
		SettingUI.changeUICaret(SettingElement.caret[Config.caret.type]);

		Test.restart();
	}
});

window.addEventListener("offline", (evt) => {
	console.log("You're offline.");
});

window.addEventListener("online", (evt) => {
	console.log("You're online.");
})

SettingElement.fullscreenIconContainer.addEventListener("click", (evt) => {

	if (!document.fullscreenElement && !SettingElement.enter_fullscreen.classList.contains("hidden")) {
		SettingElement.enter_fullscreen.classList.add("hidden");
		SettingElement.exit_fullscreen.classList.remove("hidden");
		document.documentElement.requestFullscreen();
	} else {
		SettingElement.exit_fullscreen.classList.add("hidden");
		SettingElement.enter_fullscreen.classList.remove("hidden");
		document.exitFullscreen();
	}
});


// english
// hindi
// bengali
// urdu
// arabic