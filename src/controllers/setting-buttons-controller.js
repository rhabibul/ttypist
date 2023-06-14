import Config from "../../include/config.js"
import { Test } from "../main.js";

import * as SettingUI from "../ui/setting-buttons-ui.js";
import * as TestUI from "../ui/testarea-ui.js";
import * as SettingElement from "../elements/settings-elements.js"
import * as TestAreaElement from "../elements/testarea-elements.js";

// setting
//    - update internal state (config object)
//    - update external state (ui changes - buttons)
//    - update dependencies between among setting config options in both
//  		internal and external states

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