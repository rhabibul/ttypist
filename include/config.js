export default {
  dynamicsettingchange: true, // apply settings instantly without restarting test
  user: {
    isUsing: {
      device: "",
      os: "",
      browser: "",
    },
    istyping: false,
    hastypedallwords: false,
  },
  caret: {
    off: false,
    style: "line", // off | line | underline | box | block
    opacity: 1, // alpha[0,1]
    color: "",
  },
  pace_caret: {
    off: true,
    style: "line", // off | line | underline | box | block
    opacity: 0.5, // alpha[0,1]
    color: "",
    threshold: {
      last: false, // previous speed
      personalbest: false, // personal best speed
      average: false, // average of last 10 speeds
      custom: {
        off: true,
        speed: 0, // provide custom speed (in wpm) to compete against
      },
    },
  },
  cpm: false, // use cpm instead of wpm
  usefloats: false, // display floating point number
  input: {
    hidden: true, // hide input box during the test
    visible: false, // unhide input box during the test
  },
  tape: false, // text in one line, text scrolls horizontally either from ltr or rtl direction
  oppositeshift: false, // use opposite shift keys for shifting, ignore B, Y, ^
  underline: true, // underline the current word being typed
  backspace: {
    off: false,
    modifier: {
       alt: true, // backspace + alt
       meta: false, // backspace + cmd/win
       ctrl: false, // backspace + ctrl
    },
  },
  confidence: {
    low: true, // can use backspace key to delete previous words/letters
    high: false, // can not use backspace key to go back to previous word to correct mistakes
    peak: false, // backspace is turned off (no deletion allowed)
  },
  difficulty: {
    beginner: true, // classic typing experience, mistakes can be corrected or left behind
    intermediate: false, // fails the test if user submit an incorrect word, current word can be edited
    advanced: false, // fails the test if user press a single incorrect key
  },
  strictspace: true, // default: hitting space will not move caret to next word instead it will be inserted
  testendswithspace: false, // to end test user needs to type space after last word
  error: {
    off: false, // no errors or incorrect words are highlighted (blind mode)
    replace: false, // replace to be typed letter with incorrectly typed letter & move caret forward
    insert: true, // insert incorrect letter before to be typed letter
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    stop: {
      letter: false,
      word: false,
    },
  },
  theme: "light", // github: light | dark | molokai+gruvbox | hammerhead+cobalt
  scroll: "abrupt", // abrupt | smooth
  highlight: {
    off: false,
    mode: {
      letter: true,
      word: false,
    },
    flipcolor: false, // default: future text is brighter than the already typed text
  },
  text: {
    length: 0, // number of characters in the text
    color: {
      primary: "#1d2021", // future text, text which needs to be typed
      secondary: "#7b7b7b", // past text, text which has been typed
    },
    font: {
      size: 1.2, // size of each letter
      weight: 445, // thickness of each letter
      family: "Roboto Mono",
    },
    whitespace: {
      off: false, // nospace
      type: {
        space: false, // 160, '&nbsp'
        bullet: true, // 0, '•'   (::after is used to draw bullet character)
        bar: false, // 9251, '␣'
      },
      code: 160, // 160 | 9251
      character: "&nbsp;", // '&nbsp', '␣'
    },
    word: {
      type: "dictionary", // dictionary | root words | lorem epsum | quotes | stories
      length: "random", // short(<5) | medium(>=5, <=9), | long(>=11, <= 13) | very long(>=13) | random
      count: 25, // 25 | infinite | input
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // .?",-';:()[]{}/...
    },
  },
  language: "english", // english | hindi | bengali | arabic | russian | +indian-languages
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
  minimum: {
    speed: {
      off: true,
      threshold: 0,
    },
    accuracy: {
      off: true,
      threshold: 0,
    },
    burst: {
      off: true,
      threshold: 0,
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
      word: false, // after every word
      keystroke: true, // on every keystroke
      second: false, // after every one second
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