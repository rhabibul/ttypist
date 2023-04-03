import Config from "./include/config.js";
import * as ConfigHandler from "./handler/confighandler.js";

import * as Misc from "./utils/misc.js";
import * as Const from "./include/constant.js";

import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";
import * as TestLogic from "./testlogic/logic.js";
import * as CaretHandler from "./handler/carethandler.js";

import { time, typedchar, mInput } from "./testlogic/statskeeper.js";
import Sentence from "./include/sentence.js";
import Word from "./include/word.js";

export const sentence = new Sentence(Misc.wordelements(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]));
export const word = new Word(sentence.activeword);
export { time, typedchar, mInput };

export const Test = {
	init() {
		Config.ttypist.istyping = false;
		TestAreaElement.input.value = "";

		CaretHandler.addcaretto(word.activeletter);

		// InputElement.value | InputEvent.data
		TestAreaElement.input.addEventListener("input", TestLogic.registerinput);
		TestAreaElement.input.addEventListener("keydown", TestLogic.registerkeydown);
		TestAreaElement.input.addEventListener("keyup", TestLogic.registerkeyup);		
		TestAreaElement.input.focus();
	},
	restart() {
		typedchar.reset();
		time.reset();
		mInput.reset();
		sentence.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(sentence.activeword, { activeword: true });
		this.init();
	}
}

function main() {
	Test.init();
}

// main();