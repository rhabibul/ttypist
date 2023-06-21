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