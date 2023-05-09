export default {
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
    deviceinformation: "",
  },
  caret: {
    off: false,
    type: "line", // line | underline | box | block
  },
  pacecaret: {
    off: true,
    type: "line", // line | underline | box | block
  },
  live: {
    speed: false,
    accuracy: false,
    burst: false, // wpm of last word typed (speed burst)
    timer: false,
  },
  warning: {
    off: false,
    capslock: true,
    outoffocus: true,
    numlock: true,
    scrolllock: true,
  },
  inputbox_visibility: "hide", // visible | hide
  oppositeshift: false, // ignore B, Y, ^
  endtestwithspace: false,
  underline: false, // underline active word
  fliptextcolor: false, // brightness of typed & future texts
  highlight: {
    off: false,
    mode: {
      word: false,
      letter: true,
    },
  },
  difficulty: "easy", // easy | intermediate | advanced
  confidence: {
    off: true,
    mode: {
      pro: false, // can fix current word errors, but cannot previous words
      max: false, // if true then don't allow backspace at all to fix errors (backspace.off = true)
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
    off: false,
    insert: true,
    replace: false,
    forgive: true,
    stop: {
      word: false,
      letter: false,
    },
  },
  phrase: {
    word: {
      type: "dictionary", // dictionary | rootwords | lorem epsum
      length: "medium", // small(<5) | medium(>=5, <8), | large(>=8, <13) | extra large(>=13)
      count: 25, // 25 | 50 | infinite | custom
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
  theme: "molokai",
  language: "english", // english | hindi | bengali | arabic | russian
  keyboard: {
    reaction: "off", // off | static | react | next
    layout: "qwerty", // qwerty | dvorak | workman | colemak
    emulate: false,
  },
  practice: {
    off: true,
    guided_lessions: false,
    providetext: false,

    numpad: false, // number pad digits and arithmetic operations with expression
    numrow: false, // number row digits
    alphanumeric: false, // ascii characters only
    
    brackets: false, // {[(<>)]}
    arrowkeys: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    specials: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  }
};