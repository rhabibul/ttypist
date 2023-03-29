import * as Const from "./const.js";

export default {
  os: "",
  device: "",

  ttypist: {
    istyping: false,
    using_smartphone: false,
  },

  warning: {
    off: true,
    capslock: false, // warn the user their capslock is on
    outoffocus: false, // warn the user the test area is out of focus
  },

  oppositeshift: false, // use opposite shift keys for shifting, using an incorrect one will count as an error, ignore B, Y, ^
  inputvisible: false,
  endtestwithspace: false, // user will have to hit space after typing last word to end test

  // difficulty:
  //    - classic is normal typing test experience
  //    - expert fails the test if user submits an incorrect word
  //    - master fails the test if user types a single incorrect letter
  difficulty: "classic", // classic | expert | master
  
  confidence: {
    off: true,
    mode: {
      pro: false, // don't allow user to go back to previous words to fix error
      max: false, // don't allow backspace at all to fix any error
    }
  },

  caret: {
    off: false,
    type: "line", // line, underline, box, block
  },
  
  // if enabled, allow user to delete any word, even if it was typed correctly
  backspace: {
    off: false,
    modifier: {
       alt: true,
      ctrl: true,
      meta: false,
    },
  },

  error: {
    stopCaretOn: {
      word: false,
      letter: false,
    },
    insert: true, // insert incorrect letter
    forgive: true, // delete incorrect letters when user types the correct letter
  },

  fliptextcolor: false, // brightness of typed text and future text
  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
  },
  
  whitespace: {
    code: Const.whitespace.space.code,
    character: Const.whitespace.space.character,
  },

  sentence: {
    word: {
      count: 10,
      length: "mix", // small(<5) | medium(>5, <8) | long(>8) | mix(random)
    },
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

  live: {
    stats: false, // show wpm/cpm and accuracy on every keystroke
    keyboard: true, // static, react, next
  },
  keyboard: {
    emulate: false, // emulate other keyboard layouts
    layout: "qwerty", // keyboard layout
    language: "english",
  },
  sound: {
    play: "off", // off, nk creams, typewriter, hitmarker
    onerror: false, // play sound on error
  },
  practice: {
    customtext: false, // custom text provided by user
    guidedlessions: false,
    alphanumeric: false, // ascii characters only

    numrow: false, // number row digits and symbols
    numpad: false, // number pad digits and arithmetic operations with expression
    
    brackets: false, // {[()]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
    specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  },
};