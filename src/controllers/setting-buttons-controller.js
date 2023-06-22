import Config from "../../include/config.js"
import * as TestAreaElement from "../elements/testarea-elements.js";
import * as SettingsElement from "../elements/settings-elements.js";

// setting
//    - update internal state (config object)
//    - update external state (ui changes - buttons)
//    - update dependencies between among other config options in both config 
//      object and ui (settings page)

// input field
TestAreaElement.text.addEventListener("click", () => { TestAreaElement.input.focus(); });

// "open" attribute can be used on details tag to keep it open
// details.addEventListener("toggle", (event) => {
//   if (details.open) {
//     // the element was toggled open
//   } else {
//     // the element was toggled closed
//   }
// });

// 🫵
// use evt.isTrusted to prevent bots clicking any button on ttypist


// change css variable color for all four input selector's ::before and also update 
// in input tag beside it
// 
// let colorPicker = document.querySelectorAll('input.colorSelector');
// colorPicker.addEventListener('input',() => {
// 	colorPicker.style.setProperty('--color-picker', colorPicker.value)
// })