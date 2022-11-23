const CustomPractice = {
  numpad: false,
  numrow: false,
  alphanumeric: false, // ascii
  brackets: false, // {[()]}
  specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12

  // ArrowUp, ArrowLeft, ArrowRight, ArrowDown,
  // KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
  arrowkeys: false,
};

const whitespace = {
  space: "&nbsp;",
  bullet: "⸱",
};

const Config = {
  theme: "molokai",

  customtext: false, // custom text
  guidedlessions: false, // guided lessions for noobs

  livestats: false, // live stats
  livekeyboard: true, // live keyboard

  // "beginner" is the classic type test experience.
  // "intermediate" fails the test if you submit (press space) an incorrect word.
  // "advanced" fails if you press a single incorrect key.
  difficulty: "beginner",
  deletion: true, // enables backspace | alt/ctrl + bs | meta + bs
  forgiveerrors: true, // inserts wrongly typed letters
  highlight: "word", // highlight mode: letter, word
  caret: "line", // none, line, underline, box, block

  // text configs
  numbers: false,
  punctuations: false,

  wordscount: 25,
  wordseparator: whitespace.space,

  flipcolors: false, // flip highlight mode colors

  fontsize: "1.4", // font size
  fontweight: "300", // font weight
  fontfamily: "Roboto Mono", // font family
};

export default Config;