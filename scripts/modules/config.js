import * as Constants from "./constants.js";

const Config = {
  typing: false,
  firsttest: true,

  livestats: false, // live stats
  livekeyboard: true, // live keyboard

  theme: "molokai",

  // "beginner" is the classic type test experience.
  // "intermediate" fails the test if you submit (press space) an incorrect word.
  // "advanced" fails if you press a single incorrect key.
  difficulty: "beginner",

  deletion: true, // enables backspace | alt/ctrl + bs | meta + bs
  inserterror: true, 
  forgiveerror: false,
  caret: "line", // off, line, underline, box, block
  highlight: "word", // letter, word

  // sentence: {
  //   wordcount: 10,
  //   wordseparator: Constants.whitespace.space, // space/dot
  //   numbers: false,
  //   punctuations: false,
  // },
  
  numbers: false, // include digits along with words
  punctuations: false, // include punctuation marks along with words

  wordcount: 10, // total number of words to generate for every test
  wordseparator: Constants.whitespace.space, // space/dot

  flipcolors: false, // flip highlight mode colors

  fontsize: "1.4", // font size
  fontweight: "400", // font weight
  fontfamily: "Roboto Mono", // font family

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