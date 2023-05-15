export const caret = {
	off: document.querySelector("caret off"),
	underline: document.querySelector("caret underline"),
	line: document.querySelector("caret line"),
	box: document.querySelector("caret box"),
	block: document.querySelector("caret block"),
};

export const pacecaret = {
	off: document.querySelector("pacecaret off"),
	underline: document.querySelector("pacecaret underline"),
	line: document.querySelector("pacecaret line"),
	box: document.querySelector("pacecaret box"),
	block: document.querySelector("pacecaret block"),
};

export const highlight = {
	off: document.querySelector("highlight off"),
	mode: {
		letter: document.querySelector("highlight letter"),
		word: document.querySelector("highlight	word"),
	}
}

export const fliphighlightcolor = {
	off: document.querySelector("fliphighlightcolor off"),
	on: document.querySelector("fliphighlightcolor on"),
}

export const backspace = {
	off: document.querySelector("backspace off"),
	on: document.querySelector("backspace on"),
	modifier: {
		alt: document.querySelector("modifier alt"),
		ctrl: document.querySelector("modifier ctrl"),
		meta: document.querySelector("modifier mmeta"),
	}
}

export const tape = {
	off: document.querySelector("tape off"),
	on: document.querySelector("tape on"),
}

export const difficulty = {
	normal: document.querySelector("difficulty normal"),
	expert: document.querySelector("difficulty expert"),
	master: document.querySelector("difficulty master"),
}

export const confidence = {
	low: document.querySelector("confidence low"),
	high: document.querySelector("confidence high"),
	max: document.querySelector("confidence max"),
}

export const scroll = {
	abrupt: document.querySelector("scroll abrupt"),
	smooth: document.querySelector("scroll smooth"),
}

export const keyboard = {
	off: document.querySelector("keyboard off"),
	reaction: {
		static: document.querySelector("keyboard static"),
		react: document.querySelector("keyboard react"),
		next: document.querySelector("keyboard next"),
	},
}

export const warning = {
	focus: document.querySelector("warning focus"),
	capslock: document.querySelector("warning capslock"),
	numlock: document.querySelector("warning numlock"),
}

export const inputvisibility = {
	hidden: document.querySelector("inputvisibility hidden"),
	visible: document.querySelector("inputvisibility visible"),
}

export const error = {
	off: document.querySelector("error off"),
	insert: document.querySelector("error insert"),
	replace: document.querySelector("error replace"),
}

export const forgive = {
	off: document.querySelector("forgive off"),
	on: document.querySelector("forgive on"),
}

export const stoponerror = {
	off: document.querySelector("stoponerror off"),
	letter: document.querySelector("stoponerror letter"),
	word: document.querySelector("stoponerror word"),
}

export const whitespace = {
	off: document.querySelector("whitespace off"),
	bullet: document.querySelector("whitespace bullet"),
	space: document.querySelector("whitespace space"),
	bar: document.querySelector("whitespace bar"),
}

export const underline = {
	off: document.querySelector("underline off"),
	on: document.querySelector("underline on"),
}

export const endwithspace = {
	off: document.querySelector("endwithspace off"),
	on: document.querySelector("endwithspace on"),
}

export const oppositeshift = {
	off: document.querySelector("oppositeshift off"),
	on: document.querySelector("oppositeshift on"),
}

export const live = {
	speed: document.querySelector("live speed"),
	accuracy: document.querySelector("live accuracy"),
	burst: document.querySelector("live burst"),
	timer: document.querySelector("live timer"),
}

// #############################################################################

export const reset = document.querySelector(`button[type="reset"]`);
export const fullscreenToggleButton = document.querySelector(`button[type="fullscreen"]`);
export const enterFullscreen = document.querySelector("button i.fa-expand");
export const exitFullscreen = document.querySelector("button i.fa-compress");