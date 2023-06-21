export default {
  theme: "light", // light | dimmed | dark
  setting: {
    dynamic: true, // live setting changes without restarting test
    view: {
      condensed: true,
      expanded: false,
    },
  },
  timer: {
    off: false,
    seconds: 60, // 15 | 30 | 60 | 120 | custom
    hide: false,
  },
  tape: { // text in one line, text scrolls horizontally either from ltr or rtl direction
    off: true,
    letter: false,
    word: false,
  },
  arrows: true, // implicitly enabled (mythical)
  oppositeshift: false, // use opposite shift keys for shifting, ignore B, Y, ^
  backspace: {
    off: false,
    modifier: {
       alt: true, // backspace + alt
       meta: false, // backspace + cmd/win
       ctrl: false, // backspace + ctrl
    },
    notAllowedOnCorrect: false, // if previous word was correctly typed then don't allow backspace
  },
  confidence: {
    low: true, // use backspace key to delete previous words/letters
    high: false, // only current word can be edited with bs, cannot go to prev word whether it is correct or incorrect
    peak: false, // cannot use backspace key at all (no deletion)
  },
  difficulty: {
    ease: true, // classic typing experience, mistakes can be corrected or left behind
    expert: false, // fails the test if user submit an incorrect word, current word can be edited
    master: false, // fails the test if user press a single incorrect key
  },
  strictspace: true, // hitting space will not move caret to next word (it will be inserted)
  error: {
    off: false, // blind mode: no errors or incorrect words are highlighted
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    skip: true, // marks current letter as error and moves caret on to the next letter (strictspace is turned off)
    replace: false, // replace to be typed letter with incorrectly typed letter & move caret forward
    insert: true, // insert incorrect letter before to be typed letter
    stop: {
      letter: false, // stop before letter if wrongly typed
      word: false, // don't move to the next word until all mistakes are corrected
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
      option: {
        fixed: false, // fixed the speed set by user for all words (short, medium, long)
        flex: false, // reduce speed set by user for longer words
      },
    }
  },
  caret: {
    off: true, // none
    style: "line", // line | underline | box | block
    opacity: 1, // rgba - alpha[0,1]
    color: "black",
  },
  pacecaret: {
    off: true, // none
    style: "line", // line | underline | box | block
    opacity: 0.5, // rgba - alpha[0,1]
    color: "gray",
    threshold: {
      last: false, // previous speed
      best: false, // personal best speed
      average: false, // average of last 10 speeds
      custom: {
        off: true,
        speed: 0, // provide custom speed (in wpm) to compete against
      },
    },
  },
  text: {
    input: {
      hidden: true,
      visible: false,
    },
    underline: true, // underline the current word being typed
    color: {
      primary: "#061f2c", // future text, text which needs to be typed (more bright)
      secondary: "#9a9a9a", // past text, text which has been typed (less bright)
    },
    highlight: { // by default, future text is brighter than the already typed text
      off: false,
      mode: {
        letter: true,
        word: false,
      },
      flip: false, // flip highlight's primary and secondary color
    },
    font: {
      size: 1.2, // size of letter
      weight: 445, // thickness of letter
      family: "Roboto Mono", // roboto | fira | courier | ubuntu | syne | source
    },
    whitespace: {
      off: false, // nospace
      type: {
        space: false, // 160, '&nbsp'
        bullet: true, // 8226, '•' (::after is used to draw bullet character)
        bar: false, // 9251, '␣'
      },
      code: 160, // 160 | 9251 | 8226
      character: "&nbsp;", // '&nbsp', '␣', '•'
    },
    word: {
      count: 25, // off | 10 | 25 | 50 | 100 | input | 0(infinite)
      type: "dictionary", // dictionary | gibberish | quote | story | algorithm
      length: "mixed", // short(<5) | medium(>=5, <11), | long(>=11, inf) | mixed
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // .?",-';:()[]{}/...
    },
    capitalize: {
      random: false, // randomly capitalize the first letter of all words in the text
      firstletter: false, // capitalize only the first letter of first word in the text
      allfirstletters: false, // capitalize all the first letters of all words in the text
      jumbled: false, // randomly capitalize the letters of a word
    },
    scroll: {
      abrupt: true,
      smooth: false,
    },
  },
  statistics: {
    live: {
      speed: false,    // live speed in wpm/cpm
      accuracy: false, // live accuracy
      burst: false,    // live burst, speed of last word typed
    },
    calculationInterval: { // calculation interval for speed, accuracy, burst
      word: false, // calculate after every word
      keystroke: true, // calculate after each keystroke
      second: false, // calculate after every one second
    },
    unit: {
      cpm: false, // characters per minute
      wpm: true, // words per minute
    },
    usefloats: false, // display floating point number
  },
  keyWarnings: {
    capslock: false, // capslock key is left turned on
    numlock: false, // numlock key is left turned on
    scrolllock: false, // scolllock key is left turned on
    focus: true, // warning out of focus while taking test (typing)
  },
  keyboard: {
    off: false,
    reaction: {
      static: false,
      react: false,
      next: false,
    },
    language: "english",
    layout: {
      map: "qwerty", // qwerty | dvorak | colemak | workman
      emulate: false,
    },
  },
};