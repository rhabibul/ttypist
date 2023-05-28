export const caret = {
	off: document.querySelector("caret off"),
	style: {
		underline: document.querySelector("caret underline"),
		line: document.querySelector("caret line"),
		box: document.querySelector("caret box"),
		block: document.querySelector("caret block"),
	},
};

export const pacecaret = {
	off: document.querySelector("pacecaret off"),
	underline: document.querySelector("pacecaret underline"),
	line: document.querySelector("pacecaret line"),
	box: document.querySelector("pacecaret box"),
	block: document.querySelector("pacecaret block"),
};

export const highlight = {
	off: document.querySelector("div.config.highlight off"),
	mode: {
		letter: document.querySelector("div.config.highlight letter"),
		word: document.querySelector("div.config.highlight	word"),
	},
	flipcolor: {
		off: document.querySelector("div.config.highlight.flipcolor off"),
		on: document.querySelector("div.config.highlight.flipcolor on"),
	}
}