import Config from "./include/config.js";
import * as ConfigHandler from "./handler/confighandler.js";

import * as Misc from "./utils/misc.js";
import * as Const from "./include/constant.js";

import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";
import * as TestLogic from "./testlogic/logic.js";
import * as CaretHandler from "./handler/carethandler.js";
import Sentence from "./include/sentence.js";
import Word from "./include/word.js";

const text = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ];

// let sentence = new Sentence(Misc.wordelements(text));
// let word = new Word(sentence.activeword);

// const test = {

// 	init() {
// 		sentence = new Sentence(Misc.wordelements(Misc.randomwords()));
// 		word = new Word(sentence.activeword);

// 		CaretHandler.addcaretto(word.activeletter);

// 		// InputElement.value | InputEvent.data
// 		TestAreaElement.input.addEventListener("input", TestLogic.registerinput);
// 		TestAreaElement.input.addEventListener("keydown", TestLogic.registerinput);
// 		TestAreaElement.input.addEventListener("keyup", TestLogic.registerkeyup);

// 		Config.teststate.istyping = false;
// 		TestAreaElement.input.value = "";
// 		TestAreaElement.input.focus();
// 	},

// 	removeListeners() {
// 		TestAreaElement.input.removeEventListener("input", TestLogic.registerinput);
// 		TestAreaElement.input.removeEventListener("keydown", TestLogic.registerinput);
// 		TestAreaElement.input.removeEventListener("keyup", TestLogic.registerkeyup);
// 	},
// }

// function main() {

// }