import Config from "../../include/config.js"
import * as SettingsElement from "../elements/settingsElements.js";
import * as SettingsChangeInConfig from "../controllers/settingsChangeInConfig.js";
import * as SettingsChangeInUI from "../ui/settingsChangeInUI.js";
import * as TestAreaElements from "../elements/testAreaElements.js";

TestAreaElements.text.addEventListener("click", () => { TestAreaElements.input.focus() });

function fn(evt) {
	// avoid bots clicking, also later avoid double clicking of the selected button
	if ( !evt.isTrusted ) return;
	// if ( this.whateverValueIsClicked === config.theValueWhichIsInUse ) return;
	
	// console.log(evt);
	console.log(this?.value);
	// console.log(this.className);
	// console.log(this?.checked, this.parentElement.className, this.id, this.dataset.value);
	// console.log(evt.target);
	// console.log(evt.currentTarget);
}

// dynamic settings
SettingsElement.setting.dynamic.off.addEventListener("click", fn);
SettingsElement.setting.dynamic.on.addEventListener("click", fn);

// dynamic settings (s2)
function updateDynamicSettings(evt) {
	if ( !evt.isTrusted ) return;
}

// website theme
SettingsElement.websiteTheme.light.addEventListener("click", fn);
SettingsElement.websiteTheme.midnight.addEventListener("click", fn);
SettingsElement.websiteTheme.dark.addEventListener("click", fn);

// website theme (s3)
function updateWebsiteTheme(evt) {
	if ( !evt.isTrusted ) return;
}

// tape mode
SettingsElement.tape.off.addEventListener("click", fn);
SettingsElement.tape.mode.letter.addEventListener("click", fn);
SettingsElement.tape.mode.word.addEventListener("click", fn);

// tape mode (s3)
function updateTapeMode(evt) {
	if ( !evt.isTrusted ) return;
}

// opposite shift mode
SettingsElement.oppositeshift.off.addEventListener("click", fn);
SettingsElement.oppositeshift.on.addEventListener("click", fn);

// opposite shift mode (s2)
function updateOppositeShiftMode(evt) {
	if ( !evt.isTrusted ) return;
}

// backspace key
SettingsElement.backspace.off.addEventListener("click", fn);
SettingsElement.backspace.on.addEventListener("click", fn);

// backspace key (s2)
function updateBackspaceKey(evt) {
	if ( !evt.isTrusted ) return;
}

// modifier keys
SettingsElement.modifier.alt.addEventListener("click", fn);
SettingsElement.modifier.ctrl.addEventListener("click", fn);
SettingsElement.modifier.meta.addEventListener("click", fn);

// modifier keys (s3)
function updateModifierKey(evt) {
	if ( !evt.isTrusted ) return;
}

// backspace not allowed on correct
SettingsElement.goBackOnCorrect.off.addEventListener("click", fn);
SettingsElement.goBackOnCorrect.on.addEventListener("click", fn);

// backspace not allowed on correct (s2)
function updateGoBackOnCorrect(evt) {
	if ( !evt.isTrusted ) return;
}

// confidence
SettingsElement.confidence.low.addEventListener("click", fn);
SettingsElement.confidence.high.addEventListener("click", fn);
SettingsElement.confidence.peak.addEventListener("click", fn);

// confidence (s3)
function updateConfidence(evt) {
	if ( !evt.isTrusted ) return;
}

// difficulty
SettingsElement.difficulty.ease.addEventListener("click", fn);
SettingsElement.difficulty.expert.addEventListener("click", fn);
SettingsElement.difficulty.master.addEventListener("click", fn);

// difficulty (s3)
function updateDifficulty(evt) {
	if ( !evt.isTrusted ) return;
}

// error
SettingsElement.error.off.addEventListener("click", fn);
SettingsElement.error.insert.addEventListener("click", fn);
SettingsElement.error.skip.addEventListener("click", fn);
SettingsElement.error.replace.addEventListener("click", fn);

// error (s4)
function updateError(evt) {
	if ( !evt.isTrusted ) return;
}

// forgive error
SettingsElement.error.forgive.off.addEventListener("click", fn);
SettingsElement.error.forgive.on.addEventListener("click", fn);

// forgive error (s2)
function updateForgiveError(evt) {
	if ( !evt.isTrusted ) return;
}

// stop on error
SettingsElement.error.stop.off.addEventListener("click", fn);
SettingsElement.error.stop.letter.addEventListener("click", fn);
SettingsElement.error.stop.word.addEventListener("click", fn);

// stop on error (s3)
function updateStopOnError(evt) {
	if ( !evt.isTrusted ) return;
}

// minimum speed
SettingsElement.minimum.speed.off.addEventListener("click", fn);
SettingsElement.minimum.speed.on.addEventListener("click", fn);
SettingsElement.minimum.speed.thresholdInput.addEventListener("input", fn);

// minimum speed (s3)
function updateMinimumSpeed(evt) {
	if ( !evt.isTrusted ) return;
}

// minimum accuracy
SettingsElement.minimum.accuracy.off.addEventListener("click", fn);
SettingsElement.minimum.accuracy.on.addEventListener("click", fn);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("input", fn);

// minimum accuracy (s3)
function updateMinimumAccuracy(evt) {
	if ( !evt.isTrusted ) return;
}

// minimum burst
SettingsElement.minimum.burst.off.addEventListener("click", fn);
SettingsElement.minimum.burst.fixed.addEventListener("click", fn);
SettingsElement.minimum.burst.flex.addEventListener("click", fn);
SettingsElement.minimum.burst.thresholdInput.addEventListener("input", fn);

// minimum burst (s3)
function updateMinimumBurst(evt) {
	if ( !evt.isTrusted ) return;
}

// caret style
SettingsElement.caret.off.addEventListener("click", fn);
SettingsElement.caret.style.underline.addEventListener("click", fn);
SettingsElement.caret.style.line.addEventListener("click", fn);
SettingsElement.caret.style.box.addEventListener("click", fn);
SettingsElement.caret.style.block.addEventListener("click", fn);

// caret style (s5)
function updateCaretStyle(evt) {
	if ( !evt.isTrusted ) return;
}

// caret color
SettingsElement.caret.color.selectorInput.addEventListener("input", fn);
SettingsElement.caret.color.textInput.addEventListener("input", fn);

// caret color (s2)
function updateCaretColor(evt) {
	if ( !evt.isTrusted ) return;
}

// pacecaret style
SettingsElement.pacecaret.off.addEventListener("click", fn);
SettingsElement.pacecaret.style.underline.addEventListener("click", fn);
SettingsElement.pacecaret.style.line.addEventListener("click", fn);
SettingsElement.pacecaret.style.box.addEventListener("click", fn);
SettingsElement.pacecaret.style.block.addEventListener("click", fn);

// pacecaret style (s5)
function updatePaceCaretStyle(evt) {
	if ( !evt.isTrusted ) return;
}

// pacecaret color
SettingsElement.pacecaret.color.selectorInput.addEventListener("input", fn);
SettingsElement.pacecaret.color.textInput.addEventListener("input", fn);

// pacecaret color (s2)
function updatePaceCaretColor(evt) {
	if ( !evt.isTrusted ) return;
}

// pacecaret speed
SettingsElement.pacecaret.speed.off.addEventListener("click", fn);
SettingsElement.pacecaret.speed.last.addEventListener("click", fn);
SettingsElement.pacecaret.speed.average.addEventListener("click", fn);
SettingsElement.pacecaret.speed.best.addEventListener("click", fn);
SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.addEventListener("input", fn);

// pacecaret speed (s5)
function updatePaceCaretSpeed(evt) {
	if ( !evt.isTrusted ) return;
}

// text input
SettingsElement.textInput.hidden.addEventListener("click", fn);
SettingsElement.textInput.visible.addEventListener("click", fn);

// text input (s2)
function updateTextInput(evt) {
	if ( !evt.isTrusted ) return;
}

// text highlight
SettingsElement.textHighlight.off.addEventListener("click", fn);
SettingsElement.textHighlight.mode.letter.addEventListener("click", fn);
SettingsElement.textHighlight.mode.word.addEventListener("click", fn);

// text highlight (s3)
function updateTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
}

// flip text highlight
SettingsElement.textHighlight.flip.off.addEventListener("click", fn);
SettingsElement.textHighlight.flip.on.addEventListener("click", fn);

// flip text highlight (s2)
function updateFlipTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
}

// text underline
SettingsElement.textUnderline.off.addEventListener("click", fn);
SettingsElement.textUnderline.on.addEventListener("click", fn);

// text underline (s2)
function updateTextUnderline(evt) {
	if ( !evt.isTrusted ) return;
}

// primary text color
SettingsElement.textColor.primary.selectorInput.addEventListener("input", updatePrimaryTextColorSelectorInput);
SettingsElement.textColor.primary.textInput.addEventListener("input", updatePrimaryTextColorTextInput);

// primary text color (s2)
function updatePrimaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-color-primary", this.value);
	SettingsElement.textColor.primary.textInput.value = this.value;
	Config.text.color.primary = this.value;
}
function updatePrimaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-color-primary", this.value);
	Config.text.color.primary = this.value;
}

// secondary text color
SettingsElement.textColor.secondary.selectorInput.addEventListener("input", updateSecondaryTextColorSelectorInput);
SettingsElement.textColor.secondary.textInput.addEventListener("input", updateSecondaryTextColorTextInput);

// secondary text color (s2)
function updateSecondaryTextColorSelectorInput(evt) { // selector input (color)
	if ( !evt.isTrusted ) return;
	SettingsElement.textColor.secondary.textInput.value = this.value;
	document.querySelector(":root").style.setProperty("--text-color-secondary", this.value);
	Config.text.color.secondary = this.value;
}
function updateSecondaryTextColorTextInput(evt) { // text input (color)
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-color-secondary", this.value);
	Config.text.color.secondary = this.value;
}

// timer
SettingsElement.timer.off.addEventListener("click", fn);
SettingsElement.timer.time.seconds15.addEventListener("click", fn);
SettingsElement.timer.time.seconds30.addEventListener("click", fn);
SettingsElement.timer.time.seconds60.addEventListener("click", fn);
SettingsElement.timer.time.seconds120.addEventListener("click", fn);
SettingsElement.timer.time.customSecondsInput.addEventListener("input", fn);

// hide timer
SettingsElement.timer.hide.off.addEventListener("click", fn);
SettingsElement.timer.hide.on.addEventListener("click", fn);

// timer (s5)
function updateTimerSeconds(evt) {
	if ( !evt.isTrusted ) return;
}
// timer (s1) - custom seconds input box
function updateTimerSecondsByTakingCustomInput(evt) {
	if ( !evt.isTrusted ) return;
}
// hide timer (s2)
function updateTimerHide(evt) {
	if ( !evt.isTrusted ) return;
}

// text word count
SettingsElement.textWordCount.off.addEventListener("click", fn);
SettingsElement.textWordCount.count.words10.addEventListener("click", fn);
SettingsElement.textWordCount.count.words25.addEventListener("click", fn);
SettingsElement.textWordCount.count.words50.addEventListener("click", fn);
SettingsElement.textWordCount.count.words100.addEventListener("click", fn);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("input", fn);

// text word count (s5)
function updateWordCount(evt) {
	if ( !evt.isTrusted ) return;
}
// text word count (s1) - custom word count input box
function updateWordCountByTakingCustomInput(evt) {
	if ( !evt.isTrusted ) return;
}

// quickend
SettingsElement.quickend.off.addEventListener("click", fn);
SettingsElement.quickend.on.addEventListener("click", fn);

// quickend (s2)
function updateEndWithSpace(evt) {
	if ( !evt.isTrusted ) return;
}

// details
SettingsElement.details.textFontFamily.addEventListener("click", fn);
SettingsElement.details.textWordLength.addEventListener("click", fn);
SettingsElement.details.textWordType.addEventListener("click", fn);
SettingsElement.details.textCapitalization.addEventListener("click", fn);
SettingsElement.details.keyboardLanguage.addEventListener("click", fn);
SettingsElement.details.keyboardLayout.addEventListener("click", fn);

// details: text font family (s1)
function updateTextFontFamily(evt) {
	if ( !evt.isTrusted ) return;
}
// details: text word length (s1)
function updateTextWordLength(evt) {
	if ( !evt.isTrusted ) return;
}
// details: text word type (s1)
function updateTextWordType(evt) {
	if ( !evt.isTrusted ) return;
}
// details: text capitalization (s1)
function updateTextCapitalization(evt) {
	if ( !evt.isTrusted ) return;
}
// details: keyboard langugae (s1)
function updateKeyboardLanguage(evt) {
	if ( !evt.isTrusted ) return;
}
// details: keyboard layout (s1)
function updateKeyboardLayout(evt) {
	if ( !evt.isTrusted ) return;
}

// // sliders
// const slider_fontsize = document.querySelector("div.config.textFontSize > div.textFontSizeInput > input[type='range']");
// const t1 = document.querySelector("div.config.textFontSize > div.text.value");
// slider_fontsize.addEventListener("input", () => {
// 	MiscElement.root.style.setProperty("--text-size", `${slider_fontsize.value}px`);
//   Config.text.font.size = slider_fontsize.value;
// 	t1.textContent = `${slider_fontsize.value}`;
// });

// const slider_fontweight = document.querySelector("div.config.textFontWeight > div.textFontWeightInput > input[type='range']");
// const t2 = document.querySelector("div.config.textFontWeight > div.text.value");
// slider_fontweight.addEventListener("input", () => {
// 	MiscElement.root.style.setProperty("--text-thickness", `${slider_fontweight.value}`);
//   Config.text.font.weight = slider_fontweight.value;
// 	t2.textContent = slider_fontweight.value;
// });


// text font size slider (s1)
SettingsElement.textFontSize.fontSizeInput.addEventListener("input", fn);



// text font weight slider (s1)
SettingsElement.textFontWeight.fontWeightInput.addEventListener("input", fn);

// text whitespace (s4)
SettingsElement.textWhitespace.off.addEventListener("click", fn);
SettingsElement.textWhitespace.type.bullet.addEventListener("click", fn);
SettingsElement.textWhitespace.type.space.addEventListener("click", fn);
SettingsElement.textWhitespace.type.bar.addEventListener("click", fn);

// text include (s2)
SettingsElement.textInclude.digit.addEventListener("click", fn);
SettingsElement.textInclude.punctuation.addEventListener("click", fn);

// text scroll (s2)
SettingsElement.textScroll.abrupt.addEventListener("click", fn);
SettingsElement.textScroll.smooth.addEventListener("click", fn);

// live stats (s3)
SettingsElement.stats.live.speed.addEventListener("click", fn);
SettingsElement.stats.live.accuracy.addEventListener("click", fn);
SettingsElement.stats.live.burst.addEventListener("click", fn);

// live stats calculation interval (s3)
SettingsElement.stats.calcInterval.word.addEventListener("click", fn);
SettingsElement.stats.calcInterval.keystroke.addEventListener("click", fn);
SettingsElement.stats.calcInterval.second.addEventListener("click", fn);

// speed unit (s2)
SettingsElement.stats.unit.cpm.addEventListener("click", fn);
SettingsElement.stats.unit.wpm.addEventListener("click", fn);

// use floats (s2)
SettingsElement.stats.usefloats.off.addEventListener("click", fn);
SettingsElement.stats.usefloats.on.addEventListener("click", fn);

// warnings (s3)
SettingsElement.warnings.capslock.addEventListener("click", fn);
SettingsElement.warnings.numlock.addEventListener("click", fn);
SettingsElement.warnings.scrolllock.addEventListener("click", fn);

// focus out warning (s2)
SettingsElement.focusOutWarning.off.addEventListener("click", fn);
SettingsElement.focusOutWarning.on.addEventListener("click", fn);

// keyboard reaction (s4)
SettingsElement.keyboardReaction.off.addEventListener("click", fn);
SettingsElement.keyboardReaction.static.addEventListener("click", fn);
SettingsElement.keyboardReaction.react.addEventListener("click", fn);
SettingsElement.keyboardReaction.next.addEventListener("click", fn);

// emulate keyboard layout
SettingsElement.emulateKeyboardLayout.off.addEventListener("click", fn);
SettingsElement.emulateKeyboardLayout.on.addEventListener("click", fn);

// emulate keyboard layout (s2)
function updateEmulateKeyboardLayout(evt) {
	if ( !evt.isTrusted ) return;
}