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
SettingsElement.setting.dynamic.off.addEventListener("click", updateDynamicSettings);
SettingsElement.setting.dynamic.on.addEventListener("click", updateDynamicSettings);

// text input
SettingsElement.textInput.hidden.addEventListener("click", updateTextInput);
SettingsElement.textInput.visible.addEventListener("click", updateTextInput);

// tape mode
SettingsElement.tape.off.addEventListener("click", updateTapeMode);
SettingsElement.tape.mode.letter.addEventListener("click", updateTapeMode);
SettingsElement.tape.mode.word.addEventListener("click", updateTapeMode);

// text scroll
SettingsElement.textScroll.abrupt.addEventListener("click", updateTextScroll);
SettingsElement.textScroll.smooth.addEventListener("click", updateTextScroll);

// text highlight
SettingsElement.textHighlight.off.addEventListener("click", updateTextHighlight);
SettingsElement.textHighlight.mode.letter.addEventListener("click", updateTextHighlight);
SettingsElement.textHighlight.mode.word.addEventListener("click", updateTextHighlight);

// flip text highlight
SettingsElement.textHighlight.flip.off.addEventListener("click", updateFlipTextHighlight);
SettingsElement.textHighlight.flip.on.addEventListener("click", updateFlipTextHighlight);

// text underline
SettingsElement.textUnderline.off.addEventListener("click", updateTextUnderline);
SettingsElement.textUnderline.on.addEventListener("click", updateTextUnderline);

// text whitespace
SettingsElement.textWhitespace.off.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.bullet.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.space.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.bar.addEventListener("click", updateTextWhitespace);

// website theme
SettingsElement.websiteTheme.light.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.midnight.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.dark.addEventListener("click", updateWebsiteTheme);

// ###############################################################################

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
}
function updateSecondaryTextColorTextInput(evt) { // text input (color)
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-color-secondary", this.value);
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

// text font size slider
SettingsElement.textFontSize.fontSizeInput.addEventListener("input", updateTextFontSize);

// text font weight slider
SettingsElement.textFontWeight.fontWeightInput.addEventListener("input", updateTextFontWeight);


// text font size slider (s1)
function updateTextFontSize(evt) {
	if ( !evt.isTrusted ) return;
	SettingsElement.textFontSize.fontSizeDisplayBox.textContent = this.value;
	document.querySelector(":root").style.setProperty("--text-size", `${this.value}px`);
}

// text font weight slider (s1)
function updateTextFontWeight(evt) {
	if ( !evt.isTrusted ) return;
	SettingsElement.textFontWeight.fontWeightDisplayBox.textContent = this.value;
	document.querySelector(":root").style.setProperty("--text-thickness", `${this.value}`);
}

// text include
SettingsElement.textInclude.digit.addEventListener("click", fn);
SettingsElement.textInclude.punctuation.addEventListener("click", fn);

// text include (s2)
function updateTextInclude(evt) {
	if ( !evt.isTrusted ) return;
}

// live stats
SettingsElement.stats.live.speed.addEventListener("click", fn);
SettingsElement.stats.live.accuracy.addEventListener("click", fn);
SettingsElement.stats.live.burst.addEventListener("click", fn);

// live stats (s3)
function updateLiveStats(evt) {
	if ( !evt.isTrusted ) return;
}

// live stats calculation interval
SettingsElement.stats.calcInterval.word.addEventListener("click", fn);
SettingsElement.stats.calcInterval.keystroke.addEventListener("click", fn);
SettingsElement.stats.calcInterval.second.addEventListener("click", fn);

// live stats calculation interval (s3)
function updateLiveStatsCalculationInterval(evt) {
	if ( !evt.isTrusted ) return;
}

// speed unit
SettingsElement.stats.unit.cpm.addEventListener("click", fn);
SettingsElement.stats.unit.wpm.addEventListener("click", fn);

// speed unit (s2)
function updateSpeedUnit(evt) {
	if ( !evt.isTrusted ) return;
}

// show floats
SettingsElement.stats.usefloats.off.addEventListener("click", fn);
SettingsElement.stats.usefloats.on.addEventListener("click", fn);

// show floats (s2)
function updateUseFloats(evt) {
	if ( !evt.isTrusted ) return;
}

// warnings
SettingsElement.warnings.capslock.addEventListener("click", fn);
SettingsElement.warnings.numlock.addEventListener("click", fn);
SettingsElement.warnings.scrolllock.addEventListener("click", fn);

// warnings (s3)
function updateWarnings(evt) {
	if ( !evt.isTrusted ) return;
}

// out of focus warning
SettingsElement.focusOutWarning.off.addEventListener("click", fn);
SettingsElement.focusOutWarning.on.addEventListener("click", fn);

// out of focus warning (s2)
function updateOutOfFocusWarning(evt) {
	if ( !evt.isTrusted ) return;
}

// keyboard reaction
SettingsElement.keyboardReaction.off.addEventListener("click", fn);
SettingsElement.keyboardReaction.static.addEventListener("click", fn);
SettingsElement.keyboardReaction.react.addEventListener("click", fn);
SettingsElement.keyboardReaction.next.addEventListener("click", fn);

// keyboard reaction (s4)
function updateKeyboardReaction(evt) {
	if ( !evt.isTrusted ) return;
}

// emulate keyboard layout
SettingsElement.emulateKeyboardLayout.off.addEventListener("click", fn);
SettingsElement.emulateKeyboardLayout.on.addEventListener("click", fn);

// emulate keyboard layout (s2)
function updateEmulateKeyboardLayout(evt) {
	if ( !evt.isTrusted ) return;
}

// ###############################################################################

// dynamic settings (s2)
function updateDynamicSettings(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.setting.dynamic && this.value === "on") ||  (!Config.setting.dynamic && this.value === "off") ) return;

	SettingsChangeInUI.changeDynamicSettingsInUI(this.value);
	SettingsChangeInConfig.changeDynamicSettingsInConfig(this.value);
}

// text input (s2)
function updateTextInput(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.input.hidden && this.value === "hidden") || (Config.text.input.visible && this.value === "visible") ) return;

	SettingsChangeInUI.changeTextInputInUI(this.value);
	SettingsChangeInConfig.changeTextInputInConfig(this.value);
}

// tape mode (s3)
function updateTapeMode(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.tape.off && this.value === "off") || (Config.tape.mode.letter && this.value === "letter") || (Config.tape.mode.word && this.value === "word") ) return;
	
	SettingsChangeInUI.changeTapeModeInUI(this.value);
	SettingsChangeInConfig.changeTapeModeInConfig(this.value);
}

// text scroll (s2)
function updateTextScroll(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.scroll.abrupt && this.value === "abrupt") || (Config.text.scroll.smooth && this.value === "smooth") ) return;
	
	SettingsChangeInUI.changeTextScrollInUI(this.value);
	SettingsChangeInConfig.changeTextScrollInConfig(this.value);
}

// text highlight (s3)
function updateTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.highlight.off && this.value === "off") || (Config.text.highlight.mode.letter && this.value === "letter") || (Config.text.highlight.mode.word && this.value === "word")) return;

	SettingsChangeInUI.changeTextHightlightInUI(this.value);
	SettingsChangeInConfig.changeTextHightlightInConfig(this.value)
}

// flip text highlight (s2)
function updateFlipTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.highlight.flip && this.value === "on") || (!Config.text.highlight.flip && this.value === "off") ) return;

	SettingsChangeInUI.changeFlipTextHightlightInUI(this.value);
	SettingsChangeInConfig.changeFlipTextHightlightInConfig(this.value);
}

// text underline (s2)
function updateTextUnderline(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.underline && this.value === "on") || (!Config.text.underline && this.value === "off") ) return;

	SettingsChangeInUI.changeTextUnderlineInUI(this.value);
	SettingsChangeInConfig.changeTextUnderlineInConfig(this.value);
}

// text whitespace (s4)
function updateTextWhitespace(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.whitespace.off && this.value === "off") || (Config.text.whitespace.type.bullet && this.value === "bullet") || (Config.text.whitespace.type.space && this.value === "space") || (Config.text.whitespace.type.bar && this.value === "bar") ) return;

	SettingsChangeInUI.changeTextWhitespaceInUI(this.value);
	SettingsChangeInConfig.changeTextWhitespaceInConfig(this.value);
}

// website theme (s3)
function updateWebsiteTheme(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.websitetheme ) return;

	SettingsChangeInUI.changeWebsiteThemeInUI(this.value);
	SettingsChangeInConfig.changeWebsiteThemeInConfig(this.value);
}
