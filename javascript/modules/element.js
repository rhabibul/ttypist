const root = document.querySelector(":root");

const ttypist = document.getElementsByTagName("ttypist")[0];
const input = document.querySelector("ttypist > input");
const sentence = document.querySelector("ttypist > sentence");
const keyboard = document.getElementsByTagName("keyboard")[0];

const setting = {
	restart: {
		button: document.querySelector("button.restart"),
		button_icon: document.querySelector("button i.fa-rotate-right"),
	},
  caret: {
    off: document.querySelector("caret.off"),
    line: document.querySelector("caret.line"),
    underline: document.querySelector("caret.underline"),
    block: document.querySelector("caret.block"),
    box: document.querySelector("caret.box"),
  },
	whitespace: {
		dot: document.querySelector("whitespace dot"),
		space: document.querySelector("whitespace space"),
	},
};

const speedtag = document.querySelector(".speed");
const contactme = document.querySelector(".contactme");
const developer = document.querySelector(".developer");

export {
  root,

  ttypist,
  input,
  sentence,
	
  keyboard,

	setting,

  speedtag,
  contactme,
  developer,	
};
