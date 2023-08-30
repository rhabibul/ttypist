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
export const userConfidenceConfig = {
	low: document.querySelector ("div.configButtonContainer#userConfidenceConfig button.low"),
	high: document.querySelector("div.configButtonContainer#userConfidenceConfig button.high"),
	peak: document.querySelector("div.configButtonContainer#userConfidenceConfig button.peak"),
}
export const testDifficultyConfig = {
	ease: document.querySelector  ("div.configButtonContainer#testDifficultyConfig button.ease"),
	expert: document.querySelector("div.configButtonContainer#testDifficultyConfig button.expert"),
	master: document.querySelector("div.configButtonContainer#testDifficultyConfig button.master"),
}
export const strictSpaceConfig = {
	off: document.querySelector("div.configButtonContainer#strictSpaceConfig button.off"),
	on: document.querySelector ("div.configButtonContainer#strictSpaceConfig button.on"),
}
export const errorHandlingConfig = {
	off:     document.querySelector("div.configButtonContainer#errorHandlingConfig button.off"),
	insert:  document.querySelector("div.configButtonContainer#errorHandlingConfig button.insert"),
	skip:    document.querySelector("div.configButtonContainer#errorHandlingConfig button.skip"),
	replace: document.querySelector("div.configButtonContainer#errorHandlingConfig button.replace"),
	forgive: {
		off: document.querySelector("div.configButtonContainer#forgiveErrorConfig button.off"),
		on:  document.querySelector("div.configButtonContainer#forgiveErrorConfig button.on"),
	},
	stop: {
		off:    document.querySelector("div.configButtonContainer#stopOnErrorConfig button.off"),
		letter: document.querySelector("div.configButtonContainer#stopOnErrorConfig button.letter"),
		word:   document.querySelector("div.configButtonContainer#stopOnErrorConfig button.word"),
	}
}
export const goBlindConfig = {
	off: document.querySelector("div.configButtonContainer#goBlindConfig button.off"),
	on: document.querySelector ("div.configButtonContainer#goBlindConfig button.on"),
}
export const quickEndConfig = {
	off: document.querySelector("div.configButtonContainer#quickEndConfig button.off"),
	on:  document.querySelector("div.configButtonContainer#quickEndConfig button.on"),
}
export const useOppositeShiftConfig = {
	off: document.querySelector("div.configButtonContainer#useOppositeShiftConfig button.off"),
	on:  document.querySelector("div.configButtonContainer#useOppositeShiftConfig button.on"),
}
export const minimumThresholdConfig = {
	speed: {
		off: document.querySelector("div.configButtonContainer#minimumSpeedConfig div.s2.minimumSpeedButton button.off"),
		on: document.querySelector("div.configButtonContainer#minimumSpeedConfig div.s2.minimumSpeedButton button.on"),
		thresholdInput: document.querySelector("div.configButtonContainer#minimumSpeedConfig div.customInputContainer.minimumSpeedCustomInputContainer div.custom.inputContainer input.inputBox.speedThreshold"),
	},
	accuracy: {
		off: document.querySelector("div.configButtonContainer#minimumAccuracyConfig div.s2.minimumAccuracyButton button.off"),
		on: document.querySelector("div.configButtonContainer#minimumAccuracyConfig div.s2.minimumAccuracyButton button.on"),
		thresholdInput: document.querySelector("div.configButtonContainer#minimumAccuracyConfig div.s1.customInputContainer.minimumAccuracyCustomInputContainer div.custom.inputContainer input.inputBox.accuracyThreshold"),
	},
	burst: {
		off: document.querySelector("div.configButtonContainer#minimumBurstConfig div.s3.minimumBurstButton button.off"),
		option: {
			fixed: document.querySelector("div.configButtonContainer#minimumBurstConfig div.s3.minimumBurstButton button.fixed"),
			flex: document.querySelector("div.configButtonContainer#minimumBurstConfig div.s3.minimumBurstButton button.flex"),
		},
		thresholdInput: document.querySelector("div.configButtonContainer#minimumBurstConfig div.s1.customInputContainer.minimumBurstCustomInputContainer div.custom.inputContainer input.inputBox.burstThreshold"),
	}
}
export const caretStyleConfig = {
	off: document.querySelector("div.configButtonContainer#caretStyleConfig button.offCaret"),
	style: {
		underscore: document.querySelector("div.configButtonContainer#caretStyleConfig button.underscoreCaret"),
		line: document.querySelector("div.configButtonContainer#caretStyleConfig button.lineCaret"),
		box: document.querySelector("div.configButtonContainer#caretStyleConfig button.boxCaret"),
		block: document.querySelector("div.configButtonContainer#caretStyleConfig button.blockCaret"),
	},
}
export const caretColorConfig = {
	selectorInput: document.querySelector("div.configButtonContainer#caretColorConfig input[type='color'].colorSelectorInput.caretColorSelectorInput"),
	textInput: document.querySelector("div.configButtonContainer#caretColorConfig input[type='text'].colorTextInput.caretColorTextInput"),
}
export const textColorConfig = {
	primary: {
		selectorInput: document.querySelector("div.configButtonContainer#textColorConfig div.primaryTextColorInputContainer input[type='color'].colorSelectorInput.primaryTextColorSelectorInput"),
		textInput: document.querySelector("div.configButtonContainer#textColorConfig div.primaryTextColorInputContainer input[type='text'].colorTextInput.primaryTextColorTextInput"),
	},
	secondary: {
		selectorInput: document.querySelector("div.configButtonContainer#textColorConfig div.secondaryTextColorInputContainer input[type='color'].colorSelectorInput.secondaryTextColorSelectorInput"),
		textInput: document.querySelector("div.configButtonContainer#textColorConfig div.secondaryTextColorInputContainer input[type='text'].colorTextInput.secondaryTextColorTextInput"),
	}
}
export const timerSecondsCountConfig = {
	off: document.querySelector("div.configButtonContainer#timerSecondsCountConfig button.off"),
 	seconds15: document.querySelector("div.configButtonContainer#timerSecondsCountConfig button.seconds15"),
 	seconds30: document.querySelector("div.configButtonContainer#timerSecondsCountConfig button.seconds30"),
 	seconds60: document.querySelector("div.configButtonContainer#timerSecondsCountConfig button.seconds60"),
 	seconds120: document.querySelector("div.configButtonContainer#timerSecondsCountConfig button.seconds120"),
 	customSecondsButton: document.querySelector("div.configButtonContainer#timerSecondsCountConfig div.s2.customInputContainer.timerTimeCustomInputContainer button.s1.timerTimeCustomInputButton"),
 	customSecondsInput: document.querySelector("div.configButtonContainer#timerSecondsCountConfig div.s2.customInputContainer.timerTimeCustomInputContainer div.s1.custom.inputContainer input.inputBox.timerTime"),
}
export const textWordsCountConfig = {
	off: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s5.textWordCountButton button.off"),
	words10: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s5.textWordCountButton button.words10"),
	words25: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s5.textWordCountButton button.words25"),
	words50: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s5.textWordCountButton button.words50"),
	words100: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s5.textWordCountButton button.words100"),
	customWordsCountButton: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s2.customInputContainer.textWordsCountCustomInputContainer button.s1.textWordsCountCustomInputButton"),
	customWordsCountInput: document.querySelector("div.configButtonContainer#textWordsCountConfig div.s2.customInputContainer.textWordsCountCustomInputContainer div.s1.custom.inputContainer input.inputBox.textWordsCount"),
}
export const lengthOfWordsInTextConfig = {
	off: document.querySelector("div.configButtonContainer#lengthOfWordsInTextConfig button.off"),
	short: document.querySelector("div.configButtonContainer#lengthOfWordsInTextConfig button.short"),
	medium: document.querySelector("div.configButtonContainer#lengthOfWordsInTextConfig button.medium"),
	long: document.querySelector("div.configButtonContainer#lengthOfWordsInTextConfig button.long"),
}
export const includeSpecialsInTextConfig = {
	digit: document.querySelector("div.configButtonContainer#includeSpecialsInTextConfig div.includeSpecialsInTextCheckboxButton.includeDigitInText input[type='checkbox']#includeDigit"),
	punctuation: document.querySelector("div.configButtonContainer#includeSpecialsInTextConfig div.includeSpecialsInTextCheckboxButton.includePunctuationInText input[type='checkbox']#includePunctuation"),
}
export const textFontSizeConfig = {
	fontSizeInput: document.querySelector("div.configButtonContainer#textFontSizeConfig div.textFontSizeInputContainer input[type='range'].textFontSizeInput"),
	fontSizeDisplayBox: document.querySelector("div.configButtonContainer#textFontSizeConfig div.text.value")
}
export const textFontWeightConfig = {
	fontWeightInput:      document.querySelector("div.configButtonContainer#textFontWeightConfig div.textFontWeightInputContainer input[type='range'].textFontWeightInput"),
	fontWeightDisplayBox: document.querySelector("div.configButtonContainer#textFontWeightConfig div.text.value")
}
export const paceCaretStyleConfig = {
	off: document.querySelector("div.configButtonContainer#paceCaretStyleConfig button.offPaceCaret"),
	style: {
		underscore: document.querySelector("div.configButtonContainer#paceCaretStyleConfig button.underscorePaceCaret"),
		line: document.querySelector("div.configButtonContainer#paceCaretStyleConfig button.linePaceCaret"),
		box: document.querySelector("div.configButtonContainer#paceCaretStyleConfig button.boxPaceCaret"),
		block: document.querySelector("div.configButtonContainer#paceCaretStyleConfig button.blockPaceCaret"),
	},
}
export const paceCaretSpeedConfig = {
	off: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s4.paceCaretSpeedConfigButton button.off"),
	last: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s4.paceCaretSpeedConfigButton button.last"),
	average: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s4.paceCaretSpeedConfigButton button.average"),
	best: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s4.paceCaretSpeedConfigButton button.best"),
	paceCaretCustomSpeedButton: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s2.customInputContainer.paceCaretSpeedCustomInputContainer button.s1.paceCaretSpeedCustomInputButton"),
	paceCaretCustomSpeedInput: document.querySelector("div.configButtonContainer#paceCaretSpeedConfig div.s2.customInputContainer.paceCaretSpeedCustomInputContainer div.s1.custom.inputContainer input.inputBox.paceCaretSpeedThreshold"),
}
export const warning = {
	capslock: document.querySelector("div.warningCheckboxButton.capslock input[type='checkbox']#capslock"),
	numlock: document.querySelector("div.warningCheckboxButton.numlock input[type='checkbox']#numlock"),
	scrolllock: document.querySelector("div.warningCheckboxButton.scrolllock input[type='checkbox']#scrolllock"),
	focusout: document.querySelector("div.warningCheckboxButton.outoffocus input[type='checkbox']#outoffocus"),
}
export const stats = {
	live: {
		speed: document.querySelector("div.configButtonContainer#liveStatsConfig div.liveStatsCheckboxButton.speed input[type='checkbox']#speed"),
		accuracy: document.querySelector("div.configButtonContainer#liveStatsConfig div.liveStatsCheckboxButton.accuracy input[type='checkbox']#accuracy"),
		burst: document.querySelector("div.configButtonContainer#liveStatsConfig div.liveStatsCheckboxButton.burst input[type='checkbox']#burst"),
	},
	unit: {
		cpm: document.querySelector("div.configButtonContainer#typingSpeedMeasurementUnitConfig button.cpm"),
		wpm: document.querySelector("div.configButtonContainer#typingSpeedMeasurementUnitConfig button.wpm"),
	},
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