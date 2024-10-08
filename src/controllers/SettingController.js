import { config } from "../include/config.js";
import * as HTMLElement from "../include/elements.js";
import * as SettingChangeInConfig from "./updateConfigOnButtonClick.js";
import * as SettingChangeInUI from "./updateUIOnButtonClick.js";
import { ignition } from "../main.js";

HTMLElement.textContainerElement.addEventListener("click", () => { HTMLElement.textInputField.focus() });

// tape mode
HTMLElement.tapeModeConfig.off.addEventListener("click",         updateTapeModeConfig);
HTMLElement.tapeModeConfig.mode.letter.addEventListener("click", updateTapeModeConfig);
HTMLElement.tapeModeConfig.mode.word.addEventListener("click",   updateTapeModeConfig);

// text input field
HTMLElement.textInputFieldConfig.hidden.addEventListener("click",  updateTextInputFieldConfig);
HTMLElement.textInputFieldConfig.visible.addEventListener("click", updateTextInputFieldConfig);

// text underline
HTMLElement.textUnderlineConfig.off.addEventListener("click", updateTextUnderlineConfig);
HTMLElement.textUnderlineConfig.on.addEventListener("click",  updateTextUnderlineConfig);

// text whitespace
HTMLElement.textWhitespaceConfig.off.addEventListener("click",          updateTextWhitespaceConfig);
HTMLElement.textWhitespaceConfig.style.bullet.addEventListener("click", updateTextWhitespaceConfig);
HTMLElement.textWhitespaceConfig.style.space.addEventListener("click",  updateTextWhitespaceConfig);
HTMLElement.textWhitespaceConfig.style.bar.addEventListener("click",    updateTextWhitespaceConfig);

// text highlight
HTMLElement.textHighlightConfig.off.addEventListener("click",         updateTextHighlightConfig);
HTMLElement.textHighlightConfig.mode.letter.addEventListener("click", updateTextHighlightConfig);
HTMLElement.textHighlightConfig.mode.word.addEventListener("click",   updateTextHighlightConfig);

// flip text highlight
HTMLElement.flipTextHighlightConfig.off.addEventListener("click", updateFlipTextHighlightConfig);
HTMLElement.flipTextHighlightConfig.on.addEventListener("click",  updateFlipTextHighlightConfig);

// modifier keys
HTMLElement.modifierKeyConfig.alt.addEventListener("click",  updateModifierKeyConfig);
HTMLElement.modifierKeyConfig.ctrl.addEventListener("click", updateModifierKeyConfig);
HTMLElement.modifierKeyConfig.meta.addEventListener("click", updateModifierKeyConfig);

// delete text
HTMLElement.deleteConfig.off.addEventListener("click", updateTextDeletionConfig);
HTMLElement.deleteConfig.on.addEventListener("click", updateTextDeletionConfig);

// delete correct text
HTMLElement.delcorrectConfig.off.addEventListener("click", updateDeletePreviousCorrectWordConfig);
HTMLElement.delcorrectConfig.on.addEventListener("click",  updateDeletePreviousCorrectWordConfig);

// confidence
HTMLElement.userConfidenceConfig.low.addEventListener("click",  updateUserConfidenceConfig);
HTMLElement.userConfidenceConfig.high.addEventListener("click", updateUserConfidenceConfig);
HTMLElement.userConfidenceConfig.peak.addEventListener("click", updateUserConfidenceConfig);

// difficulty
HTMLElement.testDifficultyConfig.ease.addEventListener("click",   updateTestDifficultyConfig);
HTMLElement.testDifficultyConfig.expert.addEventListener("click", updateTestDifficultyConfig);
HTMLElement.testDifficultyConfig.master.addEventListener("click", updateTestDifficultyConfig);

// strict space
HTMLElement.strictSpaceConfig.off.addEventListener("click", updateStrictSpaceConfig);
HTMLElement.strictSpaceConfig.on.addEventListener("click",  updateStrictSpaceConfig);

// error handling
HTMLElement.errorHandlingConfig.off.addEventListener("click",      updateErrorHandlingConfig);
HTMLElement.errorHandlingConfig.insert.addEventListener("click",   updateErrorHandlingConfig);
HTMLElement.errorHandlingConfig.skip.addEventListener("click",     updateErrorHandlingConfig);
HTMLElement.errorHandlingConfig.replace.addEventListener ("click", updateErrorHandlingConfig);

// forgive extra error
HTMLElement.errorHandlingConfig.forgive.off.addEventListener("click", updateForgiveErrorConfig);
HTMLElement.errorHandlingConfig.forgive.on.addEventListener("click",  updateForgiveErrorConfig);

// stop on error
HTMLElement.errorHandlingConfig.stop.off.addEventListener("click",    updateStopOnErrorConfig);
HTMLElement.errorHandlingConfig.stop.letter.addEventListener("click", updateStopOnErrorConfig);
HTMLElement.errorHandlingConfig.stop.word.addEventListener("click",   updateStopOnErrorConfig);

// go blind
HTMLElement.goBlindConfig.off.addEventListener("click", updateGoBlindConfig);
HTMLElement.goBlindConfig.on.addEventListener("click",  updateGoBlindConfig);

// quickend
HTMLElement.quickEndConfig.off.addEventListener("click", updateQuickEndConfig);
HTMLElement.quickEndConfig.on.addEventListener("click",  updateQuickEndConfig);

// use opposite shift mode
HTMLElement.useOppositeShiftConfig.off.addEventListener("click", updateUseOppositeShiftConfig);
HTMLElement.useOppositeShiftConfig.on.addEventListener("click",  updateUseOppositeShiftConfig);

// caret style
HTMLElement.caretStyleConfig.off.addEventListener("click", updateCaretStyleConfig);
HTMLElement.caretStyleConfig.style.underscore.addEventListener("click", updateCaretStyleConfig);
HTMLElement.caretStyleConfig.style.line.addEventListener("click", updateCaretStyleConfig);
HTMLElement.caretStyleConfig.style.box.addEventListener("click", updateCaretStyleConfig);
HTMLElement.caretStyleConfig.style.block.addEventListener("click", updateCaretStyleConfig);

// caret color
HTMLElement.caretColorConfig.selectorInput.addEventListener("input", updateCaretColorSelectorInput);
HTMLElement.caretColorConfig.textInput.addEventListener("input", updateCaretColorTextInput);

// primary text color
HTMLElement.textColorConfig.primary.selectorInput.addEventListener("input", updatePrimaryTextColorSelectorInput);
HTMLElement.textColorConfig.primary.textInput.addEventListener("input", updatePrimaryTextColorTextInput);

// secondary text color
HTMLElement.textColorConfig.secondary.selectorInput.addEventListener("input", updateSecondaryTextColorSelectorInput);
HTMLElement.textColorConfig.secondary.textInput.addEventListener("input", updateSecondaryTextColorTextInput);

// timer seconds count
HTMLElement.timerSecondsCountConfig.off.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.seconds15.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.seconds30.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.seconds60.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.seconds120.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.customSecondsCountButton.addEventListener("click", updateTimerSecondsCountConfig);
HTMLElement.timerSecondsCountConfig.customSecondsCountInput.addEventListener("input", updateTimerSecondsCountInputField);
HTMLElement.timerSecondsCountConfig.customSecondsCountInput.addEventListener("focusout", updateTimerSecondsCountInputFieldOnFocusOut);

// text word count
HTMLElement.textWordsCountConfig.off.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.words10.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.words25.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.words50.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.words100.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.customWordsCountButton.addEventListener("click", updateTextWordsCountConfig);
HTMLElement.textWordsCountConfig.customWordsCountInput.addEventListener("input", updateTextWordsCountInputField);
HTMLElement.textWordsCountConfig.customWordsCountInput.addEventListener("focusout", updateTextWordsCountInputFieldOnFoucsOut);

// font size slider
HTMLElement.textFontSizeConfig.fontSizeInput.addEventListener("input", updateTextFontSizeConfig);

// font weight slider
HTMLElement.textFontWeightConfig.fontWeightInput.addEventListener("input", updateTextFontWeightConfig);

// include specials in text (digit, punctuation)
HTMLElement.includeSpecialsInTextConfig.digit.addEventListener("click", updateIncludeSpecialsInTextConfig);
HTMLElement.includeSpecialsInTextConfig.punctuation.addEventListener("click", updateIncludeSpecialsInTextConfig);

// keyboard reaction (s4)
function updateUIKeyboardReactionConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.reaction.off && this.value === "off") || (config.keyboard.reaction.static && this.value === "static") || (config.keyboard.reaction.react && this.value === "react") || (config.keyboard.reaction.next && this.value === "next") ) return;

	SettingChangeInUI.changeKeyboardReactionInUI(this.value);
	SettingChangeInConfig.changeKeyboardReactionInConfig(this.value);
}

// keyboard layout emulate
function updateUIKeyboardLayoutEmulateConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.layout.emulate && this.value === "on") || (!config.keyboard.layout.emulate && this.value === "off") ) return;

	SettingChangeInUI.changeKeyboardLayoutEmulateInUI(this.value);
	SettingChangeInConfig.changeKeyboardLayoutEmulateInConfig(this.value);
}

// text input
function updateTextInputFieldConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.input.hidden && this.value === "hidden") || (config.text.input.visible && this.value === "visible") ) return;

	SettingChangeInUI.changeTextInputInUI(this.value);
	SettingChangeInConfig.changeTextInputInConfig(this.value);
}

// tape mode (s3)
function updateTapeModeConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.tape.off && this.value === "off") || (config.tape.mode.letter && this.value === "letter") || (config.tape.mode.word && this.value === "word") ) return;
	
	SettingChangeInUI.changeTapeModeInUI(this.value);
	SettingChangeInConfig.changeTapeModeInConfig(this.value);
}

// text highlight (s3)
function updateTextHighlightConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.highlight.off && this.value === "off") || (config.text.highlight.mode.letter && this.value === "letter") || (config.text.highlight.mode.word && this.value === "word")) return;

	SettingChangeInUI.changeTextHightlightInUI(this.value);
	SettingChangeInConfig.changeTextHightlightInConfig(this.value);
}

// flip text highlight
function updateFlipTextHighlightConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.highlight.flip && this.value === "on") || (!config.text.highlight.flip && this.value === "off") ) return;

	SettingChangeInUI.changeFlipTextHightlightInUI(this.value);
	SettingChangeInConfig.changeFlipTextHightlightInConfig(this.value);

	const computedStyles = window.getComputedStyle(document.querySelector(":root"));

	let primary = computedStyles.getPropertyValue("--text-primary-color");
	let secondary = computedStyles.getPropertyValue("--text-secondary-color");

	HTMLElement.root.style.setProperty("--text-primary-color", secondary);
	HTMLElement.root.style.setProperty("--text-secondary-color", primary);
}

// text underline
function updateTextUnderlineConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.underline && this.value === "on") || (!config.text.underline && this.value === "off") ) return;

	SettingChangeInUI.changeTextUnderlineInUI(this.value);
	SettingChangeInConfig.changeTextUnderlineInConfig(this.value);
}

// text whitespace (s4)
function updateTextWhitespaceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.whitespace === "off" && this.value === "off") || (config.text.whitespace === "bullet" && this.value === "bullet") || (config.text.whitespace === "space" && this.value === "space") || (config.text.whitespace === "bar" && this.value === "bar") ) return;

	SettingChangeInUI.changeTextWhitespaceInUI(this.value);
	SettingChangeInConfig.changeTextWhitespaceInConfig(this.value);
}

// strictspace
function updateStrictSpaceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.strictspace && this.value === "on") || (!config.strictspace && this.value === "off")) return;

	SettingChangeInUI.changeStrictSpaceInUI(this.value);
	SettingChangeInConfig.changeStrictSpaceInConfig(this.value);
}

// quickend
function updateQuickEndConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.quickend && this.value === "on") || (!config.quickend && this.value === "off")) return;

	SettingChangeInUI.changeQuickEndInUI(this.value);
	SettingChangeInConfig.changeQuickEndInConfig(this.value);
}

// difficulty
function updateTestDifficultyConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.difficulty.ease && this.value === "ease") || (config.difficulty.expert && this.value === "expert") || (config.difficulty.master && this.value === "master") ) return;

	SettingChangeInUI.changeDifficultyInUI(this.value);
	SettingChangeInConfig.changeDifficultyInConfig(this.value)
}

// confidence (s3)
function updateUserConfidenceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.confidence.low && this.value === "low") || (config.confidence.high && this.value === "high") || (config.confidence.peak && this.value === "peak") ) return;

	SettingChangeInUI.changeConfidenceInUI(this.value);
	SettingChangeInConfig.changeConfidenceInConfig(this.value);

	// at peak confidence backspacing is not allowed, so backspace is disabled
	if ( this.value === "peak" ) {
		SettingChangeInUI.changeTextDeletionInUI("off");
		SettingChangeInConfig.changeTextDeletionInConfig("off");

		// at peak confidence backspace is disabled, so user cannot delete at all
		if ( config.delcorrect ) {
			SettingChangeInUI.changeDeletePreviousCorrectWordInUI("off");
			SettingChangeInConfig.changeDeletePreviousCorrectWordInConfig("off");
		}
	}

	// going back to low or high confidence from peak confidence (and backspace is disabled)
	if ( ((this.value === "low") || (this.value === "high")) && !config.delete ) {
		SettingChangeInUI.changeTextDeletionInUI("on");
		SettingChangeInConfig.changeTextDeletionInConfig("on");
	}

	// confidence high prevents user to delete previous word regardless of it was typed correctly or incorrectly
	if ( (this.value === "high") && config.delcorrect ) {
		SettingChangeInUI.changeDeletePreviousCorrectWordInUI("off");
		SettingChangeInConfig.changeDeletePreviousCorrectWordInConfig("off");
	}
}

// text deletion
function updateTextDeletionConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (!config.delete && this.value === "off") || (config.delete && this.value === "on") ) return;

	SettingChangeInUI.changeTextDeletionInUI(this.value);
	SettingChangeInConfig.changeTextDeletionInConfig(this.value);

	// dependencies
	if ( this.value === "off" ) {
		// delete off means confidence is at peak
		SettingChangeInUI.changeConfidenceInUI("peak");
		SettingChangeInConfig.changeConfidenceInConfig("peak");

		// no concept of deleting on correct if backspace is disabled
		if ( config.delcorrect ) {
			SettingChangeInUI.changeDeletePreviousCorrectWordInUI("off");
			SettingChangeInConfig.changeDeletePreviousCorrectWordInConfig("off");
		}
	} else {
		// on confidence low backspacing is set to default value of low
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");
	}
}

// deletion not allowed on correct
function updateDeletePreviousCorrectWordConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.delcorrect && this.value === "on") || (!config.delcorrect && this.value === "off") ) return;
	
	SettingChangeInUI.changeDeletePreviousCorrectWordInUI(this.value);
	SettingChangeInConfig.changeDeletePreviousCorrectWordInConfig(this.value);

	// when deletion of correct words is enabled then disable high/peak confidence mode and enable backspace if its disabled
	if ( config.delcorrect && (config.confidence.high || config.confidence.peak) ) {
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");

		if ( !config.delete ) {
			SettingChangeInUI.changeTextDeletionInUI("on");
			SettingChangeInConfig.changeTextDeletionInConfig("on");	
		}
	}
}

// modifier keys (s3)
function updateModifierKeyConfig(evt) {
	if ( !evt.isTrusted ) return;
	SettingChangeInConfig.changeModifierKeyInConfig();
}

// error (s4)
function updateErrorHandlingConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.off && this.value === "off") || (config.error.insert && this.value === "insert") || (config.error.skip && this.value === "skip") || (config.error.replace && this.value === "replace") ) return;

	SettingChangeInUI.changeErrorInUI(this.value);
	SettingChangeInConfig.changeErrorInConfig(this.value);

	// error insert, skip, replace, forgive is disabled, enable stop on letter
	if ( config.error.off ) {
		if ( !config.error.stop.letter ) { // disble stop on error
			SettingChangeInUI.changeStopOnErrorInUI("letter");
			SettingChangeInConfig.changeStopOnErrorInConfig("letter");
		}
		if ( config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
	} else { // either insert/skip/replace is selected
		if ( config.blind ) { // disable blind mode
			SettingChangeInUI.changeBlindModeInUI("off");
			SettingChangeInConfig.changeBlindModeInConfig("off");
		}
	}
		
	// disable stop on letter when in insert, skip, replace modes
	if ( !config.error.off && config.error.stop.letter	) {
		SettingChangeInUI.changeStopOnErrorInUI("off");
		SettingChangeInConfig.changeStopOnErrorInConfig("off");
	}

	// forgive error is not possible in skip & replace
	if ( (config.error.skip || config.error.replace) && config.error.forgive ) {
		// it is possible to enable/disable forgive error in error insert, but not in
		// error skip/replace so forgive error should be disabled
		SettingChangeInUI.changeForgiveErrorInUI("off");
		SettingChangeInConfig.changeForgiveErrorInConfig("off");
	}
}

// forgive error
function updateForgiveErrorConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.forgive && this.value === "on") || (!config.error.forgive && this.value === "off") ) return;
	
	SettingChangeInUI.changeForgiveErrorInUI(this.value);
	SettingChangeInConfig.changeForgiveErrorInConfig(this.value);

	// error forgive require error insert, so disable error skip/replace and enable
	// insert, i.e, insertion of errors is necessary in order to forgive them
	if ( config.error.forgive && !config.error.insert ) {
		SettingChangeInUI.changeErrorInUI("insert");
		SettingChangeInConfig.changeErrorInConfig("insert");		
	}

	if ( config.error.forgive && config.blind ) { // disable blind mode
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}
}

// stop on error (s3)
function updateStopOnErrorConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.stop.off && this.value === "off") || (config.error.stop.letter && this.value === "letter") || (config.error.stop.word && this.value === "word") ) return;

	SettingChangeInUI.changeStopOnErrorInUI(this.value);
	SettingChangeInConfig.changeStopOnErrorInConfig(this.value);
	
	// disable blind mode
	if ( (config.error.stop.letter || config.error.stop.word) && config.blind ) {
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}

	if ( config.error.stop.letter ) {
		// caret will be stopped before letter so insert, skip, replace, forgive is not possible
		if ( !config.error.off ) {
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");

			if ( config.error.forgive ) {
				SettingChangeInUI.changeForgiveErrorInUI("off");
				SettingChangeInConfig.changeForgiveErrorInConfig("off");
			}
		}
	} else if ( config.error.stop.word ) {
		if ( !config.delete ) {			
			SettingChangeInUI.changeTextDeletionInUI("on");
			SettingChangeInConfig.changeTextDeletionInConfig("on");	
		}
		if ( config.error.off ) {
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");			
		}
	} else {
		if ( !config.error.insert ) { // set to default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}
}

// blind mode
function updateGoBlindConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.blind && this.value === "on") || (!config.blind && this.value === "off") ) return;

	SettingChangeInUI.changeBlindModeInUI(this.value);
	SettingChangeInConfig.changeBlindModeInConfig(this.value);

	// no error handling in blind mode, so disable insert, skip, replace, forgive
	if ( config.blind ) {
		if ( !config.error.off ) { // disbale insert, skip, replace
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");
		}
		if ( config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
		if ( !config.error.stop.off ) { // disable stop on error
			SettingChangeInUI.changeStopOnErrorInUI("off");
			SettingChangeInConfig.changeStopOnErrorInConfig("off");
		}
	} else {
		if ( !config.error.insert ) { // set to default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}
}

// opposite shift mode
function updateUseOppositeShiftConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.oppositeshift && this.value === "on") || (!config.oppositeshift && this.value === "off") ) return;

	SettingChangeInUI.changeOppositeShiftModeInUI(this.value);
	SettingChangeInConfig.changeOppositeShiftModeInConfig(this.value);
}

// text word count
function updateTextWordsCountConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.word.count === -1 && this.value === "off") || (config.text.word.count === -2 && this.value === "custom") || (config.text.word.count === 10 && this.value === "10") || (config.text.word.count === 25 && this.value === "25") || (config.text.word.count === 50 && this.value === "50") || (config.text.word.count === 100 && this.value === "100") ) return;

	SettingChangeInUI.changeTextWordCountInUI(this.value);
	SettingChangeInConfig.changeTextWordCountInConfig(this.value);

	// if words mode is disabled then enable default timer mode
	if ( this.value === "off" ) {
		SettingChangeInUI.changeTimerSecondsInUI("60");
		SettingChangeInConfig.changeTimerSecondsInConfig("60");
		return;
	} else { // words mode is enabled so disable timer mode
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// focus in input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		HTMLElement.textWordsCountConfig.customWordsCountInput.focus();
	} else {
		HTMLElement.textWordsCountConfig.customWordsCountInput.value = ""; // clear input field

		ignition.restart(); // reset & restart ignition
	}
}

// text word count input (s1)
function updateTextWordsCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( HTMLElement.textWordsCountConfig.customWordsCountButton.id !== "selected" ) {
		SettingChangeInUI.changeTextWordCountInUI("custom");
		SettingChangeInConfig.changeTextWordCountInConfig("custom");
	}

	// update in config
	config.text.word.count = Number(this.value);
}

// text word count input (focus out)
function updateTextWordsCountInputFieldOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "" || this.value === "0") && (HTMLElement.textWordsCountConfig.customWordsCountButton.id === "selected") ) {
		SettingChangeInUI.changeTextWordCountInUI("25");
		SettingChangeInConfig.changeTextWordCountInConfig("25");
		this.value = "";
	}

	if ( config.text.word.count > 150 ) { // limit 150 words
		SettingChangeInUI.changeTextWordCountInUI("100");
		SettingChangeInConfig.changeTextWordCountInConfig("100");
	}

	ignition.restart(); // reset & restart ignition
}

// timer seconds
function updateTimerSecondsCountConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.time === -2 && this.value === "custom") || (config.time === -1 && this.value === "off") || (config.time === 15 && this.value === "15") || (config.time === 30 && this.value === "30") || (config.time === 60 && this.value === "60") || (config.time === 120 && this.value === "120") ) return;

	SettingChangeInUI.changeTimerSecondsInUI(this.value);
	SettingChangeInConfig.changeTimerSecondsInConfig(this.value);

	// if timer mode is disabled then enable default words mode
	if ( this.value === "off" ) {
		SettingChangeInUI.changeTextWordCountInUI("25");
		SettingChangeInConfig.changeTextWordCountInConfig("25");
		ignition.restart(); // reset & restart ignition
		return;
	} else { // timer mode is enabled so disable words mode
		SettingChangeInUI.changeTextWordCountInUI("off");
		SettingChangeInConfig.changeTextWordCountInConfig("off");
	}	

	// focus to input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		HTMLElement.timerSecondsCountConfig.customSecondsCountInput.focus();
	} else {
		HTMLElement.timerSecondsCountConfig.customSecondsCountInput.value = "";
	}
}

// timer custom input
function updateTimerSecondsCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	if ( HTMLElement.textWordsCountConfig.customWordsCountButton.id !== "selected" ) {
		SettingChangeInUI.changeTextWordCountInUI("off");
		SettingChangeInConfig.changeTextWordCountInConfig("off");
	}
	
	// make custom input button active if not
	if ( HTMLElement.timerSecondsCountConfig.customSecondsCountButton.id !== "selected" ) {
		SettingChangeInUI.changeTimerSecondsInUI("custom");
		SettingChangeInConfig.changeTimerSecondsInConfig("custom");
	}
	config.time = Number(this.value); // update in config
}

// timer custom input (focus out)
function updateTimerSecondsCountInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;
	
	// 0 or no value is entered in input field
	if ( (HTMLElement.timerSecondsCountConfig.customSecondsCountButton.id === "selected") && ((HTMLElement.timerSecondsCountConfig.customSecondsCountInput.value === "0") || (this.value === "")) ) {
		this.value = "";
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");

		// turn on words mode
		SettingChangeInUI.changeTextWordCountInUI("25");
		SettingChangeInConfig.changeTextWordCountInConfig("25");
	}
}

// text font size slider
function updateTextFontSizeConfig(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--text-font-size", `${this.value}px`);
	HTMLElement.textFontSizeConfig.fontSizeDisplayBox.textContent = this.value;
	config.text.font.size = Number(this.value); // update in config
}

// text font weight slider
function updateTextFontWeightConfig(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--text-font-weight", `${this.value}`);
	HTMLElement.textFontWeightConfig.fontWeightDisplayBox.textContent = this.value;
	config.text.font.weight = Number(this.value); // update in config
}

// primary text color (selector)
function updatePrimaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;
	
	HTMLElement.root.style.setProperty("--text-primary-color", this.value);
	HTMLElement.textColorConfig.primary.textInput.value = this.value;
	config.text.color.primary = this.value; // update in config
}

// secondary text color (selector)
function updateSecondaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--text-secondary-color", this.value);
	HTMLElement.textColorConfig.secondary.textInput.value = this.value;
	config.text.color.secondary = this.value; // update in config
}

// primary text color (text input)
function updatePrimaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--text-primary-color", this.value);
	HTMLElement.textColorConfig.primary.selectorInput = this.value;
	config.text.color.primary = this.value; // update in config
}

// secondary text color (text input)
function updateSecondaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--text-secondary-color", this.value);
	HTMLElement.textColorConfig.secondary.selectorInput.value = this.value;
	config.text.color.secondary = this.value; // update in config
}

// caret color selector input field
function updateCaretColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--caret-color", this.value);
	HTMLElement.caretColorConfig.textInput.value = this.value;
	config.text.color.caret = this.value;
}

// caret color text input field
function updateCaretColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	HTMLElement.root.style.setProperty("--caret-color", this.value);
	HTMLElement.caretColorConfig.selectorInput.value = this.value;
	config.text.color.caret = this.value;
}

// text include
function updateIncludeSpecialsInTextConfig(evt) {
	if ( !evt.isTrusted ) return;
	SettingChangeInConfig.changeIncludeSpecialsInConfig();
}

// caret style
function updateCaretStyleConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === config.caret ) return;
	
	// change caret in text
	for ( const letter of document.getElementsByTagName("letter") ) {
		letter.classList.remove(config.caret);
		letter.classList.add(this.value);
		if ( letter.id === config.caret ) letter.id = this.value;
	}

	SettingChangeInUI.changeCaretStyleInUI(this.value);
	SettingChangeInConfig.changeCaretStyleInConfig(this.value);
}

var detclick = false;
const det = document.querySelectorAll("details");

// details tag: on click, close all
det.forEach((detail) => {
	detail.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		det.forEach((dt) => { if ( detail !== dt ) dt.removeAttribute("open"); });
		detclick = true;
	});
});

// window: on click, close all
window.document.addEventListener("click", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( !detclick ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
	detclick = false; // put at last (order matter)
});

// on esc, close all details
window.document.addEventListener("keydown", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( evt.key === "Escape" ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
});


// detail.addEventListener("toggle", (evt) => { //detail.open });

const allDetails = {
	textFontFamily: {
		items: Array.from(document.querySelectorAll("details.textFontFamilyList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textFontFamilyList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textFontFamilyList summary div.text.value.in-use"),
	},
}

// put tick mark on select item
function tickMarkCorrectOption(evt, detail) {
	for ( const svg of allDetails[detail].SVGs ) {
		if ( svg?.parentElement?.parentElement.dataset.value === evt.currentTarget.dataset.value ) {
			svg.parentElement.classList.remove("unmarked");
			svg.classList.add("marked")
		} else {
			svg.parentElement.classList.add("unmarked");
			svg.classList.remove("marked")
		}
	}	
}

// details: textFontFamily
allDetails.textFontFamily.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === config.text.font.family ) return;

		config.text.font.family = evt.currentTarget.dataset.value; // update in config
		allDetails.textFontFamily.inUseTextBox.textContent = config.text.font.family; // update in ui
		HTMLElement.root.style.setProperty("--text-font-family", config.text.font.family);
		tickMarkCorrectOption(evt, "textFontFamily");
	});
});