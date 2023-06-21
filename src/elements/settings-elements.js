export const setting = {
	dynamic: {
		off: document.querySelector("div.s2.config.buttonContainer.dynamicSettingsButton button.button.off"),
		on: document.querySelector("div.s2.config.buttonContainer.dynamicSettingsButton button.button.on"),
	},
	view: {
		condensed: document.querySelector("div.s2.config.buttonContainer.settingsViewContainer button.button.condensed"),
		expanded: document.querySelector("div.s2.config.buttonContainer.settingsViewContainer button.button.expanded"),
	}
}
export const websitetheme = {
	light: document.querySelector("div.s3.config.buttonContainer.websiteThemeButton button.button.light"),
	dark: document.querySelector("div.s3.config.buttonContainer.websiteThemeButton button.button.dark"),
	dimmed: document.querySelector("div.s3.config.buttonContainer.websiteThemeButton button.button.dimmed"),
}
export const timer = {
	off: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer button.button.off"),
	time: {
		seconds15: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer button.button.seconds15"),
		seconds30: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer button.button.seconds30"),
		seconds60: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer button.button.seconds60"),
		seconds120: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer button.button.seconds120"),
		customSecondsInput: document.querySelector("div.s5-1.s6.config.buttonContainer.timerTimeButtonContainer div.s1.timerTimeCustomInputContainer div.customInput input.customInputBox.customSecondsInput"),
	},
	hide: {
		off: document.querySelector("div.s2.config.buttonContainer.timerTimeVisibilityButton button.button.off"),
		on: document.querySelector("div.s2.config.buttonContainer.timerTimeVisibilityButton button.button.on"),
	},
}
export const tape = {
	off: document.querySelector("div.s3.config.buttonContainer.tapeModeButton button.button.off"),
	mode: {
		letter: document.querySelector("div.s3.config.buttonContainer.tapeModeButton button.button.letter"),
		word: document.querySelector("div.s3.config.buttonContainer.tapeModeButton button.button.word"),
	},
}
export const oppositeshift = {
	off: document.querySelector("div.s2.buttonContainer.oppositeShiftButton button.button.off"),
	on: document.querySelector("div.s2.buttonContainer.oppositeShiftButton button.button.on"),
}
export const backspace = {
	off: document.querySelector("div.s2.config.buttonContainer.backspaceKeyButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.backspaceKeyButton button.button.on"),
}
export const modifier = {
	alt: document.querySelector("div.s3.config.buttonContainer.modifierKeyCheckboxButtonContainer div.modifierKeyCheckboxButton.alt input[type='checkbox']#alt"),
	ctrl: document.querySelector("div.s3.config.buttonContainer.modifierKeyCheckboxButtonContainer div.modifierKeyCheckboxButton.ctrl input[type='checkbox']#ctrl"),
	meta: document.querySelector("div.s3.config.buttonContainer.modifierKeyCheckboxButtonContainer div.modifierKeyCheckboxButton.meta input[type='checkbox']#meta"),
}
export const backspaceNotAllowedOnCorrect = {
	off: document.querySelector("div.s2.config.buttonContainer.backspaceNotAllowedOnCorrectButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.backspaceNotAllowedOnCorrectButton button.button.on"),
}
export const highlight = {
	off: document.querySelector("div.s3.config.buttonContainer.highlightModeButton button.button.off"),
	mode: {
		letter: document.querySelector("div.s3.config.buttonContainer.highlightModeButton button.button.letter"),
		word: document.querySelector("div.s3.config.buttonContainer.highlightModeButton button.button.word"),
	},
}
export const confidence = {
	low: document.querySelector("div.s3.config.buttonContainer.confidenceButton button.button.low"),
	high: document.querySelector("div.s3.config.buttonContainer.confidenceButton button.button.high"),
	peak: document.querySelector("div.s3.config.buttonContainer.confidenceButton button.button.peak"),
}
export const difficulty = {
	ease: document.querySelector("div.s3.config.buttonContainer.testDifficultyButton button.button.ease"),
	expert: document.querySelector("div.s3.config.buttonContainer.testDifficultyButton button.button.expert"),
	master: document.querySelector("div.s3.config.buttonContainer.testDifficultyButton button.button.master"),
}
export const strictspace = {
	off: document.querySelector("div.s2.config.buttonContainer.strictSpaceButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.strictSpaceButton button.button.on"),
}
export const error = {
	off: document.querySelector("div.s4.config.buttonContainer.extraLetterErrorButton button.button.off"),
	insert: document.querySelector("div.s4.config.buttonContainer.extraLetterErrorButton button.button.insert"),
	skip: document.querySelector("div.s4.config.buttonContainer.extraLetterErrorButton button.button.skip"),
	replace: document.querySelector("div.s4.config.buttonContainer.extraLetterErrorButton button.button.replace"),
	forgive: {
		off: document.querySelector("div.s2.config.buttonContainer.forgiveExtraLetterErrorButton button.button.off"),
		on: document.querySelector("div.s2.config.buttonContainer.forgiveExtraLetterErrorButton button.button.on"),
	},
	stop: {
		off: document.querySelector("div.s3.config.buttonContainer.stopOnErrorButton button.button.off"),
		letter: document.querySelector("div.s3.config.buttonContainer.stopOnErrorButton button.button.letter"),
		word: document.querySelector("div.s3.config.buttonContainer.stopOnErrorButton button.button.word"),
	}
}
export const minimum = {
	speed: {
		off: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumSpeedButtonContainer div.s2.minimumSpeedButton button.button.off"),
		on: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumSpeedButtonContainer div.s2.minimumSpeedButton button.button.on"),
		thresholdInput: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumSpeedButtonContainer div.s1.minimumSpeedCustomInputContainer div.customInput input[type='number'].customInputBox.minimumSpeed.threshold"),
	},
	accuracy: {
		off: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s2.minimumAccuracyButton button.button.off"),
		on: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s2.minimumAccuracyButton button.button.on"),
		thresholdInput: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s1.minimumAccuracyCustomInputContainer div.customInput input[type='number'].customInputBox.minimumAccuracy.threshold"),
	},
	burst: {
		off: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.off"),
		fixed: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.fixed"),
		flex: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.flex"),
		thresholdInput: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s1.minimumBurstCustomInputContainer div.customInput input[type='number'].customInputBox.minimumBurst.threshold"),
	}
}
export const caret = {
	off: document.querySelector("div.s5.config.caretStyleButton div.caretShapeContainer button.caret-off"),
	style: {
		underline: document.querySelector("div.s5.config.caretStyleButton div.caretShapeContainer button.caret-underline"),
		line: document.querySelector("div.s5.config.caretStyleButton div.caretShapeContainer button.caret-line"),
		box: document.querySelector("div.s5.config.caretStyleButton div.caretShapeContainer button.caret-box"),
		block: document.querySelector("div.s5.config.caretStyleButton div.caretShapeContainer button.caret-block"),
	},
	color: {
		selectorInput: document.querySelector("div.s1.config.colorPickerContainer.caretColorInputContainer input[type='color'].colorSelectorInput.caretColorSelectorInput"),
		textInput: document.querySelector("div.s1.config.colorPickerContainer.caretColorInputContainer input[type='text'].colorTextInput.caretColorTextInput"),
	}
}
export const pacecaret = {
	off: document.querySelector("div.s5.config.paceCaretStyleButton div.caretShapeContainer button.paceCaret-off"),
	style: {
		underline: document.querySelector("div.s5.config.paceCaretStyleButton div.caretShapeContainer button.paceCaret-underline"),
		line: document.querySelector("div.s5.config.paceCaretStyleButton div.caretShapeContainer button.paceCaret-line"),
		box: document.querySelector("div.s5.config.paceCaretStyleButton div.caretShapeContainer button.paceCaret-box"),
		block: document.querySelector("div.s5.config.paceCaretStyleButton div.caretShapeContainer button.paceCaret-block"),
	},
	color: {
		selectorInput: document.querySelector("div.s1.config.colorPickerContainer.paceCaretColorInputContainer input[type='color'].colorSelectorInput.paceCaretColorSelectorInput"),
		textInput: document.querySelector("div.s1.config.colorPickerContainer.paceCaretColorInputContainer input[type='text'].colorTextInput.paceCaretColorTextInput"),
	},
	speed: {
		off: document.querySelector("div.s4-1.s5.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.off"),
		last: document.querySelector("div.s4-1.s5.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.last"),
		average: document.querySelector("div.s4-1.s5.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.average"),
		best: document.querySelector("div.s4-1.s5.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.best"),
		paceCaretCustomSpeedInput: document.querySelector("div.s4-1.s5.config.buttonContainer.paceCaretSpeedButtonContainer div.s1.paceCaretSpeedCustomInputContainer div.customInput input[type='number'].customInputBox.paceCaretSpeed"),
	}
}