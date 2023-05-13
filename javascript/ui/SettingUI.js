import * as SettingElement from "../HTMLElement/SettingElement.js";
import * as MiscElement from "../HTMLElement/MiscElement.js";
import * as Misc from "../utils/misc.js";
import Config from "../include/config.js";
import { word } from "../main.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";


const active_color = getComputedStyle(MiscElement.root).getPropertyValue("--active-color");
const active_bgcolor = getComputedStyle(MiscElement.root).getPropertyValue("--active-backgroundcolor");
const inactive_color = getComputedStyle(MiscElement.root).getPropertyValue("--inactive-color");
const inactive_bgcolor = getComputedStyle(MiscElement.root).getPropertyValue("--inactive-backgroundcolor");

export function applyupdatedcaret(prev) {
  CaretHandler.removecaretfrom(word.activeletter);
  Array.from(Misc.HTMLCollection("letter", { tagname: true })).forEach(function (letter) {
    letter.classList.remove(prev);
    letter.classList.add(Config.caret.type);
  });
  CaretHandler.addcaretto(word.activeletter);
  TestAreaElement.input.focus();
}

function colorshapeof(caret, caretIsActive) {
	
	let ispacecaret = caret.classList.contains("pacecaret-shape");
	let shape;
	if ( ispacecaret ) {
		shape = document.querySelector(`pacecaret ${caret.dataset.value} shape`);
	} else {
		shape = document.querySelector(`caret ${caret.dataset.value} shape`);
	}

	if ( caret.dataset.value === "line" || caret.dataset.value === "block" ) {
		// 1. inside caret shape container both caret type (line, block), the shape 
		//    is given only width and height property no border is used, so there's
		//    no empty space inside the caret shape
		// 2. therefore only background color is enough for line caret which has
		//    dimension 1x20 pixels and block caret  which has dimension 10x20 pixel
		if ( caretIsActive ) {
			shape.style.backgroundColor = active_color;
		} else {
			shape.style.backgroundColor = inactive_color;
		}
	} else if ( caret.dataset.value === "underline" ) {
		// 1. give color to border bottom of underline caret
		// 2. fill the empty space inside underline caret with container's background color
		//    (note that underline caret is also a box but only bottom border is enabled,
		//    rest border is turned off, so here also we need take care of space inside
		//    the box and give same background color as the caret's container has)
		if ( caretIsActive ) {
			shape.style.borderBottomColor = active_color;
			shape.style.backgroundColor = active_bgcolor;
		} else {
			shape.style.backgroundColor = inactive_bgcolor;
			shape.style.borderBottomColor = inactive_color;
		}
	} else if ( caret.dataset.value === "box" ) {
		// 1. give color to all four borders of box caret
		// 2. fill the empty space inside of four borders of box caret with 
		//    caret container's background color
		if ( caretIsActive ) {
			shape.style.borderColor = active_color; 
			shape.style.backgroundColor = active_bgcolor; 
		} else {
			shape.style.borderColor = inactive_color;
			shape.style.backgroundColor = inactive_bgcolor;
		}
	} else {
		if ( caretIsActive ) {
			if ( ispacecaret ) {
				SettingElement.pacecaret.off.style.color = active_color;
			} else {
				SettingElement.caret.off.style.color = active_color;
			}
		} else {
			if ( ispacecaret ) {
				SettingElement.pacecaret.off.style.color = inactive_color;
			} else {
				SettingElement.caret.off.style.color = inactive_color;
			}
		}
	}
}

export function changeUICaretButtonTo(caret) {

  // activate the clicked caret first
  colorshapeof(caret, true); // set active color for the selected caret shape
	caret.style.backgroundColor = active_bgcolor;

	if ( caret.classList.contains("caret-shape") ) {
		// set inactive backgroundcolor & inactive color for all carets except the selected one
		for ( const othercaret of Object.values(SettingElement.caret) ) {
			if ( caret !== othercaret ) {
				// set inactive background color to all caret containers except the selected one
				othercaret.style.backgroundColor = inactive_bgcolor;
				// set inactive color to caret shapes except the selected one
				colorshapeof(othercaret, false);
			}
		}
	} else {
		for ( const othercaret of Object.values(SettingElement.pacecaret) ) {
			if ( caret !== othercaret ) {
				othercaret.style.backgroundColor = inactive_bgcolor;
				colorshapeof(othercaret, false);
			}
		}
	}
}

export function changeUIHighlightButtonTo(highlight) {
	if ( highlight === "word" ) {
		SettingElement.highlight.off.id = "";
		SettingElement.highlight.mode.letter.id = "";
		SettingElement.highlight.mode.word.id = "chosen";
	} else if ( highlight === "letter" ) {
		SettingElement.highlight.off.id = "";
		SettingElement.highlight.mode.letter.id = "chosen";
		SettingElement.highlight.mode.word.id = "";
	} else {
		SettingElement.highlight.off.id = "chosen";
		SettingElement.highlight.mode.letter.id = "";
		SettingElement.highlight.mode.word.id = "";
	}
}

export function changeUIFliptextcolorButtonTo(flip) {
	if ( flip === "on" ) {
		SettingElement.fliptextcolor.on.id = "chosen";
		SettingElement.fliptextcolor.off.id = "";
	} else {
		SettingElement.fliptextcolor.on.id = "";
		SettingElement.fliptextcolor.off.id = "chosen";
	}
}