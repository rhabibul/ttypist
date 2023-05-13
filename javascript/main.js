import Config from "./include/config.js";
import Text from "./include/text.js";
import Word from "./include/word.js";

import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as CaretHandler from "./handler/carethandler.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";
import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";

import { time, typedchar, mInput } from "./testlogic/statskeeper.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./testlogic/logic.js"; 

export const text = new Text();
export const word = new Word();

export const Test = {
	init() {		
		TestAreaElement.input.addEventListener("keydown", registerkeydown);
		TestAreaElement.input.addEventListener("keypress", registerkeypress);
		TestAreaElement.input.addEventListener("beforeinput", registerbeforeinput);
		TestAreaElement.input.addEventListener("input", registerinput); // InputElement.value | InputEvent.data | InputEvent.inputType
		TestAreaElement.input.addEventListener("keyup", registerkeyup);
	},
	restart() {
		Config.ttypist.istyping = false;
		Config.ttypist.hastypedeveryword = false;

		typedchar.reset();
		time.reset();
		mInput.reset();
		text.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(text.activeword, { activeword: true });
		CaretHandler.addcaretto(word.activeletter);
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	}
}

function main() {	
	Test.init();
	Test.restart();
}
main();