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

// website theme
SettingsElement.websiteTheme.light.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.midnight.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.dark.addEventListener("click", updateWebsiteTheme);

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

// quickend
SettingsElement.strictspace.off.addEventListener("click", updateStrictSpace);
SettingsElement.strictspace.on.addEventListener("click", updateStrictSpace);

// quickend
SettingsElement.quickend.off.addEventListener("click", updateQuickEnd);
SettingsElement.quickend.on.addEventListener("click", updateQuickEnd);

// difficulty
SettingsElement.difficulty.ease.addEventListener("click", updateDifficulty);
SettingsElement.difficulty.expert.addEventListener("click", updateDifficulty);
SettingsElement.difficulty.master.addEventListener("click", updateDifficulty);

// confidence
SettingsElement.confidence.low.addEventListener("click", updateConfidence);
SettingsElement.confidence.high.addEventListener("click", updateConfidence);
SettingsElement.confidence.peak.addEventListener("click", updateConfidence);

// backspace key
SettingsElement.backspace.off.addEventListener("click", updateBackspaceKey);
SettingsElement.backspace.on.addEventListener("click", updateBackspaceKey);

// backspace not allowed on correct
SettingsElement.goBackOnCorrect.off.addEventListener("click", updateGoBackOnCorrect);
SettingsElement.goBackOnCorrect.on.addEventListener("click", updateGoBackOnCorrect);

// modifier keys
SettingsElement.modifier.alt.addEventListener("click", updateModifierKey);
SettingsElement.modifier.ctrl.addEventListener("click", updateModifierKey);
SettingsElement.modifier.meta.addEventListener("click", updateModifierKey);

// error
SettingsElement.error.off.addEventListener("click", updateError);
SettingsElement.error.insert.addEventListener("click", updateError);
SettingsElement.error.skip.addEventListener("click", updateError);
SettingsElement.error.replace.addEventListener("click", updateError);

// forgive error
SettingsElement.error.forgive.off.addEventListener("click", updateForgiveError);
SettingsElement.error.forgive.on.addEventListener("click", updateForgiveError);

// stop on error
SettingsElement.error.stop.off.addEventListener("click", updateStopOnError);
SettingsElement.error.stop.letter.addEventListener("click", updateStopOnError);
SettingsElement.error.stop.word.addEventListener("click", updateStopOnError);

// opposite shift mode
SettingsElement.oppositeshift.off.addEventListener("click", updateOppositeShiftMode);
SettingsElement.oppositeshift.on.addEventListener("click", updateOppositeShiftMode);

// minimum speed
SettingsElement.minimum.speed.off.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.on.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.thresholdInput.addEventListener("input", updateMinimumSpeedThresholdInput);

// minimum accuracy
SettingsElement.minimum.accuracy.off.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.on.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("input", updateMinimumAccuracyThresholdInput);

// minimum burst
SettingsElement.minimum.burst.off.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.fixed.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.flex.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.thresholdInput.addEventListener("input", updateMinimumBurstThresholdInput);

// keyboard reaction
SettingsElement.keyboardReaction.off.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.static.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.react.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.next.addEventListener("click", updateKeyboardReaction);

// keyboard layout emulate
SettingsElement.KeyboardLayoutEmulate.off.addEventListener("click", updateKeyboardLayoutEmulate);
SettingsElement.KeyboardLayoutEmulate.on.addEventListener("click", updateKeyboardLayoutEmulate);


// ###############################################################################

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

console.log(SettingsElement.pacecaret.speed);

// pacecaret speed
SettingsElement.pacecaret.speed.off.addEventListener("click", fn);
SettingsElement.pacecaret.speed.last.addEventListener("click", fn);
SettingsElement.pacecaret.speed.average.addEventListener("click", fn);
SettingsElement.pacecaret.speed.best.addEventListener("click", fn);
SettingsElement.pacecaret.speed.custom.addEventListener("click", fn);
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

// ###############################################################################


// website theme (s3)
function updateWebsiteTheme(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.websitetheme ) return;

	SettingsChangeInUI.changeWebsiteThemeInUI(this.value);
	SettingsChangeInConfig.changeWebsiteThemeInConfig(this.value);
}

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

// strictspace (s2)
function updateStrictSpace(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.strictspace && this.value === "on") || (!Config.strictspace && this.value === "off")) return;

	SettingsChangeInUI.changeStrictSpaceInUI(this.value);
	SettingsChangeInConfig.changeStrictSpaceInConfig(this.value);
}

// quickend (s2)
function updateQuickEnd(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.quickend && this.value === "on") || (!Config.quickend && this.value === "off")) return;

	SettingsChangeInUI.changeQuickEndInUI(this.value);
	SettingsChangeInConfig.changeQuickEndInConfig(this.value);
}

// difficulty (s3)
function updateDifficulty(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.difficulty.ease && this.value === "ease") || (Config.difficulty.expert && this.value === "expert") || (Config.difficulty.master && this.value === "master") ) return;

	SettingsChangeInUI.changeDifficultyInUI(this.value);
	SettingsChangeInConfig.changeDifficultyInConfig(this.value)
}

// confidence (s3)
function updateConfidence(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.confidence.low && this.value === "low") || (Config.confidence.high && this.value === "high") || (Config.confidence.peak && this.value === "peak") ) return;

	SettingsChangeInUI.changeConfidenceInUI(this.value);
	SettingsChangeInConfig.changeConfidenceInConfig(this.value);
}

// backspace key (s2)
function updateBackspaceKey(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.backspace.off && this.value === "off") || (!Config.backspace.off && this.value === "on") ) return;

	SettingsChangeInUI.changeBackspaceKeyInUI(this.value);
	SettingsChangeInConfig.changeBackspaceKeyInConfig(this.value);
}

// backspace not allowed on correct (s2)
function updateGoBackOnCorrect(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.backspace.allowedOnCorrect && this.value === "on") || (!Config.backspace.allowedOnCorrect && this.value === "off") ) return;
	
	SettingsChangeInUI.changeGoBackOnCorrectInUI(this.value);
	SettingsChangeInConfig.changeGoBackOnCorrectInConfig(this.value);
}

// modifier keys (s3)
function updateModifierKey(evt) {
	if ( !evt.isTrusted ) return;
	SettingsChangeInConfig.changeModifierKeyInConfig();
}

// error (s4)
function updateError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.off && this.value === "off") || (Config.error.insert && this.value === "insert") || (Config.error.skip && this.value === "skip") || (Config.error.replace && this.value === "replace") ) return;

	SettingsChangeInUI.changeErrorInUI(this.value);
	SettingsChangeInConfig.changeErrorInConfig(this.value);
}

// forgive error (s2)
function updateForgiveError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.forgive && this.value === "on") || (!Config.error.forgive && this.value === "off") ) return;

	SettingsChangeInUI.changeForgiveErrorInUI(this.value);
	SettingsChangeInConfig.changeForgiveErrorInConfig(this.value);

	console.log("forgive:", Config.error.forgive);
}

// stop on error (s3)
function updateStopOnError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.stop.off && this.value === "off") || (Config.error.stop.letter && this.value === "letter") || (Config.error.stop.word && this.value === "word") ) return;

	SettingsChangeInUI.changeStopOnErrorInUI(this.value);
	SettingsChangeInConfig.changeStopOnErrorInConfig(this.value);

	console.log("stopOnError:", Config.error.stop.off, Config.error.stop.letter, Config.error.stop.word);
}

// opposite shift mode (s2)
function updateOppositeShiftMode(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.oppositeshift && this.value === "on") || (!Config.oppositeshift && this.value === "off") ) return;

	SettingsChangeInUI.changeOppositeShiftModeInUI(this.value);
	SettingsChangeInConfig.changeOppositeShiftModeInConfig(this.value);

	console.log("oppositeshift:", Config.oppositeshift);
}

// minimum speed (s3)
function updateMinimumSpeed(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.speed.off && this.value === "off") || (!Config.minimum.speed.off && this.value === "on") ) return;

	SettingsChangeInUI.changeMinimumSpeedInUI(this.value);
	SettingsChangeInConfig.changeMinimumSpeedInConfig(this.value);

	console.log("minSpeed:", Config.minimum.speed.off);
}
// minimum speed threashold input (s1)
function updateMinimumSpeedThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	Config.minimum.speed.threshold = this.value;
	
	console.log("minSpeedThreshold:", Config.minimum.speed.threshold);
}

// minimum accuracy (s3)
function updateMinimumAccuracy(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.accuracy.off && this.value === "off") || (!Config.minimum.accuracy.off && this.value === "on") ) return;

	SettingsChangeInUI.changeMinimumAccuracyInUI(this.value);
	SettingsChangeInConfig.changeMinimumAccuracyInConfig(this.value);

	console.log("minAccuracy:", Config.minimum.accuracy.off);
}
// minimum accuracy threashold input (s1)
function updateMinimumAccuracyThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	Config.minimum.accuracy.threshold = this.value;

	console.log("minAccuracyThreshold:", Config.minimum.accuracy.threshold);
}

// minimum burst (s3)
function updateMinimumBurst(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.burst.off && this.value === "off") || (Config.minimum.burst.option.fixed && this.value === "fixed") || (Config.minimum.burst.option.flex && this.value === "flex") ) return;

	SettingsChangeInUI.changeMinimumBurstInUI(this.value);
	SettingsChangeInConfig.changeMinimumBurstInConfig(this.value);

	console.log("minBurst:", Config.minimum.burst.off, Config.minimum.burst.option.fixed, Config.minimum.burst.option.flex);
}
// minimum burst threashold input (s1)
function updateMinimumBurstThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	Config.minimum.burst.threshold = this.value;

	console.log("minBurstThreshold:", Config.minimum.burst.threshold);
}

// keyboard reaction (s4)
function updateKeyboardReaction(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.keyboard.reaction.off && this.value === "off") || (Config.keyboard.reaction.static && this.value === "static") || (Config.keyboard.reaction.react && this.value === "react") || (Config.keyboard.reaction.next && this.value === "next") ) return;

	SettingsChangeInUI.changeKeyboardReactionInUI(this.value);
	SettingsChangeInConfig.changeKeyboardReactionInConfig(this.value);

	console.log("keyboard reation:", Config.keyboard.reaction.off, Config.keyboard.reaction.static, Config.keyboard.reaction.react, Config.keyboard.reaction.next);
}

// keyboard layout emulate (s2)
function updateKeyboardLayoutEmulate(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.keyboard.layout.emulate && this.value === "on") || (!Config.keyboard.layout.emulate && this.value === "off") ) return;

	SettingsChangeInUI.changeKeyboardLayoutEmulateInUI(this.value);
	SettingsChangeInConfig.changeKeyboardLayoutEmulateInConfig(this.value);

	console.log("Emulate:", Config.keyboard.layout.emulate);
}