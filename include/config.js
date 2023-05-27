export default {
  deviceinformation: "device | os | browser",
  dynamicsettingchange: true, // apply settings instantly without restart test
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
  },
  inputarea: {
    hidden: true,
    visible: false,
  },
  scroll: "abrupt", // abrupt | smooth
  tape: false, // text in one line, text scrolls horizontally from ltr/rtl depending on language
  oppositeshift: false, // ignore B, Y, ^
  underline: true, // underline word being typed
  endwithspace: false, // test ends only after typing a space after typing last word
  blind: false, // no errors or incorrect words are highlighted
  strictspace: true, // hitting space doesn't move caret to next word instead inserts it
  cpm: false, // use cpm instead of wpm
  usefloats: false, // display floating point number
  caret: {
    off: false,
    type: "line", // off | line | underline | box | block
    opacity: 1, // [0, 1] -> alpha's value in rgba
    color: "",
  },
  pacecaret: {
    off: true,
    type: "line", // off | line | underline | box | block
    opacity: 1, // [0, 1] -> alpha's value in rgba
    color: "",
    against: {
      off: true,
      last: false, // previous speed
      average: false, // average of last 10 wpm
      custom: {
        off: true,
        speed: 0,
      },
    },
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
    off: false, // if true, then no errors or incorrect words are highlighted
    insert: true, // insert incorrect letter before to be typed letter
    replace: false, // replace to be typed letter with incorrectly typed letter and move caret forward
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    stop: {
      off: true,
      word: false,
      letter: false,
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
  theme: "white", // github(white) | molokai+gruvbox(gray) | hammerhead+cobalt(blue) | black
  text: {
    length: 0, // number of characters in text
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
        space: true, // 160, '&nbsp'
        bullet: false, // 0, '•'   (::after is used to draw bullet character)
        bar: false, // 9251, '␣'
      },
      code: 160, // 160 | 9251
      character: "&nbsp;", // '&nbsp', '␣'
    },
    word: {
      type: "dictionary", // dictionary | root word | lorem epsum | quote | story
      length: "random", // short(<5) | medium(>=5, <=9), | long(>=11, <= 13) | very long(>=13) | random
      count: 25, // 30 | custom input box | infinite
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

// hitting space before typing the last letter of the word moves caret to next word