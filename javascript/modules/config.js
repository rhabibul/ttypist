import * as Const from "./constant.js";

export default {

  teststate: {
    istyping: false,
  },

  livestats: false, // update speed, accuracy and other stats on every keystroke
  inputvisible: false, // make user box visible below the words
  endtestwithspace: false,

  // use opposite shift keys for shifting, using an incorrect one will count 
  // as an error, ignore B, Y, ^
  oppositeshift: false,

  caret: {
    off: false,
    type: "line", // line, underline, box, block
  },

  // difficulty:
  //    - normal is classic typing experience
  //    - expert fails the test if user submits an incorrect word
  //    - master fails the test if user types a single incorrect letter
  difficulty: "normal", // normal | expert | master

  confidence: {
    off: true,
    mode: {
      pro: false, // don't allow user to go back to previous words to fix error
      max: false, // don't allow backspace at all to fix any error
    }
  },

  backspace: {
    off: false,
    modifier: {
       alt: true,
      ctrl: true,
      meta: false,
    },
  },

  error: {
    thenStopOn: {
      word: false,
      letter: false,
    },
    insert: true, // insert incorrect letter
    forgive: true, // delete incorrect letters when user types the correct letter
  },

  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
    flip_textcolor: false, // brightness of typed text and future text
  },
  
  whitespace: {
    off: false,
    type: "space",
    character: "&nbsp;",
    code: 160,
  },

  keyboard: {
    layout: "qwerty", // keyboard layout
    emulate: false, // emulate other keyboard layouts
    language: "english",
  },

  warning: {
    off: true,
    capslock: false, // warn the user their capslock is on
    outoffocus: false, // warn the user the test area is out of focus
  },

  sentence: {
    word: {
      count: 20,
      averagelength: "mixed", // small(<5) | medium(>=5, <=8) | long(>8) | mixed
    },
    include: {
      digits: false, // include digits along with words
      punctuations: false, // include punctuation marks along with words
    },
  },

  practice: {
    off: true,
    guidedlessions: false, // guided lessons
    providecustomtext: false, // custom text provided by user

    numrow: false, // number row digits and symbols
    numpad: false, // number pad digits and arithmetic operations with expression
    alphanumeric: false, // ascii characters only
    
    brackets: false, // {[()]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  }
};