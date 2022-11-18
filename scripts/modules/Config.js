const whitespace = {
  space: "&nbsp;",
  bullet: "⸱",
};

const Config = {
  customtext: false, // custom text
  guidedlessions: false, // guided lessions for noobs

  flipcolors: false, // flip highlight mode colors
  livestats: false, // live stats
  livekeyboard: true, // live keyboard
  highlight: "word", // highlight mode: letter, word
  deletion: true, // enables backspace, (alt/ctrl + bs) and (meta + bs)
  forgiveerrors: true, // inserts wrongly typed letters

  // "beginner" is the classic type test experience.
  // "intermediate" fails the test if you submit (press space) an incorrect word.
  // "advanced" fails if you press a single incorrect key.
  difficulty: "beginner",

  caretwidth: "thin", // caret width: thin, thick
  caretstyle: "line", // caret style: none, line, box, underline, block

  fontsize: "1.4", // font size
  fontweight: "300", // font weight
  fontfamily: "Roboto Mono", // font family

  text: {
    numbers: false,
    punctuations: false,
    wordseparator: whitespace.space,
  },
};

const Practice = {
	
  numpad: false,
  numrow: false,
  alphanumeric: false,
  brackets: false, // {[()]}
  specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12

  // ArrowUp, ArrowLeft, ArrowRight, ArrowDown,
  // KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
  arrowkeys: false,
};