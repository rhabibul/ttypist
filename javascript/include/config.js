export default {
  theme: "molokai",
  ttypist: {
    istyping: false,
    hastypedeveryword: false,
    deviceinformation: "",
  },
  dynamicsettingchange: true,
  caret: {
    off: false,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> rgba()
  },
  pacecaret: {
    off: true,
    type: "line", // off | line | underline | box | block
    transparency: 1, // [0, 1] -> rgba()

  },
  oppositeshift: false, // ignore B, Y, ^
  underline: false, // underline active word
  endwithspace: false,
  inputvisibility: "hidden", // hidden | visible
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
    on: false, // cannot fix previous words (can fix current word errors though)
    max: false, // cannot backspace at all
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
  errorcorrection: {
    off: false,
    current: true, // correction of current word
    previous: true, // correction of previous word
  },
  text: {
    primarytextcolor: "",
    secondarytextcolor: "",
    textsize: 1.2,
    textweight: 445,
    word: {
      type: "dictionary", // dictionary | rootwords | lorem epsum | quote | story
      length: "medium", // small(<5) | medium(>=5, <8), | large(>=8, <13) | extra large(>=13)
      count: 25, // 25 | 50 | 100 | infinite | custom
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // include punctuation characters along with words
    },
  },
  capslock: true,
  outoffocus: true,
  numlock: true,
  scrolllock: true,
  language: "english", // english | hindi | bengali | arabic | russian
  keyboard: {
    reaction: "off", // off | static | react | next
    layout: "qwerty", // qwerty | dvorak | workman | colemak
    emulate: false,
  },
  showlive: {
    speed: false,
    accuracy: false,
    burst: false, // wpm of last word typed (speed burst)
    timer: false,
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
  },
  misc: {
    cpm: false, // use cpm instead of wpm
    usefloats: false,
  },
};

// user data
const user = {
  firstname: "",
  middlename: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  rank: "", // wpm percentile
  skill_level: "",
  experience_level: "",
  avg_speed: "",
  avg_accuracy: "",
  total_tests_started: "",
  total_tests_completed: "",
  hours_spend_typing: "",
  practice_calender: "",
  key_frequency_heatmap: "",
  country: "",
  best: "", // typing speed (wpm)
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    reddit: "",
    discord: "",
    twitch: "",
    youtube: "",
  },
}