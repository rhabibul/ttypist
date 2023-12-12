import Text from "./include/text.js";
import Word from "./include/word.js";

import * as Misc from "./utils/misc.js";
import * as CaretController from "./controllers/caret-controller.js";
import * as TypingAreaElements from "./include/elements.js";

import { time, typedchar, mInput, user } from "./include/trackers.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./logic.js";

export const text = new Text();
export const word = new Word();

export const Test = {
	init() {		
		TypingAreaElements.textInputField.addEventListener("keydown", registerkeydown);
		TypingAreaElements.textInputField.addEventListener("keypress", registerkeypress);
		TypingAreaElements.textInputField.addEventListener("beforeinput", registerbeforeinput);
		TypingAreaElements.textInputField.addEventListener("input", registerinput);
		TypingAreaElements.textInputField.addEventListener("keyup", registerkeyup);
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
		TypingAreaElements.textInputField.value = "";
		TypingAreaElements.textInputField.focus();
	}
}

// static-elements.js
// include -> src   =>  src/include
function main() {	
	// need different names
	Test.init();
	Test.restart();
}
main();