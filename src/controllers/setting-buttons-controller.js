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