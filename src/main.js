import Config from "../include/config.js";
import Text from "../include/text.js";
import Word from "../include/word.js";

import * as Misc from "./utils/misc.js";
import * as CaretController from "./controllers/caret-controller.js";
import * as TestAreaElement from "./elements/testarea-elements.js";

import { time, typedchar, mInput, user } from "../include/stats-trackers.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./engine/logic.js";

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
		user.istyping = false;
		user.hastypedallwords = false;
		typedchar.reset();
		time.reset();
		mInput.reset();
		text.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(text.activeword, { activeword: true });
		CaretController.addcaretto(word.activeletter);
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	}
}

function main() {	
	Test.init();
	Test.restart();
}
main();