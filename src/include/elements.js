// ------------ miscellaneous elements ------------
export const root = document.querySelector(":root");



// ------------ typing area elements ------------
export const textInputField = document.getElementById("textInputField");
export const textContainerElement = document.getElementsByTagName("text")[0];



// ------------ setting button elements ------------
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
export const deleteConfig = {
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
 	customSecondsCountButton: document.querySelector("div.configButtonContainer#timerSecondsCountConfig div.s2.customInputContainer.timerTimeCustomInputContainer button.s1.timerTimeCustomInputButton"),
 	customSecondsCountInput: document.querySelector("div.configButtonContainer#timerSecondsCountConfig div.s2.customInputContainer.timerTimeCustomInputContainer div.s1.custom.inputContainer input.inputBox.timerTime"),
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