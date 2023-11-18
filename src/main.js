import { config } from "../include/config.js";
import Text from "../include/text.js";
import Word from "../include/word.js";

import * as Misc from "./utils/misc.js";
import * as CaretController from "./controllers/caret-controller.js";
import * as TypingAreaElements from "./elements/typing-area-element.js";

import { time, typedchar, mInput, user } from "../include/trackers.js";
import { registerkeydown, registerkeypress, registerbeforeinput, registerinput, registerkeyup } from "./engine/logic.js";
import { keydown, keypress, beforeinput, input, keyup } from "./engine/logic.js";

export const text = new Text();
export const word = new Word();

export const Test = {
	init() {		
		TypingAreaElements.textInputField.addEventListener("keydown", keydown);
		TypingAreaElements.textInputField.addEventListener("keypress", keypress);
		TypingAreaElements.textInputField.addEventListener("beforeinput", beforeinput);
		TypingAreaElements.textInputField.addEventListener("input", input); // InputElement.value | InputEvent.data | InputEvent.inputType
		TypingAreaElements.textInputField.addEventListener("keyup", keyup);
		// TypingAreaElements.textInputField.addEventListener("keydown", registerkeydown);
		// TypingAreaElements.textInputField.addEventListener("keypress", registerkeypress);
		// TypingAreaElements.textInputField.addEventListener("beforeinput", registerbeforeinput);
		// TypingAreaElements.textInputField.addEventListener("input", registerinput); // InputElement.value | InputEvent.data | InputEvent.inputType
		// TypingAreaElements.textInputField.addEventListener("keyup", registerkeyup);
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

function main() {	
	// need different names
	Test.init();
	Test.restart();
}
main();