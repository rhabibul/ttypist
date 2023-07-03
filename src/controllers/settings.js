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

// delete on correct
SettingsElement.deleteOnCorrect.off.addEventListener("click", updateDeleteOnCorrect);
SettingsElement.deleteOnCorrect.on.addEventListener("click",  updateDeleteOnCorrect);

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
SettingsElement.oppositeShift.off.addEventListener("click", updateOppositeShiftMode);
SettingsElement.oppositeShift.on.addEventListener("click", updateOppositeShiftMode);

// minimum speed
SettingsElement.minimum.speed.off.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.on.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.thresholdInput.addEventListener("input", updateMinimumSpeedThresholdInput);
SettingsElement.minimum.speed.thresholdInput.addEventListener("focusout", updateMinimumSpeedThresholdInputFoucsOut);

// minimum accuracy
SettingsElement.minimum.accuracy.off.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.on.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("input", updateMinimumAccuracyThresholdInput);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("focusout", updateMinimumAccuracyThresholdInputFoucsOut);

// minimum burst
SettingsElement.minimum.burst.off.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.fixed.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.flex.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.thresholdInput.addEventListener("input", updateMinimumBurstThresholdInput);
SettingsElement.minimum.burst.thresholdInput.addEventListener("focusout", updateMinimumBurstThresholdInputFoucsOut);

// text word count
SettingsElement.textWordCount.off.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words10.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words25.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words50.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words100.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.custom.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("input", updateTextWordCountInputField);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("focusout", updateTextWordCountInputFieldOnFoucsOut);

// timer
SettingsElement.timer.off.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds15.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds30.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds60.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds120.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.custom.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.customSecondsInput.addEventListener("input", updateTimerSecondsInputField);
SettingsElement.timer.time.customSecondsInput.addEventListener("focusout", updateTimerSecondsInputFieldOnFocusOut);

// timer visibility
SettingsElement.timer.hidden.off.addEventListener("click", updateTimerVisibilityInUI);
SettingsElement.timer.hidden.on.addEventListener("click", updateTimerVisibilityInUI);

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

// pacecaret speed
SettingsElement.pacecaret.speed.off.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.last.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.average.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.best.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.custom.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.addEventListener("input", fn);

// pacecaret speed (s5)
function updatePaceCaretSpeed(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.pacecaret.speed.last && this.value === "last") || (Config.pacecaret.speed.average && this.value === "average") || (Config.pacecaret.speed.best && this.value === "best") || (Config.pacecaret.speed.off && this.value === "off") || (!Config.pacecaret.speed.custom.off && this.value === "custom") ) return;

	SettingsChangeInUI.changePaceCaretSpeedInUI(this.value);
	SettingsChangeInConfig.changePaceCaretSpeedInConfig(this.value);

	console.log("pace caret speed:", Config.pacecaret.off, Config.pacecaret.speed.last, Config.pacecaret.speed.average, Config.pacecaret.speed.best, Config.pacecaret.speed.custom.off, "(off)");
}

function updatePaceCaretSpeedInputField(evt) {
	if ( !evt.isTrusted ) return;

	// turn on "on" button active if not
	// if ( SettingsElement.minimum.speed.off.id === "selected" ) {
	// 	SettingsChangeInUI.changeMinimumSpeedInUI("on");
	// 	SettingsChangeInConfig.changeMinimumSpeedInConfig("on");
	// }
	// Config.minimum.speed.threshold = Number(this.value);

	// console.log("minSpeedThreshold:", Config.minimum.speed.threshold);
}

function updatePaceCaretSpeedInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;
	
}

// primary text color
SettingsElement.textColor.primary.selectorInput.addEventListener("input", updatePrimaryTextColorSelectorInput);
SettingsElement.textColor.primary.textInput.addEventListener("input", updatePrimaryTextColorTextInput);

// primary text color (s2)
function updatePrimaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-primary-color", this.value);
	SettingsElement.textColor.primary.textInput.value = this.value;
	Config.text.color.primary = this.value;
}
function updatePrimaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-primary-color", this.value);
	Config.text.color.primary = this.value;
}

// secondary text color
SettingsElement.textColor.secondary.selectorInput.addEventListener("input", updateSecondaryTextColorSelectorInput);
SettingsElement.textColor.secondary.textInput.addEventListener("input", updateSecondaryTextColorTextInput);

// secondary text color (s2)
function updateSecondaryTextColorSelectorInput(evt) { // selector input (color)
	if ( !evt.isTrusted ) return;
	SettingsElement.textColor.secondary.textInput.value = this.value;
	document.querySelector(":root").style.setProperty("--text-secondary-color", this.value);
}
function updateSecondaryTextColorTextInput(evt) { // text input (color)
	if ( !evt.isTrusted ) return;
	document.querySelector(":root").style.setProperty("--text-secondary-color", this.value);
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
	document.querySelector(":root").style.setProperty("--text-font-size", `${this.value}px`);
}

// text font weight slider (s1)
function updateTextFontWeight(evt) {
	if ( !evt.isTrusted ) return;
	SettingsElement.textFontWeight.fontWeightDisplayBox.textContent = this.value;
	document.querySelector(":root").style.setProperty("--text-font-weight", `${this.value}`);
}

// text include (s2)
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

// live stats calculation interval (s3)
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
SettingsElement.warnings.focus.addEventListener("click", fn);

// warnings (s4)
function updateWarnings(evt) {
	if ( !evt.isTrusted ) return;
}

// ###############################################################################


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

// dynamic settings (s2)
function updateDynamicSettings(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.setting.dynamic && this.value === "on") ||  (!Config.setting.dynamic && this.value === "off") ) return;

	SettingsChangeInUI.changeDynamicSettingsInUI(this.value);
	SettingsChangeInConfig.changeDynamicSettingsInConfig(this.value);
}

// website theme (s3)
function updateWebsiteTheme(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.websitetheme ) return;

	SettingsChangeInUI.changeWebsiteThemeInUI(this.value);
	SettingsChangeInConfig.changeWebsiteThemeInConfig(this.value);
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

// deletion not allowed on correct (s2)
function updateDeleteOnCorrect(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.backspace.deleteOnCorrect && this.value === "on") || (!Config.backspace.deleteOnCorrect && this.value === "off") ) return;
	
	SettingsChangeInUI.changeDeleteOnCorrectInUI(this.value);
	SettingsChangeInConfig.changeDeleteOnCorrectInConfig(this.value);

	console.log("delete on correct:", Config.backspace.deleteOnCorrect);
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

	if ( this.value === "on" ) {
		SettingsElement.minimum.speed.thresholdInput.focus();
	} else {
		SettingsElement.minimum.speed.thresholdInput.value = "";
	}

	console.log("minSpeed:", Config.minimum.speed.off);
}
// minimum speed threashold input (s1)
function updateMinimumSpeedThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn on "on" button active if not
	if ( SettingsElement.minimum.speed.off.id === "selected" ) {
		SettingsChangeInUI.changeMinimumSpeedInUI("on");
		SettingsChangeInConfig.changeMinimumSpeedInConfig("on");
	}
	Config.minimum.speed.threshold = Number(this.value);

	console.log("minSpeedThreshold:", Config.minimum.speed.threshold);
}
// minimum speed threshold input (focusout)
function updateMinimumSpeedThresholdInputFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	if ( this.value === "" && SettingsElement.minimum.speed.on.id === "selected" ) {
		SettingsChangeInUI.changeMinimumSpeedInUI("off");
		SettingsChangeInConfig.changeMinimumSpeedInConfig("off");
	}
}

// minimum accuracy (s3)
function updateMinimumAccuracy(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.accuracy.off && this.value === "off") || (!Config.minimum.accuracy.off && this.value === "on") ) return;

	SettingsChangeInUI.changeMinimumAccuracyInUI(this.value);
	SettingsChangeInConfig.changeMinimumAccuracyInConfig(this.value);

	if ( this.value === "on" ) {
		SettingsElement.minimum.accuracy.thresholdInput.focus();
	} else {
		SettingsElement.minimum.accuracy.thresholdInput.value = "";
	}

	console.log("minAccuracy:", Config.minimum.accuracy.off);
}
// minimum accuracy threashold input (s1)
function updateMinimumAccuracyThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	
	// turn on "on" button active if not
	if ( SettingsElement.minimum.accuracy.off.id === "selected" ) {
		SettingsChangeInUI.changeMinimumAccuracyInUI("on");
		SettingsChangeInConfig.changeMinimumAccuracyInConfig("on");
	}
	Config.minimum.accuracy.threshold = Number(this.value);

	console.log("minAccuracyThreshold:", Config.minimum.accuracy.threshold);
}
// minimum accuracy threshold input (focusout)
function updateMinimumAccuracyThresholdInputFoucsOut(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === "" && SettingsElement.minimum.accuracy.on.id === "selected" ) {
		SettingsChangeInUI.changeMinimumAccuracyInUI("off");
		SettingsChangeInConfig.changeMinimumAccuracyInConfig("off");
	}
}

// minimum burst (s3)
function updateMinimumBurst(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.burst.off && this.value === "off") || (Config.minimum.burst.option.fixed && this.value === "fixed") || (Config.minimum.burst.option.flex && this.value === "flex") ) return;

	SettingsChangeInUI.changeMinimumBurstInUI(this.value);
	SettingsChangeInConfig.changeMinimumBurstInConfig(this.value);

	if ( this.value === "fixed" || this.value === "flex" ) {
		SettingsElement.minimum.burst.thresholdInput.focus();
	} else {
		SettingsElement.minimum.burst.thresholdInput.value = "";
	}

	console.log("minBurst:", Config.minimum.burst.off, Config.minimum.burst.option.fixed, Config.minimum.burst.option.flex);
}
// minimum burst threashold input (s1)
function updateMinimumBurstThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn on "fixed" button active if not
	if ( SettingsElement.minimum.burst.off.id === "selected" ) {
		SettingsChangeInUI.changeMinimumBurstInUI("fixed");
		SettingsChangeInConfig.changeMinimumBurstInConfig("fixed");
	}
	Config.minimum.burst.threshold = Number(this.value);

	console.log("minBurstThreshold:", Config.minimum.burst.threshold);
}
// minimum burst threshold input (focusout)
function updateMinimumBurstThresholdInputFoucsOut(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === "" && (SettingsElement.minimum.burst.option.fixed.id === "selected" || SettingsElement.minimum.burst.option.flex.id === "selected") ) {
		SettingsChangeInUI.changeMinimumBurstInUI("off");
		SettingsChangeInConfig.changeMinimumBurstInConfig("off");
	}
}

// text word count (s5)
function updateTextWordCount(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.word.count === -1 && this.value === "off") || (Config.text.word.count === -2 && this.value === "custom") || (Config.text.word.count === 10 && this.value === "10") || (Config.text.word.count === 25 && this.value === "25") || (Config.text.word.count === 50 && this.value === "50") || (Config.text.word.count === 100 && this.value === "100") ) return;

	if ( this.value === "custom" ) {
		SettingsElement.textWordCount.count.customWordsInput.focus();
	} else {
		SettingsElement.textWordCount.count.customWordsInput.value = "";
	}
	
	SettingsChangeInUI.changeTextWordCountInUI(this.value);
	SettingsChangeInConfig.changeTextWordCountInConfig(this.value);

	console.log("number of words:", Config.text.word.count);
}

// text word count input (s1)
function updateTextWordCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	if ( SettingsElement.textWordCount.count.custom.id !== "selected" ) {
		SettingsChangeInUI.changeTextWordCountInUI("custom");
		SettingsChangeInConfig.changeTextWordCountInConfig("custom");
	}
	Config.text.word.count = Number(this.value);

	console.log("number of words [input]:", Config.text.word.count);
}

// text word count input - focusout (s1)
function updateTextWordCountInputFieldOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// turn off custom button if no value is entered in words input field
	if ( (this.value === "") && (SettingsElement.textWordCount.count.custom.id === "selected") ) {
		SettingsChangeInUI.changeTextWordCountInUI("off");
		SettingsChangeInConfig.changeTextWordCountInConfig("off");
	}

	// generate infinite words
	if ( (SettingsElement.textWordCount.count.custom.id === "selected") && (SettingsElement.textWordCount.count.customWordsInput.value === "0") ) {
		console.log("infinite words will be generated...");
	}
}

// timer (s5)
function updateTimerSeconds(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.timer.time === -2 && this.value === "custom") || (Config.stats.timer.time === -1 && this.value === "off") || (Config.stats.timer.time === 15 && this.value === "15") || (Config.stats.timer.time === 30 && this.value === "30") || (Config.stats.timer.time === 60 && this.value === "60") || (Config.stats.timer.time === 120 && this.value === "120") ) return;

	if ( this.value === "custom" ) {
		SettingsElement.timer.time.customSecondsInput.focus();
	} else {
		SettingsElement.timer.time.customSecondsInput.value = "";
	}

	SettingsChangeInUI.changeTimerSecondsInUI(this.value);
	SettingsChangeInConfig.changeTimerSecondsInConfig(this.value);

	console.log("number of seconds:", Config.stats.timer.time);
}

// timer custom seconds input s1
function updateTimerSecondsInputField(evt) {
	if ( !evt.isTrusted ) return;

	if ( SettingsElement.timer.time.custom.id !== "selected" ) {
		SettingsChangeInUI.changeTimerSecondsInUI("custom");
		SettingsChangeInConfig.changeTimerSecondsInConfig("custom");
	}
	Config.stats.timer.time = Number(this.value);

	console.log("number of seconds [input]:", Config.stats.timer.time);
}

// timer custom seconds input - focusout (s1)
function updateTimerSecondsInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;

	// turn off custom button if no value is entered in words input field
	if ( (this.value === "") && (SettingsElement.timer.time.custom.id === "selected") ) {
		SettingsChangeInUI.changeTimerSecondsInUI("off");
		SettingsChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// timer never stops until users wants to it stop
	if ( (SettingsElement.timer.time.custom.id === "selected") && (SettingsElement.timer.time.customSecondsInput.value === "0") ) {
		console.log("infinite timer started...");
	}
}

// timer visibility (s2)
function updateTimerVisibilityInUI(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.timer.hidden && this.value === "off") || (!Config.stats.timer.hidden && this.value === "on") ) return;

	SettingsChangeInUI.changeTimerVisibilityInUI(this.value);
	SettingsChangeInConfig.changeTimerVisibilityInConfig(this.value);

	console.log("timer visibility (off):", Config.stats.timer.hidden);
}