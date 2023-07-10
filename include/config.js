export const localconfig = {
  // local temporary stats & configs 
}

export default {
  website: {
    theme: "light", // light | midnight | dark
    setting: {
      dynamic: true, // live setting changes without restarting test
      view: {
        condense: true,
        expand: false,
      },
    },
  },
  arrows: true, // implicitly enabled (mythical)
  strictspace: true, // determines whether to move caret to next word on error.skip and error.replace
  quickend: true, // end test as soon as last letter of last word is typed otherwise confirm with space
  oppositeshift: false, // use opposite shift keys for shifting, ignore B, Y, ^
  caret: {
    off: false, // none
    style: "line", // off | underscore | line | box | block
    opacity: 1,
    color: "black",
  },
  pacecaret: {
    off: true, // pacecaret.off === speed.off
    style: "off", // off | underscore | line | box | block
    color: "black",
    opacity: 0.5,
    speed: {
      last: false, // previous speed
      best: false, // personal best speed
      average: false, // average of last 10 speeds
      custom: {
        off: true,
        value: 0, // provide custom speed (in wpm) to compete against
      }
    },
  },
  tape: { // text in one line, text scrolls horizontally either from ltr or rtl direction
    off: true,
    mode: {
      letter: false,
      word: false,
    }
  },
  backspace: {
    off: false,
    modifier: {
       alt: true, // backspace + alt
       ctrl: true, // backspace + ctrl
       meta: false, // backspace + cmd/win
    },
    deleteOnCorrect: true, // whether to allow caret to go back to previous word which was typed correctly
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
  error: {
    off: false, // (blind mode) no errors or incorrect words are highlighted
    insert: true, // insert incorrect letter before to be typed letter
    skip: false, // marks current letter as error and moves caret on to the next letter (strictspace is turned off)
    replace: false, // replace to be typed letter with incorrectly typed letter & move caret forward
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    stop: {
      off: true,
      letter: false, // stop before letter if wrongly typed
      word: false, // don't move to the next word until all mistakes are corrected
    },
  },
  text: {
    input: {
      hidden: true,
      visible: false,
    },
    underline: true, // underline the current word
    whitespace: {
      off: false, // nospace
      type: {
        bullet: true, // 8226, '•' (::after is used to draw bullet character)
        bar: false, // 9251, '␣'
        space: false, // 160, '&nbsp'
      },
      code: 160, // 160 | 9251 | 8226
      character: "&nbsp;", // '&nbsp', '␣', '•'
    },
    highlight: { // by default, future text is brighter than the already typed text
      off: false,
      mode: {
        letter: true,
        word: false,
      },
      flip: false, // flip highlight's primary and secondary color
    },
    color: {
      primary: "#061f2c", // future text, text which needs to be typed (default: more bright)
      secondary: "#9a9a9a", // past text, text which has been typed (default: less bright)
    },
    font: {
      size: 1.2, // size of letter
      weight: 445, // thickness of letter
      family: "Roboto Mono", // roboto | fira | courier | ubuntu | syne | source
    },
    word: {
      count: 25, // -2(custom) | -1(off) | 0(infinite) | 10 | 25 | 50 | 100
      type: "dictionary", // dictionary | gibberish | quote | story | algorithm
      length: "mixed", // short(<5) | medium(>=5, <11), | long(>=11, inf) | mixed
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // .?",-';:()[]{}/...
    },
    capitalize: {
      off: true,
      randomized: false, // randomly capitalize the first letter of all words in the text
      firstletter: false, // capitalize only the first letter of first word in the text
      allfirstletters: false, // capitalize all the first letters of all words in the text
      jumbled: false, // randomly capitalize the letters of a word
    },
    scroll: {
      abrupt: true,
      smooth: false,
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
  stats: {
    timer: {
      off: false,
      time: -1, // -2(custom) | -1(off) | 0(infinite) | 15 | 30 | 60 | 120
      hidden: false,
    },
    live: {
      speed: false,    // live speed in wpm/cpm
      accuracy: false, // live accuracy
      burst: false,    // live burst, speed of last word typed
    },
    calcInterval: { // calculation interval for speed, accuracy, burst
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
  warnings: {
    capslock: false, // capslock key is left turned on
    numlock: false, // numlock key is left turned on
    scrolllock: false, // scolllock key is left turned on
    focusout: true, // warning out of focus while taking test (typing)
  },
  keyboard: {
    off: false,
    reaction: {
      react: false,
      static: false,
      next: false,
    },
    language: "English",
    layout: {
      map: "qwerty", // qwerty | dvorak | colemak | workman
      emulate: false,
    },
    section: {
      RowK: true, // Esc F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12         •   PrintScreen ScrollLock PauseBreak
      RowE: true, // ~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- += Backspace   •   Insert      Home       PageUp      •   NL /  *  -
      RowD: true, // Tab Q W E R T Y U I O P {[ }] |\                   •   Delete      End        PageDown    •   7  8  9  +
      RowC: true, // CapsLock A S D F G H J K L :; "' Enter             •                                      •   4  5  6  +
      RowB: true, // Shift Z X C V B N M <, >. ?/ Shift                 •               ArrowUp                •   1  2  3  Enter
      RowA: true, // Ctrl Alt Meta SPACE Alt-Gr Meta Alt Ctrl Fn        •   ArrowLeft   ArrowDown  ArrowUP     •   0  0  .  Enter
      arrowpad: true,
      controlpad: true,
      numpad: true,
      function: true,
    },
  },
  guidedlesson: false, // learn touchtyping through guided lessons
  customtext: false, // ascii text
  oppositethumbforspace: false, // emulates opposite thumb by splitting space into two halvesk
  practice: {
    arrows: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    brackets: false, // {[(<>)]}
    numpad: false, // number pad's digits [0-9] and symbols
    numrow: false, // number row's digits [0-9]
    ascii: {
      symbol: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
      alphabets: false, // ascii characters [a-z, A-Z]
    },
  },
};