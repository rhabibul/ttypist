import { config } from "../../include/config.js"
import * as SettingsElement from "../elements/setting-element.js";

// keyboard reaction
export function changeKeyboardReactionInConfig(value) {
	if ( value === "next" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = true;
	} else if ( value === "static" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = true;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = false;
	} else if ( value === "react" ) {
		config.keyboard.reaction.off = false;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = true;
		config.keyboard.reaction.next = false;
	} else {
		config.keyboard.reaction.off = true;
		config.keyboard.reaction.static = false;
		config.keyboard.reaction.react = false;
		config.keyboard.reaction.next = false;
	}
}

// keyboard emulate
export function changeKeyboardLayoutEmulateInConfig(value) {
	if ( value === "on" ) {
		config.keyboard.layout.emulate = true;
	}	else {
		config.keyboard.layout.emulate = false;
	}
}

// dynamic setting
export function changeDynamicSettingsInConfig(value) {
	if ( value === "off" ) {
		config.website.setting.dynamic = false;
	} else {
		config.website.setting.dynamic = true;
	}
}

// website theme
export function changeWebsiteThemeInConfig(value) {
	config.website.theme = value;
}

// tape mode
export function changeTapeModeInConfig(value) {
	if ( value === "letter" ) {
		config.tape.off = false;
		config.tape.mode.letter = true;
		config.tape.mode.word = false;
	} else if ( value === "word" ) {
		config.tape.off = false;
		config.tape.mode.letter = false;
		config.tape.mode.word = true;
	} else {
		config.tape.off = true;
		config.tape.mode.letter = false;
		config.tape.mode.word = false;
	}
}

// text input
export function changeTextInputInConfig(value) {
	if ( value === "visible" ) {
		config.text.input.hidden = false;
		config.text.input.visible = true;
	} else {
		config.text.input.hidden = true;
		config.text.input.visible = false;
	}
}

// text highlight
export function changeTextHightlightInConfig(value) {
	if ( value === "word" ) {
		config.text.highlight.off = false;
		config.text.highlight.mode.letter = false;
		config.text.highlight.mode.word = true;
	}	else if ( value === "letter" ) {
		config.text.highlight.off = false;
		config.text.highlight.mode.letter = true;
		config.text.highlight.mode.word = false;
	} else {
		config.text.highlight.off = true;
		config.text.highlight.mode.letter = false;
		config.text.highlight.mode.word = false;
	}
}

// flip text highlight
export function changeFlipTextHightlightInConfig(value) {
	if ( value === "on" ) {
		config.text.highlight.flip = true;
	} else {
		config.text.highlight.flip = false;
	}
}

// text underline
export function changeTextUnderlineInConfig(value) {
	if ( value === "off" ) {
		config.text.underline = false;
	} else {
		config.text.underline = true;
	}
}

// text whitespace
export function changeTextWhitespaceInConfig(value) {
	if ( value === "bullet" ) {
		config.text.whitespace.off = false;
		config.text.whitespace.style.bullet = true;
		config.text.whitespace.style.space = false;
		config.text.whitespace.style.bar = false;
		config.text.whitespace.code = Number(SettingsElement.textWhitespaceConfig.style.bullet.dataset.code);
		config.text.whitespace.character = String(SettingsElement.textWhitespaceConfig.style.bullet.dataset.character);
	} else if ( value === "bar" ) {
		config.text.whitespace.off = false;
		config.text.whitespace.style.bullet = false;
		config.text.whitespace.style.space = false;
		config.text.whitespace.style.bar = true;
		config.text.whitespace.code = Number(SettingsElement.textWhitespaceConfig.style.bar.dataset.code);
		config.text.whitespace.character = String(SettingsElement.textWhitespaceConfig.style.bar.dataset.character);
	} else if ( value === "space" ) {
		config.text.whitespace.off = false;
		config.text.whitespace.style.bullet = false;
		config.text.whitespace.style.space = true;
		config.text.whitespace.style.bar = false;
		config.text.whitespace.code = Number(SettingsElement.textWhitespaceConfig.style.space.dataset.code);
		config.text.whitespace.character = String(SettingsElement.textWhitespaceConfig.style.space.dataset.character);
	} else {
		config.text.whitespace.off = true;
		config.text.whitespace.style.bullet = false;
		config.text.whitespace.style.space = false;
		config.text.whitespace.style.bar = false;
		config.text.whitespace.code = Number(SettingsElement.textWhitespaceConfig.off.dataset.code);
		config.text.whitespace.character = String(SettingsElement.textWhitespaceConfig.off.dataset.character);
	}
}

// strict space
export function changeStrictSpaceInConfig(value) {
	if ( value === "off" ) {
		config.strictspace = false;
	} else {
		config.strictspace = true;
	}
}

// quick end
export function changeQuickEndInConfig(value) {
	if ( value === "off" ) {
		config.quickend = false;
	} else {
		config.quickend = true;
	}
}

// test difficulty
export function changeDifficultyInConfig(value) {
	if ( value === "expert" ) {
		config.difficulty.ease = false;
		config.difficulty.expert = true;
		config.difficulty.master = false;
	} else if ( value === "master" ) {
		config.difficulty.ease = false;
		config.difficulty.expert = false;
		config.difficulty.master = true;
	} else {
		config.difficulty.ease = true;
		config.difficulty.expert = false;
		config.difficulty.master = false;
	}
}

// confidence
export function changeConfidenceInConfig(value) {
	if ( value === "high" ) {
		config.confidence.low = false;
		config.confidence.high = true;
		config.confidence.peak = false;
	}	else if ( value === "peak" ) {
		config.confidence.low = false;
		config.confidence.high = false;
		config.confidence.peak = true;
	} else {
		config.confidence.low = true;
		config.confidence.high = false;
		config.confidence.peak = false;
	}
}

// text deletion
export function changeTextDeletionInConfig(value) {
	if ( value === "on" ) {
		config.delete = true;
	} else {
		config.delete = false;
	}
}

// delete previous correct word
export function changeDeletePreviousCorrectWordInConfig(value) {
	if ( value === "off" ) {
		config.delcorrect = false;
	} else {
		config.delcorrect = false;
	}
}

// modifier key
export function changeModifierKeyInConfig() {
	// alt
	if ( SettingsElement.modifierKeyConfig.alt.checked ) {
		config.modifier.alt = true;
	} else {
		config.modifier.alt = false;
	}

	// ctrl
	if ( SettingsElement.modifierKeyConfig.ctrl.checked ) {
		config.modifier.ctrl = true;
	} else {
		config.modifier.ctrl = false;
	}

	// meta
	if ( SettingsElement.modifierKeyConfig.meta.checked ) {
		config.modifier.meta = true;
	} else {
		config.modifier.meta = false;
	}
}

// warnings
export function changeWarningsInConfig() {
	// capslock
	if ( SettingsElement.warnings.capslock.checked ) {
		config.warnings.capslock = true;
	} else {
		config.warnings.capslock = false;
	}

	// numlock
	if ( SettingsElement.warnings.numlock.checked ) {
		config.warnings.numlock = true;
	} else {
		config.warnings.numlock = false;
	}
	
	// scrolllock
	if ( SettingsElement.warnings.scrolllock.checked ) {
		config.warnings.scrolllock = true;
	} else {
		config.warnings.scrolllock = false;
	}

	// focusout
	if ( SettingsElement.warnings.focusout.checked ) {
		config.warnings.focusout = true;
	} else {
		config.warnings.focusout = false;
	}
}

// live stats
export function changeLiveStatsInConfig() {
	// speed
	if ( SettingsElement.stats.live.speed.checked ) {
		config.stats.live.speed = true;
	} else {
		config.stats.live.speed = false;
	}

	// accuracy
	if ( SettingsElement.stats.live.accuracy.checked ) {
		config.stats.live.accuracy = true;
	} else {
		config.stats.live.accuracy = false;
	}

	// burst
	if ( SettingsElement.stats.live.burst.checked ) {
		config.stats.live.burst = true;
	} else {
		config.stats.live.burst = false;
	}
}

// text include
export function changeTextIncludeInConfig() {
	// digit
	if ( SettingsElement.textInclude.digit.checked ) {
		config.text.include.digit = true;
	} else {
		config.text.include.digit = false;
	}

	// punctuation
	if ( SettingsElement.textInclude.punctuation.checked ) {
		config.text.include.punctuation = true;
	} else {
		config.text.include.punctuation = false;
	}
}

// error
export function changeErrorInConfig(value) {
	if ( value === "skip" ) {
		config.error.off = false;
		config.error.insert = false;
		config.error.skip = true;
		config.error.replace = false;
	}	else if ( value === "replace" ) {
		config.error.off = false;
		config.error.insert = false;
		config.error.skip = false;
		config.error.replace = true;
	} else if ( value === "insert" ) {
		config.error.off = false;
		config.error.insert = true;
		config.error.skip = false;
		config.error.replace = false;
	} else {
		config.error.off = true;
		config.error.insert = false;
		config.error.skip = false;
		config.error.replace = false;
	}
}

// forgive error
export function changeForgiveErrorInConfig(value) {
	if ( value === "on" ) {
		config.error.forgive = true;
	} else {
		config.error.forgive = false;
	}
}

// stop on error
export function changeStopOnErrorInConfig(value) {
	if ( value === "letter" ) {
		config.error.stop.off = false;
		config.error.stop.letter = true;
		config.error.stop.word = false;
	} else if ( value === "word" ) {
		config.error.stop.off = false;
		config.error.stop.letter = false;
		config.error.stop.word = true;
	} else {
		config.error.stop.off = true;
		config.error.stop.letter = false;
		config.error.stop.word = false;
	}
}

// opposite shift mode
export function changeOppositeShiftModeInConfig(value) {
	if ( value === "on" ) {
		config.oppositeshift = true;
	} else {
		config.oppositeshift = false;
	}
}

// minimum speed
export function changeMinimumSpeedInConfig(value) {
	if ( value === "on" ) {
		config.minimum.speed.off = false;
	} else {
		config.minimum.speed.off = true;
	}
}

// minimum accuracy
export function changeMinimumAccuracyInConfig(value) {
	if ( value === "on" ) {
		config.minimum.accuracy.off = false;
	} else {
		config.minimum.accuracy.off = true;
	}
}

// minimum burst
export function changeMinimumBurstInConfig(value) {
	if ( value === "fixed" ) {
		config.minimum.burst.off = false;
		config.minimum.burst.option.fixed = true;
		config.minimum.burst.option.flex = false;
	} else if ( value === "flex" ) {
		config.minimum.burst.off = false;
		config.minimum.burst.option.fixed = false;
		config.minimum.burst.option.flex = true;
	} else {
		config.minimum.burst.off = true;
		config.minimum.burst.option.fixed = false;
		config.minimum.burst.option.flex = false;
	}
}

// text word count
export function changeTextWordCountInConfig(value) {
  if ( value === "custom" ) {
		// -2 will be the value for custom input when custom button is clicked but value 
		// is not yet entered in input field
		config.text.word.count = -2; // -2 (custom)
	} else if ( value === "off" ) {
		config.text.word.count = -1; // -1 (off)
	} else if ( value === "infinite" ) {
		config.text.word.count = 0; // 0 (infinite)
	} else if ( value === "10" ) {
		config.text.word.count = 10;
	} else if ( value === "25" ) {
		config.text.word.count = 25;
	} else if ( value === "50" ) {
		config.text.word.count = 50;
	} else if ( value === "100" ) {
		config.text.word.count = 100;
	}
}

// timer time
export function changeTimerSecondsInConfig(value) {
	if ( value === "custom" ) {
		// -2 will be the value for custom input when custom button is active but value 
		// is not yet entered in input field
		config.stats.timer.time = -2; // -2 (custom)
	} else if ( value === "off" ) {
		config.stats.timer.time = -1; // -1 (off)
	} else if ( value === "infinite" ) {
		config.stats.timer.time = 0; // 0 (infinite)
	} else if ( value === "15" ) {
		config.stats.timer.time = 15;
	} else if ( value === "30" ) {
		config.stats.timer.time = 30;
	} else if ( value === "60" ) {
		config.stats.timer.time = 60;
	} else if ( value === "120" ) {
		config.stats.timer.time = 120;
	}
}

// timer visibility
export function changeTimerVisibilityInConfig(value) {
	if ( value === "on" ) {
		config.stats.timer.hidden = true;
	} else {
		config.stats.timer.hidden = false;
	}
}

export function changePaceCaretSpeedInConfig(value) {
	if ( value === "last" ) {
		config.pacecaret.off = false;
		config.pacecaret.speed.last = true;
		config.pacecaret.speed.average = false;
		config.pacecaret.speed.best = false;
		config.pacecaret.speed.custom.off = true;
	}	else if ( value === "average" ) {
		config.pacecaret.off = false;
		config.pacecaret.speed.last = false;
		config.pacecaret.speed.average = true;
		config.pacecaret.speed.best = false;
		config.pacecaret.speed.custom.off = true;
	} else if ( value === "best" ) {
		config.pacecaret.off = false;
		config.pacecaret.speed.last = false;
		config.pacecaret.speed.average = false;
		config.pacecaret.speed.best = true;
		config.pacecaret.speed.custom.off = true;
	} else if ( value === "custom" ) {
		config.pacecaret.off = false;
		config.pacecaret.speed.last = false;
		config.pacecaret.speed.average = false;
		config.pacecaret.speed.best = false;
		config.pacecaret.speed.custom.off = false;
	} else {
		config.pacecaret.off = true;
		config.pacecaret.speed.last = false;
		config.pacecaret.speed.average = false;
		config.pacecaret.speed.best = false;
		config.pacecaret.speed.custom.off = true;
	}	
}

export function changeUseFloatsInConfig(value) {
	if ( value === "on" ) {
		config.stats.usefloats = true;
	} else {
		config.stats.usefloats = false;
	}
}

export function changeSpeedUnitInConfig(value) {
	if ( value === "cpm" ) {
		config.stats.unit.cpm = true;
		config.stats.unit.wpm = false;
	} else {
		config.stats.unit.cpm = false;
		config.stats.unit.wpm = true;
	}
}

export function changeCaretStyleInConfig(value) {
	config.caret.style = value;
}

export function changePaceCaretStyleInConfig(value) {
	config.pacecaret.style = value;
}

export function changeBlindModeInConfig(value) {
	if ( value === "on" ) {
		config.goblind = true;
	} else {
		config.goblind = false;
	}
}

export function changeTextWordLengthInConfig(value) {
	if ( value === "short" ) {
		config.text.word.length.off = false;
		config.text.word.length.short = true;
		config.text.word.length.medium = false;
		config.text.word.length.long = false;
	} else if ( value === "medium" ) {
		config.text.word.length.off = false;
		config.text.word.length.short = false;
		config.text.word.length.medium = true;
		config.text.word.length.long = false;
	} else if ( value === "long" ) {
		config.text.word.length.off = false;
		config.text.word.length.short = false;
		config.text.word.length.medium = false;
		config.text.word.length.long = true;
	} else if ( value === "off" ) {
		config.text.word.length.off = true;
		config.text.word.length.short = false;
		config.text.word.length.medium = false;
		config.text.word.length.long = false;
	}
}