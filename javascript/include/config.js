export default {
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
  },
  deviceinformation: "comma,separated,value",
  theme: "white", // white | blue | black
  language: "english", // english | hindi | bengali | arabic | russian
  dynamicsettingchange: true, // apply settings instantly without restart test
  tape: false,
  oppositeshift: false, // ignore B, Y, ^
  underline: false, // underline active word
  endwithspace: false, // test ends only after typing a space after last word
  inputarea: "hidden", // hidden | visible
  scroll: "abrupt", // abrupt | smooth
  cpm: false, // use cpm instead of wpm
  usefloats: false, // display floating point number
  caret: {
    off: false,
    type: "line", // off | line | underline | box | block
    opacity: 1, // [0, 1] -> alpha's value in rgba
  },
  pacecaret: {
    off: true,
    type: "line", // off | line | underline | box | block
    opacity: 1, // [0, 1] -> alpha's value in rgba
  },
  fliphighlightcolor: false, // by default, future text is brighter than the already typed text
  highlight: {
    off: false,
    mode: {
      letter: true,
      word: false,
    },
  },
  backspace: {
    off: false,
    modifier: {
       alt: true,
       meta: false,
       ctrl: false,
    },
  },
  confidence: {
    low: true, // can use backspace key to delete previous words/letters
    high: false, // can not use backspace key to go back to previous word to correct mistakes
    max: false, // can not use backspace key at all to back
  },
  difficulty: {
    off: true, // its the normal typing experience (enabled by default)
    expert: false, // fails the test if user submit (press space) an incorrect word
    master: false, // fails the test if user press a single incorrect key (need to type with 100% accuracy)
  },
  error: {
    off: false, // if true, then no errors or incorrect words are highlighted (blind mode)
    insert: true, // insert incorrect letter before to be typed letter
    replace: false, // replace to be typed letter with incorrectly typed letter and move caret forward
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    stop: {
      off: true,
      word: false,
      letter: false,
    },
  },
  text: {
    primarytextcolor: "",
    secondarytextcolor: "",
    textsize: 1.2,
    textweight: 445,
    whitespace: {
      off: false, // if enabled, no space will be there between two word
      type: "space", // bullet | space | bar
      code: 160, // 11825 | 160 | 9251
      character: "&nbsp;", // '⸱', '&nbsp', '␣'
    },
    word: {
      type: "dictionary", // dictionary | root word | lorem epsum | quote | story
      length: "random", // short(<5) | medium(>=5, <=9), | long(>=11, <= 13) | very long(>=13) | random
      count: 25, // 25 | 50 | 100 | custom | infinite
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
  keyboard: {
    off: false,
    reaction: "react", // off | static | react | next
    layout: "qwerty", // qwerty | dvorak | colemak | workman
    emulate: false,
    visibile: {
      alphanumeric: true,
      function: true,
      controlpad: true,
      arrowpad: true,
      numpad: true,
    },
  },
  warning: {
    focus: true,
    capslock: false,
    numlock: false,
    scrolllock: false,
  },
  live: {
    interval: {
      every1keystroke: true,
      every1word: false,
      every1second: false,
    },
    speed: false,    // show live speed in wpm/cpm
    accuracy: false, // show live accuracy
    burst: false,    // show live burst, speed of last word typed
    timer: false,    // show live timer countdown
  },
  practice: {
    off: true,            // turn off practice mode
    guidedlession: false, // guided lessons
    providedtext: false,  // custom text (alphanumeric, specials ascii symbols)
    numpad: false,        // only numpad digits and symbols
    numrow: false,        // only numrow digits [0-9]
    alphanumeric: false,  // ascii characters [a-z, A-Z] and digits [0-9]
    bracket: false,       // {[(<>)]}
    arrowkey: false,      // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    special: false,       // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    functionkey: false,   // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  },
};