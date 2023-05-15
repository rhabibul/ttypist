export default {
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
    deviceinformation: "",
  },
  theme: "light", // light/dark | soft/medium/hard
  language: "english", // english | hindi | bengali | arabic | russian
  dynamicsettingchange: true, // apply settings instantly without restart test
  tape: false,
  oppositeshift: false, // ignore B, Y, ^
  underline: false, // underline active word
  endwithspace: false, // test ends only after typing a space after last word
  inputvisibility: "hidden", // hidden | visible
  scroll: "abrupt", // abrupt | smooth
  cpm: false, // use cpm instead of wpm
  usefloats: false, // display floating point number
  caret: {
    off: false,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> alpha's value in rgba
  },
  pacecaret: {
    off: true,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> alpha's value in rgba
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
      ctrl: true,
      meta: false,
    },
  },
  confidence: 1, // low(1) | high(2) | max(3)
  difficulty: 1, // beginner(1) | expert(2) | master(3)
  error: {
    off: false, // if true, then no errors or incorrect words are highlighted (blind mode)
    insert: true, // 
    replace: false,
    forgive: false,
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
    speed: false,
    accuracy: false,
    burst: false, // speed burst of last word typed (wpm/cpm)
    timer: true,
  },
  practice: {
    off: true,
    guidedlession: false,
    providedtext: false,
    numpad: false, // numpad digits & symbols 
    numrow: false, // numrow digits [0-9]
    alphanumeric: false, // ascii alphabets [a-z, A-Z] and digits [0-9]
    bracket: false, // {[(<>)]}
    arrowkey: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    special: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    functionkey: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  },
};