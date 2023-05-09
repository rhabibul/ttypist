import Config from "./include/config.js";
import Phrase from "./include/phrase.js";
import Word from "./include/word.js";

import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as CaretHandler from "./handler/carethandler.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";
import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";

import { time, typedchar, mInput } from "./testlogic/statskeeper.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./testlogic/logic.js"; 

export const phrase = new Phrase();
export const word = new Word();

export const Test = {
	init() {
		Config.ttypist.istyping = false;
		Config.ttypist.hastypedeveryword = false;

		// InputElement.value | InputEvent.data | InputEvent.inputType
		
		TestAreaElement.input.addEventListener("keydown", registerkeydown);
		TestAreaElement.input.addEventListener("keypress", registerkeypress);
		TestAreaElement.input.addEventListener("beforeinput", registerbeforeinput);
		TestAreaElement.input.addEventListener("input", registerinput);
		TestAreaElement.input.addEventListener("keyup", registerkeyup);		
		
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	},
	restart() {
		typedchar.reset();
		time.reset();
		mInput.reset();
		phrase.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(phrase.activeword, { activeword: true });
		CaretHandler.addcaretto(word.activeletter);

		this.init();
	}
}

Test.init();
Test.restart();

window.addEventListener('load', (evt) => {
	if ( localStorage.getItem('Config') === null ) {
		window.localStorage.setItem('Config', JSON.stringify(Config));
	} else {
		Misc.loadconfig(JSON.parse(window.localStorage.getItem('Config')));
		SettingUI.changeUICaret(SettingElement.caret[Config.caret.type]);
	}
});

window.addEventListener("offline", (evt) => { console.log("You're offline."); });
window.addEventListener("online", (evt) => { console.log("You're online."); })

// for config testing
window.addEventListener("click", (evt) => { })

function main() {
	// start here..
}