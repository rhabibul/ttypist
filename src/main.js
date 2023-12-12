import Text from "./include/text.js";
import Word from "./include/word.js";

import * as Misc from "./utils/misc.js";
import * as CaretController from "./controllers/caret-controller.js";
import * as StaticElement from "./include/elements.js";

import { time, typedchar, mInput, user } from "./include/trackers.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./logic.js";

export const text = new Text();
export const word = new Word();

export const Test = {
	init() {		
		StaticElement.textInputField.addEventListener("keydown", registerkeydown);
		StaticElement.textInputField.addEventListener("keypress", registerkeypress);
		StaticElement.textInputField.addEventListener("beforeinput", registerbeforeinput);
		StaticElement.textInputField.addEventListener("input", registerinput);
		StaticElement.textInputField.addEventListener("keyup", registerkeyup);
		// InputElement.value | InputEvent.data | InputEvent.inputType
	},
	restart() {
		user.istyping = false;
		user.hastypedallwords = false;
		typedchar.reset();
		time.reset();
		mInput.reset();
		text.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(text.activeword, { activeword: true });
		CaretController.addCaretTo(word.activeletter);
		StaticElement.textInputField.value = "";
		StaticElement.textInputField.focus();
	}
}

function main() {	
	// need different names
	Test.init();
	Test.restart();
}
main();