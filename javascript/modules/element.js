const root = document.querySelector(":root");

const ttypist = document.getElementsByTagName("ttypist")[0];
const input = document.querySelector("ttypist > input");
const sentence = document.querySelector("ttypist > sentence");
const keyboard = document.getElementsByTagName("keyboard")[0];

const setting = {
  reset: document.getElementsByTagName("reset")[0],
  caret: {
    off: document.querySelector("caret off"),
    underline: document.querySelector("caret underline"),
    line: document.querySelector("caret line"),
    box: document.querySelector("caret box"),
    block: document.querySelector("caret block"),
  },
	whitespace: {
		off: document.querySelector("whitespace off"),
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
