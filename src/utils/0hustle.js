/**
 * NOTES
 * 
 * > events bubble by default
 * 			target is the element that triggered the event
 * 			currentTarget is the element that the event listener is attached to
 * 
 * > html attribute query methods
 *   		element.attribute [for e.g, details.open]
 * 		  element.toggleAttribute("attribute")
 *	 		element.hasAttribute("attribute")
 *	 		element.removeAttribute("attribute")
 *	 		element.getAttribute("attribute")
 *	 		element.setAttribute("attribute", "value")
**/
// import { config } from "../include/config.js";
// import * as SettingsElement from "./elements/settingsElements.js";


// // pacecaret with dispatching keydown/keyup events (experimental)
// const l = document.getElementsByTagName("letter");
// let curr = l[0];
// let i = 0;
// setInterval(() => {
//   curr.id = "";
//   ++i;
//   curr = l[i];
//   curr.id = Config.caret.style;
// }, 250);

// // set css property value
// document.querySelector(":root").computedStyleMap.setProperty("--variable", value);
// // retrieve css property value
// getComputedStyle(document.querySelector(":root")).getPropertyValue("--variable");

/*
var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});
*/

// "open" attribute can be used on details tag to keep it open
// details.addEventListener("toggle", (event) => {
//   if (details.open) {
//     // the element was toggled open
//   } else {
//     // the element was toggled closed
//   }
// });


// window.addEventListener('load', (evt) => {
// 	if ( localStorage.getItem('Config') === null ) {
// 		window.localStorage.setItem('Config', JSON.stringify(Config));
// 	} else {
// 		// 1. parse local config object from localStorage
// 		// 2. load the parsed local config object to main config object
// 		// 3. make necessary ui changes according to local config object
// 	}
// });

// window.addEventListener("offline", (evt) => { 
// 	// Tooltip UI: [Icon] You are currently offline. [Refresh Link (in blue)] [cross button]
// 	console.log("You are currently offline.");
// });
// window.addEventListener("online", (evt) => {
// 	// Tooltip UI: [Icon] Your Internet connection was restored.  [cross button]
// 	console.log("Your Internet connection was restored.");
// })

// const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
// 	'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ];
// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // try using evt.code & evt.key to determine keyboard layout, use .has(), .get()
// // keyboardLayoutMap
// // 		.entries()
// // 		.keys() 	-> returns values which are equivalent to evt.key of keyboard events
// // 		.values() -> returns values which are equivalent to evt.code of keyboard events
// // 		.get()
// // 	  .has()
// // 	  .size
// //    .forEach((key, code, keyboardLayoutMap) => {})
// navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
	
// 	let s = "", d = "", sym = "";
	
// 	keyboardLayoutMap.forEach((whatever) => {
// 		if ( alphabets.some((char) => whatever === char)) s += whatever;
// 		else if ( digits.some((char) => whatever === char) ) d += whatever
// 		else sym += whatever;
// 	});

// 	s = s.split('').sort().join('');
// 	d = d.split('').sort().join('');
// 	sym = sym.split('').sort().join('');
	
// 	console.log(s, s.length);
// 	console.log(d, d.length);
// 	console.log(sym, sym.length);
// });

// if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
// 	console.log("DARK MODE");
// } else {
// 	console.log("LIGHT MODE");
// }
// const runColorMode = (fn) => {
//   if (!window.matchMedia) {
//     return;
//   }
//   const query = window.matchMedia('(prefers-color-scheme: dark)');
//   fn(query.matches);
//   query.addEventListener('change', (event) => fn(event.matches));
// }
// runColorMode((isDarkMode) => {
//   if (isDarkMode) {
//     document.body.classList.add('dark-mode');
//   } else {
//     document.body.classList.remove('dark-mode');
//   }
// })

// SettingElement.fullscreenToggleButton.addEventListener("click", (evt) => {
// 	if (!document.fullscreenElement && !SettingElement.enterFullscreen.classList.contains("hidden")) {
// 		SettingElement.enterFullscreen.classList.add("hidden");
// 		SettingElement.exitFullscreen.classList.remove("hidden");
// 		document.documentElement.requestFullscreen();
//     TestAreaElement.input.focus();
// 	} else {
//     SettingElement.exitFullscreen.classList.add("hidden");
// 		SettingElement.enterFullscreen.classList.remove("hidden");
// 		document.exitFullscreen();
//     TestAreaElement.input.focus();
// 	}
// });