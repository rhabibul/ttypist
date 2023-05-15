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

// caret & pacecaret
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

// highlight
export function changeUIHighlightButtonTo(highlight) {
	if ( highlight === "word" ) {
		SettingElement.highlight.off.id = "";
		SettingElement.highlight.mode.letter.id = "";
		SettingElement.highlight.mode.word.id = "chosen";
	} else if ( highlight === "letter" ) {
		SettingElement.highlight.off.id = "";
		SettingElement.highlight.mode.word.id = "";
		SettingElement.highlight.mode.letter.id = "chosen";
	} else {
		SettingElement.highlight.mode.letter.id = "";
		SettingElement.highlight.mode.word.id = "";
		SettingElement.highlight.off.id = "chosen";
	}
}

// fliphighlightcolor
export function changeUIFliphighlightcolorButtonTo(state) {
	if ( state === "on" ) {
		SettingElement.fliphighlightcolor.on.id = "chosen";
		SettingElement.fliphighlightcolor.off.id = "";
	} else {
		SettingElement.fliphighlightcolor.on.id = "";
		SettingElement.fliphighlightcolor.off.id = "chosen";
	}
}

// backspace
export function changeUIBackspaceButtonTo(state) {
	if ( state === "off" ) {
		SettingElement.backspace.on.id = "";
		SettingElement.backspace.off.id = "chosen";
	} else {
		SettingElement.backspace.on.id = "chosen";
		SettingElement.backspace.off.id = "";
	}
}

// modifier
export function toggleUIModifierButton(button) {
	if ( button.dataset.value === "alt" ) {
		if ( button.id === "chosen" ) {
			SettingElement.backspace.modifier.alt.id = "";
		} else {
			SettingElement.backspace.modifier.alt.id = "chosen";
		}
	} else if ( button.dataset.value === "ctrl" ) {
		if ( button.id === "chosen" ) {
			SettingElement.backspace.modifier.ctrl.id = "";
		} else {
			SettingElement.backspace.modifier.ctrl.id = "chosen";
		}
	} else {
		if ( button.id === "chosen" ) {
			SettingElement.backspace.modifier.meta.id = "";
		} else {
			SettingElement.backspace.modifier.meta.id = "chosen";
		}
	}
}

// tape
export function changeUITapeButtonTo(state) {
	if ( state === "on" ) {
		SettingElement.tape.off.id = "";
		SettingElement.tape.on.id = "chosen";
	} else {
		SettingElement.tape.on.id = "";
		SettingElement.tape.off.id = "chosen";
	}
}

// difficulty
export function changeUIDifficultyButtonTo(level) {
if ( level === "expert" ) {
		SettingElement.difficulty.normal.id = "";
		SettingElement.difficulty.master.id = "";
		SettingElement.difficulty.expert.id = "chosen";
	} else if ( level === "master" ) {
		SettingElement.difficulty.normal.id = "";
		SettingElement.difficulty.expert.id = "";
		SettingElement.difficulty.master.id = "chosen";
	} else {
		SettingElement.difficulty.expert.id = "";
		SettingElement.difficulty.master.id = "";
		SettingElement.difficulty.normal.id = "chosen";
	}
}

// confidence
export function changeUIConfidenceButtonTo(level) {
	if ( level === "high" ) {
		SettingElement.confidence.low.id = "";
		SettingElement.confidence.max.id = "";
		SettingElement.confidence.high.id = "chosen";
	} else if ( level === "max" ) {
		SettingElement.confidence.low.id = "";
		SettingElement.confidence.high.id = "";
		SettingElement.confidence.max.id = "chosen";
	} else {
		SettingElement.confidence.high.id = "";
		SettingElement.confidence.max.id = "";
		SettingElement.confidence.low.id = "chosen";
	}
}

// scroll
export function changeUIScrollButtonTo(scroll) {
	if ( scroll === "smooth" ) {
		SettingElement.scroll.abrupt.id = "";
		SettingElement.scroll.smooth.id = "chosen";
	} else {
		SettingElement.scroll.smooth.id = "";
		SettingElement.scroll.abrupt.id = "chosen";
	}
}

// keyboard
export function changeUIKeyboardButtonTo(reaction) {
	if ( reaction === "off" ) {
		SettingElement.keyboard.reaction.static.id = "";
		SettingElement.keyboard.reaction.react.id = "";
		SettingElement.keyboard.reaction.next.id = "";
		SettingElement.keyboard.off.id = "chosen";
	} else if ( reaction === "static" ) {
		SettingElement.keyboard.off.id = "";
		SettingElement.keyboard.reaction.react.id = "";
		SettingElement.keyboard.reaction.next.id = "";
		SettingElement.keyboard.reaction.static.id = "chosen";
	} else if ( reaction === "react" ) {
		SettingElement.keyboard.off.id = "";
		SettingElement.keyboard.reaction.static.id = "";
		SettingElement.keyboard.reaction.next.id = "";
		SettingElement.keyboard.reaction.react.id = "chosen";
	} else {
		SettingElement.keyboard.off.id = "";
		SettingElement.keyboard.reaction.static.id = "";
		SettingElement.keyboard.reaction.react.id = "";
		SettingElement.keyboard.reaction.next.id = "chosen";
	}
}

// warning
export function toggleUIWarningButton(button) {
	if ( button.dataset.value === "focus" ) {
    if ( button.id === "chosen" ) {
      SettingElement.warning.focus.id = "";
    } else {
      SettingElement.warning.focus.id = "chosen";
    }
  } else if ( button.dataset.value === "capslock" ) {
		if ( button.id === "chosen" ) {
			SettingElement.warning.capslock.id = "";
    } else {
			SettingElement.warning.capslock.id = "chosen";
    }
  } else {
		if ( button.id === "chosen" ) {
			SettingElement.warning.numlock.id = "";
    } else {
			SettingElement.warning.numlock.id = "chosen";
    }
  }
}

// inputvisibility
export function changeUIInputvisibilityButtonTo(visibility) {
	if ( visibility === "visible" ) {
		SettingElement.inputvisibility.hidden.id = "";
		SettingElement.inputvisibility.visible.id = "chosen";
	} else {
		SettingElement.inputvisibility.visible.id = "";
		SettingElement.inputvisibility.hidden.id = "chosen";
	}
}

// whitespace
export function changeUIWhitespaceButtonTo(whitespace) {
	if ( whitespace === "off" ) {
		SettingElement.whitespace.bullet.id = "";
		SettingElement.whitespace.space.id = "";
		SettingElement.whitespace.bar.id = "";
		SettingElement.whitespace.off.id = "chosen";
	} else if ( whitespace === "bullet" ) {
		SettingElement.whitespace.off.id = "";
		SettingElement.whitespace.space.id = "";
		SettingElement.whitespace.bar.id = "";
		SettingElement.whitespace.bullet.id = "chosen";
	} else if ( whitespace === "bar" ) {
		SettingElement.whitespace.off.id = "";
		SettingElement.whitespace.bullet.id = "";
		SettingElement.whitespace.space.id = "";
		SettingElement.whitespace.bar.id = "chosen";
	} else {
		SettingElement.whitespace.off.id = "";
		SettingElement.whitespace.bullet.id = "";
		SettingElement.whitespace.bar.id = "";
		SettingElement.whitespace.space.id = "chosen";
	}
}

// underline
export function changeUIUnderlineButtonTo(underline) {
	if ( underline === "on" ) {
		SettingElement.underline.off.id = "";
		SettingElement.underline.on.id = "chosen";
	} else {
		SettingElement.underline.on.id = "";
		SettingElement.underline.off.id = "chosen";
	}
}