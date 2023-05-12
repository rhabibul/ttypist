import Config from "./include/config.js";
import Phrase from "./include/phrase.js";
import Word from "./include/word.js";

import * as Misc from "./utils/misc.js";
import * as SettingUI from "./ui/SettingUI.js";
import * as CaretHandler from "./handler/carethandler.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";
import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";
import {root} from "./HTMLElement/MiscElement.js";

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
	},
	restart() {
		typedchar.reset();
		time.reset();
		mInput.reset();
		phrase.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(phrase.activeword, { activeword: true });
		CaretHandler.addcaretto(word.activeletter);
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	}
}

// window.addEventListener('load', (evt) => {
// 	if ( localStorage.getItem('Config') === null ) {
// 		window.localStorage.setItem('Config', JSON.stringify(Config));
// 	} else {
// 		Misc.loadconfig(JSON.parse(window.localStorage.getItem('Config')));
// 		SettingUI.changeUICaret(SettingElement.caret[Config.caret.type]);
// 	}
// });

window.addEventListener("offline", (evt) => { 
	console.log("Tooltip UI: [Icon] You are currently offline. [Refresh Link (in blue)] [cross button]");
});
window.addEventListener("online", (evt) => {
	console.log("Tooltip UI: [Icon] Your Internet connection was restored.  [cross button]");
})

// for config testing
window.addEventListener("click", (evt) => {
	// on click log config values
})

function main() {	
	Test.init();
	Test.restart();
}

main();

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// try using evt.code & evt.key to determine keyboard layout, use .has(), .get()
// keyboardLayoutMap
// 		.entries()
// 		.keys() 	-> returns values which are equivalent to evt.key of keyboard events
// 		.values() -> returns values which are equivalent to evt.code of keyboard events
// 		.get()
// 	  .has()
// 	  .size
//    .forEach((key, code, keyboardLayoutMap) => {})
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
	
	let s = "", d = "", sym = "";
	
	keyboardLayoutMap.forEach((whatever) => {
		if ( alphabets.some((char) => whatever === char)) s += whatever;
		else if ( digits.some((char) => whatever === char) ) d += whatever
		else sym += whatever;
	});

	s = s.split('').sort().join('');
	d = d.split('').sort().join('');
	sym = sym.split('').sort().join('');
	
	console.log(s, s.length);
	console.log(d, d.length);
	console.log(sym, sym.length);
});