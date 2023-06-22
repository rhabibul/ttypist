import Config from "../../include/config.js"
import * as TestAreaElement from "../elements/testarea-elements.js";
import * as SettingsElement from "../elements/settings-elements.js";

// input field
TestAreaElement.text.addEventListener("click", () => { TestAreaElement.input.focus(); });

function fn(evt) {
	// avoid bots clicking, also later avoid double clicking of the selected button
	if ( !evt.isTrusted ) return;
	// if ( this.whateverValueIsClicked === config.theValueWhichIsInUse ) return;
	
	// console.log(evt);
	console.log(this?.value);
	// console.log(this.className, this.id);
	// console.log(this?.checked);
	// console.log(evt.target);
	// console.log(evt.currentTarget);

	// value for color selectors (use input.value for input of type color as well)
	// console.log("value: ", SettingsElement.caret.color.selectorInput.value);
}

// dynamic settings (s2)
SettingsElement.setting.dynamic.off.addEventListener("click", fn);
SettingsElement.setting.dynamic.on.addEventListener("click", fn);

// website theme (s4)
SettingsElement.websiteTheme.light.addEventListener("click", fn);
SettingsElement.websiteTheme.dimmed.addEventListener("click", fn);
SettingsElement.websiteTheme.dark.addEventListener("click", fn);
SettingsElement.websiteTheme.black.addEventListener("click", fn);

// tape mode (s3)
SettingsElement.tape.off.addEventListener("click", fn);
SettingsElement.tape.mode.letter.addEventListener("click", fn);
SettingsElement.tape.mode.word.addEventListener("click", fn);

// opposite shift mode (s2)
SettingsElement.oppositeshift.off.addEventListener("click", fn);
SettingsElement.oppositeshift.on.addEventListener("click", fn);

// backspace key (s2)
SettingsElement.backspace.off.addEventListener("click", fn);
SettingsElement.backspace.on.addEventListener("click", fn);

// modifier keys (s3)
SettingsElement.modifier.alt.addEventListener("click", fn);
SettingsElement.modifier.ctrl.addEventListener("click", fn);
SettingsElement.modifier.meta.addEventListener("click", fn);

// backspace not allowed on correct (s2)
SettingsElement.backspaceNotAllowedOnCorrect.off.addEventListener("click", fn);
SettingsElement.backspaceNotAllowedOnCorrect.on.addEventListener("click", fn);

// confidence (s3)
SettingsElement.confidence.low.addEventListener("click", fn);
SettingsElement.confidence.high.addEventListener("click", fn);
SettingsElement.confidence.peak.addEventListener("click", fn);

// difficulty (s3)
SettingsElement.difficulty.ease.addEventListener("click", fn);
SettingsElement.difficulty.expert.addEventListener("click", fn);
SettingsElement.difficulty.master.addEventListener("click", fn);

// strict space (s2)
SettingsElement.strictspace.off.addEventListener("click", fn);
SettingsElement.strictspace.on.addEventListener("click", fn);

// error (s4)
SettingsElement.error.off.addEventListener("click", fn);
SettingsElement.error.insert.addEventListener("click", fn);
SettingsElement.error.skip.addEventListener("click", fn);
SettingsElement.error.replace.addEventListener("click", fn);

// forgive error (s2)
SettingsElement.error.forgive.off.addEventListener("click", fn);
SettingsElement.error.forgive.on.addEventListener("click", fn);

// stop on error (s3)
SettingsElement.error.stop.off.addEventListener("click", fn);
SettingsElement.error.stop.letter.addEventListener("click", fn);
SettingsElement.error.stop.word.addEventListener("click", fn);

// minimum speed (s3)
SettingsElement.minimum.speed.off.addEventListener("click", fn);
SettingsElement.minimum.speed.on.addEventListener("click", fn);
SettingsElement.minimum.speed.thresholdInput.addEventListener("input", fn);

// minimum accuracy (s3)
SettingsElement.minimum.accuracy.off.addEventListener("click", fn);
SettingsElement.minimum.accuracy.on.addEventListener("click", fn);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("input", fn);

// minimum burst (s3)
SettingsElement.minimum.burst.off.addEventListener("click", fn);
SettingsElement.minimum.burst.fixed.addEventListener("click", fn);
SettingsElement.minimum.burst.flex.addEventListener("click", fn);
SettingsElement.minimum.burst.thresholdInput.addEventListener("input", fn);

// caret style (s5)
SettingsElement.caret.off.addEventListener("click", fn);
SettingsElement.caret.style.underline.addEventListener("click", fn);
SettingsElement.caret.style.line.addEventListener("click", fn);
SettingsElement.caret.style.box.addEventListener("click", fn);
SettingsElement.caret.style.block.addEventListener("click", fn);

// caret color (s2)
SettingsElement.caret.color.selectorInput.addEventListener("input", fn);
SettingsElement.caret.color.textInput.addEventListener("input", fn);

// pacecaret style (s5)
SettingsElement.pacecaret.off.addEventListener("click", fn);
SettingsElement.pacecaret.style.underline.addEventListener("click", fn);
SettingsElement.pacecaret.style.line.addEventListener("click", fn);
SettingsElement.pacecaret.style.box.addEventListener("click", fn);
SettingsElement.pacecaret.style.block.addEventListener("click", fn);

// pacecaret color (s2)
SettingsElement.pacecaret.color.selectorInput.addEventListener("input", fn);
SettingsElement.pacecaret.color.textInput.addEventListener("input", fn);

// pacecaret speed (s5)
SettingsElement.pacecaret.speed.off.addEventListener("click", fn);
SettingsElement.pacecaret.speed.last.addEventListener("click", fn);
SettingsElement.pacecaret.speed.average.addEventListener("click", fn);
SettingsElement.pacecaret.speed.best.addEventListener("click", fn);
SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.addEventListener("input", fn);

// text input box (s2)
SettingsElement.textInput.hidden.addEventListener("click", fn);
SettingsElement.textInput.visible.addEventListener("click", fn);

// text highlight (s3)
SettingsElement.textHighlight.off.addEventListener("click", fn);
SettingsElement.textHighlight.mode.letter.addEventListener("click", fn);
SettingsElement.textHighlight.mode.word.addEventListener("click", fn);

// flip text highlight (s2)
SettingsElement.textHighlight.flip.off.addEventListener("click", fn);
SettingsElement.textHighlight.flip.on.addEventListener("click", fn);

// text underline (s2)
SettingsElement.textUnderline.off.addEventListener("click", fn);
SettingsElement.textUnderline.on.addEventListener("click", fn);

// text color (s4)
SettingsElement.textColor.primary.selectorInput.addEventListener("input", fn);
SettingsElement.textColor.primary.textInput.addEventListener("input", fn);
SettingsElement.textColor.secondary.selectorInput.addEventListener("input", fn);
SettingsElement.textColor.secondary.textInput.addEventListener("input", fn);

// timer (s6)
SettingsElement.timer.off.addEventListener("click", fn);
SettingsElement.timer.time.seconds15.addEventListener("click", fn);
SettingsElement.timer.time.seconds30.addEventListener("click", fn);
SettingsElement.timer.time.seconds60.addEventListener("click", fn);
SettingsElement.timer.time.seconds120.addEventListener("click", fn);
SettingsElement.timer.time.customSecondsInput.addEventListener("input", fn);

// hide timer (s2)
SettingsElement.timer.hide.off.addEventListener("click", fn);
SettingsElement.timer.hide.on.addEventListener("click", fn);

// text word count (s6)
SettingsElement.textWordCount.off.addEventListener("click", fn);
SettingsElement.textWordCount.count.words10.addEventListener("click", fn);
SettingsElement.textWordCount.count.words25.addEventListener("click", fn);
SettingsElement.textWordCount.count.words50.addEventListener("click", fn);
SettingsElement.textWordCount.count.words100.addEventListener("click", fn);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("input", fn);

// end with space (s2)
SettingsElement.endWithSpace.off.addEventListener("click", fn);
SettingsElement.endWithSpace.on.addEventListener("click", fn);

// details
SettingsElement.details.textFontFamily.addEventListener("click", fn);
SettingsElement.details.textWordLength.addEventListener("click", fn);
SettingsElement.details.textWordType.addEventListener("click", fn);
SettingsElement.details.textCapitalization.addEventListener("click", fn);
SettingsElement.details.keyboardLanguage.addEventListener("click", fn);
SettingsElement.details.keyboardLayout.addEventListener("click", fn);

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

// emulate keyboard layout (s2)
SettingsElement.emulateKeyboardLayout.off.addEventListener("click", fn);
SettingsElement.emulateKeyboardLayout.on.addEventListener("click", fn);