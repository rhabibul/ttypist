import * as Constants from "./constants.js";

const Config = {
  istyping: false,

  live: {
    stats: false,
    keyboard: true,
  },

  instantdeath: false, // fails the test if user presses a single incorrect key
  
  deletion: true, // enables backspace | alt/ctrl + bs | meta + bs
  error: {
    insert: false,
    forgive: true,
  },

  caret: {
    type: "line", // off, line, underline, box, block
    width: "thin",
    color: "black",
    blink: true,
  },
  
  theme: "molokai",

  flipcolor: false, // flip letter/word highlight mode colors

  sentence: {
    highlight: "word", // letter, word

    word: {
      length: "mix", // small(<=5), medium(5>=, <=10), long(>=10), mix
      count: 15,
    },

    whitespace: Constants.whitespace.space, // space/dot
    
    include: {
      digits: false, // include digits along with words
      punctuations: false, // include punctuation marks along with words
    },

    font: {
      size: "1.4rem",
      weight: "400",
      family: "Roboto Mono, monospace",
    },
  },

  learntyping: false, // guided lessions for noobs

  custom: {
    // text
    owntext: false, // custom text provided by user
    alphanumeric: false, // ascii characters only

    // numbers
    numpad: false, // practice numpad digits and symbols
    numrow: false, // practice numrow digits and symbols
    
    // special symbols
    brackets: false, // {[()]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  },
};

export default Config;