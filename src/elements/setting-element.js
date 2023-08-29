export const tapeModeConfig = {
	off: document.querySelector("div.configButtonContainer#tapeModeConfig button.off"),
	mode: {
		letter: document.querySelector("div.configButtonContainer#tapeModeConfig button.letter"),
		word: document.querySelector("div.configButtonContainer#tapeModeConfig button.word"),
	},
}
export const textInputFieldConfig = {
	hidden: document.querySelector("div.configButtonContainer#textInputFieldConfig button.hidden"),
	visible: document.querySelector("div.configButtonContainer#textInputFieldConfig button.visible"),
}
export const textUnderlineConfig = {
	off: document.querySelector("div.configButtonContainer#textUnderlineConfig button.off"),
	on: document.querySelector("div.configButtonContainer#textUnderlineConfig button.on"),
}
export const textWhitespaceConfig = {
	off: document.querySelector("div.configButtonContainer#textWhitespaceConfig button.off"),
	style: {
		bullet: document.querySelector("div.configButtonContainer#textWhitespaceConfig button.bullet"),
		space: document.querySelector("div.configButtonContainer#textWhitespaceConfig button.space"),
		bar: document.querySelector("div.configButtonContainer#textWhitespaceConfig button.bar"),
	}
}
export const textHighlightConfig = {
	off: document.querySelector("div.configButtonContainer#textHighlightConfig button.off"),
	mode: {
		letter: document.querySelector("div.configButtonContainer#textHighlightConfig button.letter"),
		word: document.querySelector("div.configButtonContainer#textHighlightConfig button.word"),
	}
}
export const flipTextHighlightConfig = {
	off: document.querySelector("div.configButtonContainer#flipTextHighlightConfig button.off"),
	on: document.querySelector("div.configButtonContainer#flipTextHighlightConfig button.on"),
}
export const modifierKeyConfig = {
	alt: document.querySelector("div.configButtonContainer#modifierKeyConfig div.modifierKeyCheckboxButton.alt input[type='checkbox']#alt"),
	ctrl: document.querySelector("div.configButtonContainer#modifierKeyConfig div.modifierKeyCheckboxButton.ctrl input[type='checkbox']#ctrl"),
	meta: document.querySelector("div.configButtonContainer#modifierKeyConfig div.modifierKeyCheckboxButton.meta input[type='checkbox']#meta"),
}
export const deletionConfig = {
	off: document.querySelector("div.configButtonContainer#textDeletionConfig button.off"),
	on: document.querySelector("div.configButtonContainer#textDeletionConfig button.on"),
}
export const delcorrectConfig = {
	off: document.querySelector("div.configButtonContainer#deletionOfCorrectWordConfig button.off"),
	on: document.querySelector("div.configButtonContainer#deletionOfCorrectWordConfig button.on"),
}


// -------------------------------------------------------------------------------



export const oppositeShift = {
	off: document.querySelector("div.s2.buttonContainer.oppositeShiftButton button.button.off"),
	on: document.querySelector("div.s2.buttonContainer.oppositeShiftButton button.button.on"),
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
		thresholdInput: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumSpeedButtonContainer div.s1.customInputContainer.minimumSpeedCustomInputContainer div.custom.inputContainer input.inputBox.speedThreshold"),
	},
	accuracy: {
		off: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s2.minimumAccuracyButton button.button.off"),
		on: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s2.minimumAccuracyButton button.button.on"),
		thresholdInput: document.querySelector("div.s2-1.s3.config.buttonContainer.minimumAccuracyButtonContainer div.s1.customInputContainer.minimumAccuracyCustomInputContainer div.custom.inputContainer input.inputBox.accuracyThreshold"),
	},
	burst: {
		off: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.off"),
		option: {
			fixed: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.fixed"),
			flex: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s3.minimumBurstButton button.button.flex"),
		},
		thresholdInput: document.querySelector("div.s3-1.s4.config.buttonContainer.minimumBurstButtonContainer div.s1.customInputContainer.minimumBurstCustomInputContainer div.custom.inputContainer input.inputBox.burstThreshold"),
	}
}
export const caret = {
	off: document.querySelector("div.s5.config.caretStyleButton button.caret-off"),
	style: {
		underscore: document.querySelector("div.s5.config.caretStyleButton button.caret-underscore"),
		line: document.querySelector("div.s5.config.caretStyleButton button.caret-line"),
		box: document.querySelector("div.s5.config.caretStyleButton button.caret-box"),
		block: document.querySelector("div.s5.config.caretStyleButton button.caret-block"),
	},
	color: {
		selectorInput: document.querySelector("div.s1.config.colorPickerContainer.caretColorInputContainer input[type='color'].colorSelectorInput.caretColorSelectorInput"),
		textInput: document.querySelector("div.s1.config.colorPickerContainer.caretColorInputContainer input[type='text'].colorTextInput.caretColorTextInput"),
	}
}
export const pacecaret = {
	off: document.querySelector("div.s5.config.paceCaretStyleButton button.paceCaret-off"),
	style: {
		underscore: document.querySelector("div.s5.config.paceCaretStyleButton button.paceCaret-underscore"),
		line: document.querySelector("div.s5.config.paceCaretStyleButton button.paceCaret-line"),
		box: document.querySelector("div.s5.config.paceCaretStyleButton button.paceCaret-box"),
		block: document.querySelector("div.s5.config.paceCaretStyleButton button.paceCaret-block"),
	},
	speed: {
		off: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.off"),
		last: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.last"),
		average: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.average"),
		best: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s4.paceCaretSpeedButton button.button.best"),
		custom: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s2.customInputContainer.paceCaretSpeedCustomInputContainer button.s1.button.paceCaretSpeedCustomInputButton"),
		paceCaretCustomSpeedInput: document.querySelector("div.s4-2.s6.config.buttonContainer.paceCaretSpeedButtonContainer div.s2.customInputContainer.paceCaretSpeedCustomInputContainer div.s1.custom.inputContainer input.inputBox.paceCaretSpeedThreshold"),
	},
	color: {
		selectorInput: document.querySelector("div.s1.config.colorPickerContainer.paceCaretColorInputContainer input[type='color'].colorSelectorInput.paceCaretColorSelectorInput"),
		textInput: document.querySelector("div.s1.config.colorPickerContainer.paceCaretColorInputContainer input[type='text'].colorTextInput.paceCaretColorTextInput"),
	},
}
export const textColor = {
	primary: {
		selectorInput: document.querySelector("div.s1.colorPickerContainer.primaryTextColorInputContainer input[type='color'].colorSelectorInput.primaryTextColorSelectorInput"),
		textInput: document.querySelector("div.s1.colorPickerContainer.primaryTextColorInputContainer input[type='text'].colorTextInput.primaryTextColorTextInput"),
	},
	secondary: {
		selectorInput: document.querySelector("div.s1.colorPickerContainer.secondaryTextColorInputContainer input[type='color'].colorSelectorInput.secondaryTextColorSelectorInput"),
		textInput: document.querySelector("div.s1.colorPickerContainer.secondaryTextColorInputContainer input[type='text'].colorTextInput.secondaryTextColorTextInput"),
	}
}
export const timer = {
	off: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer button.button.off"),
	time: {
		seconds15: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer button.button.seconds15"),
		seconds30: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer button.button.seconds30"),
		seconds60: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer button.button.seconds60"),
		seconds120: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer button.button.seconds120"),
		custom: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer div.s2.customInputContainer.timerTimeCustomInputContainer button.s1.button.timerTimeCustomInputButton"),
		customSecondsInput: document.querySelector("div.s5-2.s7.config.buttonContainer.timerTimeButtonContainer div.s2.customInputContainer.timerTimeCustomInputContainer div.s1.custom.inputContainer input.inputBox.timerTime"),
	},
	hidden: {
		off: document.querySelector("div.s2.config.buttonContainer.timerTimeVisibilityButton button.button.off"),
		on: document.querySelector("div.s2.config.buttonContainer.timerTimeVisibilityButton button.button.on"),
	},
}
export const textWordCount = {
	off: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s5.textWordCountButton button.button.off"),
	count: {
		words10: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s5.textWordCountButton button.button.words10"),
		words25: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s5.textWordCountButton button.button.words25"),
		words50: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s5.textWordCountButton button.button.words50"),
		words100: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s5.textWordCountButton button.button.words100"),
		custom: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s2.customInputContainer.textWordCountCustomInputContainer button.s1.button.textWordCountCustomInputButton"),
		customWordsInput: document.querySelector("div.s5-2.s7.config.buttonContainer.textWordCountButtonContainer div.s2.customInputContainer.textWordCountCustomInputContainer div.s1.custom.inputContainer input.inputBox.textWordCount"),
	},
}
export const strictspace = {
	off: document.querySelector("div.s2.config.buttonContainer.strictSpaceButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.strictSpaceButton button.button.on"),
}
export const quickend = {
	off: document.querySelector("div.s2.config.buttonContainer.quickEndButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.quickEndButton button.button.on"),
}
export const textFontSize = {
	fontSizeInput: document.querySelector("div.s1.config.buttonContainer.textFontSizeContainer.range div.textFontSizeInputContainer input[type='range'].textFontSizeInput"),
	fontSizeDisplayBox: document.querySelector("div.s1.config.buttonContainer.textFontSizeContainer.range div.text.value")
}
export const textFontWeight = {
	fontWeightInput: document.querySelector("div.s1.config.buttonContainer.textFontWeightContainer.range div.textFontWeightInputContainer input[type='range'].textFontWeightInput"),
	fontWeightDisplayBox: document.querySelector("div.s1.config.buttonContainer.textFontWeightContainer.range div.text.value")
}
export const textInclude = {
	digit: document.querySelector("div.s2.config.buttonContainer.textIncludeCheckboxButtonContainer div.textIncludeCheckboxButton.digit input[type='checkbox']#digit"),
	punctuation: document.querySelector("div.s2.config.buttonContainer.textIncludeCheckboxButtonContainer div.textIncludeCheckboxButton.punctuation input[type='checkbox']#punctuation"),
}
export const stats = {
	live: {
		speed: document.querySelector("div.s3.config.buttonContainer.liveStatusCheckboxButtonContainer div.liveStatusCheckboxButton.speed input[type='checkbox']#speed"),
		accuracy: document.querySelector("div.s3.config.buttonContainer.liveStatusCheckboxButtonContainer div.liveStatusCheckboxButton.accuracy input[type='checkbox']#accuracy"),
		burst: document.querySelector("div.s3.config.buttonContainer.liveStatusCheckboxButtonContainer div.liveStatusCheckboxButton.burst input[type='checkbox']#burst"),
	},
	calcInterval: {
		word: document.querySelector("div.s3.config.buttonContainer.liveStatusIntervalButton button.button.word"),
		keystroke: document.querySelector("div.s3.config.buttonContainer.liveStatusIntervalButton button.button.keystroke"),
		second: document.querySelector("div.s3.config.buttonContainer.liveStatusIntervalButton button.button.second"),
	},
	unit: {
		cpm: document.querySelector("div.s2.config.buttonContainer.speedUnitButton button.button.cpm"),
		wpm: document.querySelector("div.s2.config.buttonContainer.speedUnitButton button.button.wpm"),
	},
	usefloats: {
		off: document.querySelector("div.s2.config.buttonContainer.useFloatsButton button.button.off"),
		on: document.querySelector("div.s2.config.buttonContainer.useFloatsButton button.button.on"),
	},
}
export const warnings = {
	capslock: document.querySelector("div.warningsCheckboxButton.capslock input[type='checkbox']#capslock"),
	numlock: document.querySelector("div.warningsCheckboxButton.numlock input[type='checkbox']#numlock"),
	scrolllock: document.querySelector("div.warningsCheckboxButton.scrolllock input[type='checkbox']#scrolllock"),
	focusout: document.querySelector("div.warningsCheckboxButton.outoffocus input[type='checkbox']#outoffocus"),
}
export const keyboardReaction = {
	off: document.querySelector("div.s4.config.buttonContainer.keyboardReactionButton button.button.off"),
	static: document.querySelector("div.s4.config.buttonContainer.keyboardReactionButton button.button.static"),
	react: document.querySelector("div.s4.config.buttonContainer.keyboardReactionButton button.button.react"),
	next: document.querySelector("div.s4.config.buttonContainer.keyboardReactionButton button.button.next"),
}
export const KeyboardLayoutEmulate = {
	off: document.querySelector("div.s2.config.buttonContainer.UIKeyboardLayoutEmulateButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.UIKeyboardLayoutEmulateButton button.button.on"),
}
export const blindMode = {
	off: document.querySelector("div.s2.config.buttonContainer.blindModeButton button.button.off"),
	on: document.querySelector("div.s2.config.buttonContainer.blindModeButton button.button.on"),
}
export const textWordLength = {
	off: document.querySelector("div.s4.config.buttonContainer.textWordLengthButton button.button.off"),
	short: document.querySelector("div.s4.config.buttonContainer.textWordLengthButton button.button.short"),
	medium: document.querySelector("div.s4.config.buttonContainer.textWordLengthButton button.button.medium"),
	long: document.querySelector("div.s4.config.buttonContainer.textWordLengthButton button.button.long"),
}