export const config = {
  caret: "line", // off | underscore | line | box | block
  oppositeshift: false, // use opposite shift keys for shifting, ignore B, Y, ^
  quickend: true, // if disabled then confirm end of test with a space
  blind: false, // no errors are highlighted
  strictspace: true, // determines whether to move caret to next word on error.skip and error.replace
  error: {
    off: false, // if errors are disabled caret stops on error
    forgive: true, // insert errors, but forgive them (delete) as soon as user types correct letter
    insert: true, // insert incorrect letter before to be typed letter
    skip: false, // marks current letter as error and moves caret on to the next letter (strictspace is turned off)
    replace: false, // replace to be typed letter with incorrectly typed letter & move caret forward
    stop: {
      off: true,
      letter: false, // stop before letter if wrongly typed
      word: false, // don't move to the next word until all mistakes are corrected
    },
  },
  delete: true, // backspace key
  delcorrect: true, // deletion of correct words
  modifier: {
    alt: true, // backspace + alt
    ctrl: true, // backspace + ctrl
    meta: false, // backspace + cmd/win
  },
  confidence: {
    low: true, // use backspace key to delete previous words/letter
    high: false, // only current word can be deleted using backspace, cannot delete previous word (regardlesss of whether it is correct/incorrect)
    peak: false, // cannot use backspace key at all (no deletion)
  },
  difficulty: {
    ease: true, // classic typing experience, mistakes can be corrected or left behind
    expert: false, // fails the test if user submit an incorrect word, current word can be edited to correct mistakes
    master: false, // fails the test if user press a single incorrect key
  },
  tape: {
    off: true,
    mode: {
      letter: false,
      word: false,
    }
  },
  text: {
    underline: true, // underline the current word
    whitespace: "space", // off | space | dot | bar
    highlight: { // by default, future text is brighter than the already typed text
      off: false,
      mode: {
        letter: true,
        word: false,
      },
      flip: false, // flip primary & secondary text color highlighting
    },
    input: {
      hidden: true, // hide input box below text
      visible: false, // show input box below text
    },
    word: {
      count: 10, // 0 | 10 | 25 | 50 | 100
      type: "dictionary", // dictionary | gibberish | quote | story | algorithm
      length: "off", // off | short(<6) | medium(>=6, <11) | long(>=11, inf)
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // .?",-';:()[]{}/...
    },
    color: {
      primary: "#061f2c", // future text, text which needs to be typed (default: more bright)
      secondary: "#9a9a9a", // past text, text which has been typed (default: less bright)
      caret: "#000",
    },
    font: {
      size: 1.2, // size of letter
      weight: 445, // thickness of letter
      family: "Roboto Mono", // roboto mono | fira code | syne mono | source code pro
    },
  },
  keyboard: {
    off: true,
    language: "english", // english | hindi | bengali | russian
    layout: {
      map: "qwerty", // qwerty | dvorak | colemak | workman
      emulate: false,
    },
    reaction: {
      react: false,
      static: false,
      next: false,
    },
  },
  arrowkeys: false, // move caret in text (all direction) using arrow keys (mythical)
  time: 0, // timer time in seconds
}