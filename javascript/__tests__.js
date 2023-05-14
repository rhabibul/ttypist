import Config from "./include/config.js";
import * as MiscElement from "./HTMLElement/MiscElement.js";
import * as SettingElement from "./HTMLElement/SettingElement.js";
import * as TestAreaElement from "./HTMLElement/TestAreaElement.js";

// config object testing
window.addEventListener("click", (evt) => {

});

window.addEventListener('load', (evt) => {
	if ( localStorage.getItem('Config') === null ) {
		window.localStorage.setItem('Config', JSON.stringify(Config));
	} else {
		// parse local config object from localStorage
		// make config object equal to local config object i.e, assign local config objec's fields to config object
		// make necessary ui changes according to local config object
	}
});


SettingElement.fullscreenToggleButton.addEventListener("click", (evt) => {
	if (!document.fullscreenElement && !SettingElement.enterFullscreen.classList.contains("hidden")) {
		SettingElement.enterFullscreen.classList.add("hidden");
		SettingElement.exitFullscreen.classList.remove("hidden");
		document.documentElement.requestFullscreen();
    TestAreaElement.input.focus();
	} else {
    SettingElement.exitFullscreen.classList.add("hidden");
		SettingElement.enterFullscreen.classList.remove("hidden");
		document.exitFullscreen();
    TestAreaElement.input.focus();
	}
});

// sliders
const slider_fontsize = document.querySelector("input#slider.fsize");
const slider_fontweight = document.querySelector("input#slider.fweight");
const label_fontsize = document.querySelector(".fontsize-value");
const label_fontweight = document.querySelector(".fontweight-value");

slider_fontsize.addEventListener("input", () => {
	MiscElement.root.style.setProperty("--textsize", `${slider_fontsize.value}rem`);
	label_fontsize.textContent = `${slider_fontsize.value}rem`;
  Config.text.textsize = slider_fontsize.value;
});
slider_fontweight.addEventListener("input", () => {
	MiscElement.root.style.setProperty("--textweight", `${slider_fontweight.value}`);
	label_fontweight.textContent = `${slider_fontweight.value}`;
  Config.text.textweight = slider_fontweight.value;
});

window.addEventListener("offline", (evt) => { 
	// Tooltip UI: [Icon] You are currently offline. [Refresh Link (in blue)] [cross button]
	console.log("You are currently offline.");
});
window.addEventListener("online", (evt) => {
	// Tooltip UI: [Icon] Your Internet connection was restored.  [cross button]
	console.log("Your Internet connection was restored.");
})

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