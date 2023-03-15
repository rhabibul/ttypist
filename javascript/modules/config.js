import * as CONST from "./const.js";

export default {
  operatingsystem: "",
  ttypist: {
    istyping: false,
    finishedtyping: false,
  },
  warning: {
    capslock: false, // warn the user their capslock is on
    outoffocus: false, // warn the user the test area is out of focus
  },
  oppositeshift: false, // use opposite shift keys for shifting, using an incorrect one will count as an error, ignore B, Y, ^
  testendswithspace: false, // user will have to hit space after typing last word to end test

  // difficulty:
  //    - classic is normal typing test experience
  //    - expert fails the test if user submits an incorrect word
  //    - master fails the test if user types a single incorrect letter
  difficulty: "classic", // classic | expert | master
  
  // confidence:
  //    - pro mode will not allow user to go back to previous words to fix errors
  //    - max mode will not allow backspace at all to fix errors
  confidence: "off", // off | pro | max
  
  // if enabled, allow user to delete any word, even if it was typed correctly
  backspace: {
    allowed: true, // backspace (single letter deletion)
    modifier: {
       alt: true,  //  alt + backspace
      ctrl: true,  // ctrl + backspace
      meta: false, // mata + backspace
    },
  },
  error: {
    stop: "off", // off | letter | word
    insert: true, // insert incorrect letter
    forgive: true, // delete incorrect letters when user types the correct letter
  },
  caret: {
    type: "off", // off, line, underline, box, block
    blink: true,
    smooth: false,
  },
  sentence: {
    whitespace: CONST.whitespace.space, // space/dot
    highlight: "word", // off | letter | word
    fliptextcolor: false, // brightness of typed texts and upcoming future texts
    word: {
      count: 15,
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