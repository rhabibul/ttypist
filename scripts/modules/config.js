import * as Constants from "./constants.js";

const Config = {
  typing: false,

  keyboard: true, // live keyboard
  livestats: false, // live stats

  deletion: true, // enables backspace | alt/ctrl + bs | meta + bs
  inserterror: true, 
  forgiveerror: false,
  instantdeath: false, // fails the test if user presses a single incorrect key

  caret: "line", // off, line, underline, box, block
  highlight: "word", // letter, word
  flipcolor: false, // flip letter/word highlight mode colors

  theme: "molokai",

  sentence: {
    wordcount: 25,
    wordseparator: Constants.whitespace.space, // space/dot
    numbers: false, // include digits along with words
    punctuations: false, // include punctuation marks along with words

    fontsize: "1.4", // font size
    fontweight: "400", // font weight
    fontfamily: "Roboto Mono", // font family
  },

  practice: {
    customtext: false, // custom text provided by user
    guidedlessions: false, // guided lessions for noobs
  },

  custom: {
    numpad: false, // practice numpad digits and symbols
    numrow: false, // practice numrow digits and symbols
    brackets: false, // {[()]}
    alphanumeric: false, // ascii
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]

    // ArrowUp, ArrowLeft, ArrowRight, ArrowDown,
    // KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    arrowkeys: false,
  },
};

export default Config;