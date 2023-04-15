import * as SettingElement from "../HTMLElement/SettingElement.js";
import * as Misc from "../utils/misc.js"

const active_color = Misc.computedstyles.getPropertyValue("--active-color");
const active_bgcolor = Misc.computedstyles.getPropertyValue("--active-backgroundcolor");

const inactive_color = Misc.computedstyles.getPropertyValue("--inactive-color");
const inactive_bgcolor = Misc.computedstyles.getPropertyValue("--inactive-backgroundcolor");

const off_color = Misc.computedstyles.getPropertyValue("--off-color");
const off_color_faded = Misc.computedstyles.getPropertyValue("--off-color-faded");
const off_bgcolor = Misc.computedstyles.getPropertyValue("--off-backgroundcolor");

function colorshapeof(caret, caretIsActive) {

	const shape = document.querySelector(`caret ${caret.dataset.type} shape`);

	if ( caret.dataset.type === "line" || caret.dataset.type === "block" ) {
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
	} else if ( caret.dataset.type === "underline" ) {
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
	} else if ( caret.dataset.type === "box" ) {
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
		const i = document.querySelector(`caret off i.fa-ban`);
		if ( caretIsActive ) {
			i.style.color = off_color;
			caret.style.backgroundColor = off_bgcolor;
		} else {
			i.style.color = off_color_faded;
			caret.style.backgroundColor = inactive_bgcolor;
		}
	}
}

export function changeUICaret(caret) {

  // activate the clicked caret first
  if ( caret.dataset.type !== "off" ) {
    // set active background color for the selected caret container
    caret.style.backgroundColor = active_bgcolor;
  }
  colorshapeof(caret, true); // set active color for the selected caret shape
  
  // set inactive backgroundcolor & inactive color for all carets except the selected one
  for ( const othercaret of Object.values(SettingElement.caret) ) {
    if ( caret !== othercaret ) {
      // set inactive background color to all caret containers except the selected one
      othercaret.style.backgroundColor = inactive_bgcolor;

      // set inactive color to caret shapes except the selected one
      colorshapeof(othercaret, false);
    }
  }
}