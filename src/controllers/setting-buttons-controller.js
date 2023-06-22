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

function fn(evt) {
	if ( !evt.isTrusted ) return; // avoid bots clicking
	console.log(this?.value);
	// console.log(this?.checked);
	// console.log(evt.target);
	// console.log(evt.currentTarget);
}

// dynamic settings
SettingsElement.setting.dynamic.off.addEventListener("click", fn);
SettingsElement.setting.dynamic.on.addEventListener("click", fn);

// website theme
SettingsElement.websiteTheme.light.addEventListener("click", fn);
SettingsElement.websiteTheme.dimmed.addEventListener("click", fn);
SettingsElement.websiteTheme.dark.addEventListener("click", fn);
SettingsElement.websiteTheme.black.addEventListener("click", fn);

// tape mode
SettingsElement.tape.off.addEventListener("click", fn);
SettingsElement.tape.mode.letter.addEventListener("click", fn);
SettingsElement.tape.mode.word.addEventListener("click", fn);

// opposite shift mode
SettingsElement.oppositeshift.off.addEventListener("click", fn);
SettingsElement.oppositeshift.on.addEventListener("click", fn);

// backspace key
SettingsElement.backspace.off.addEventListener("click", fn);
SettingsElement.backspace.on.addEventListener("click", fn);

// modifier keys
SettingsElement.modifier.alt.addEventListener("click", fn);
SettingsElement.modifier.ctrl.addEventListener("click", fn);
SettingsElement.modifier.meta.addEventListener("click", fn);

// backspace not allowed on correct
SettingsElement.backspaceNotAllowedOnCorrect.off.addEventListener("click", fn);
SettingsElement.backspaceNotAllowedOnCorrect.on.addEventListener("click", fn);

// confidence
SettingsElement.confidence.low.addEventListener("click", fn);
SettingsElement.confidence.high.addEventListener("click", fn);
SettingsElement.confidence.peak.addEventListener("click", fn);

// difficulty
SettingsElement.difficulty.ease.addEventListener("click", fn);
SettingsElement.difficulty.expert.addEventListener("click", fn);
SettingsElement.difficulty.master.addEventListener("click", fn);
