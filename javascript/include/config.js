export default {

  ttypist: {
    istyping: false,
    deviceinformation: "",
  },

  capslock: false, // warn the user their capslock is on
  outoffocus: false, // warn the user the test area is out of focus

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

  fliptextcolor: false, // brightness of typed text and future text
  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
  },

  // difficulty
  //    normal: classic typing experience
  //    expert: fails the test if user submits an incorrect word
  //    master: fails the test if user types a single incorrect letter
  difficulty: "classic", // classic | expert | master
  
  confidence: {
    off: true,
    mode: {
      pro: false, // can fix current word errors, but not previous words
      max: false, // if true then don't allow backspace at all to fix errors
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
    insert: true, // insert incorrect letter
    forgive: true, // delete incorrect letter(s) when user types the correct letter

    stopOnError: {
      off: false,
      at: {
        word: false,
        letter: false,
      },
    },
  },
  
  whitespace: {
    off: false,
    type: "space",
    character: "&nbsp;",
    code: 160,
  },

  sentence: {
    word: {
      count: 20,
      averagelength: "mixed", // mixed | small(<5) | medium(>=5, <=8) | long(>8)
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
};

const later = {

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
  },

  keyboard: {
    layout: "qwerty", // keyboard layout
    emulate: false, // emulate other keyboard layouts
    language: "english",
  },
}