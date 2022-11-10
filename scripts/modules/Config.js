const Config = {
  // Empty string means false | off | none

  theme: {
    name: "molokai",
    dark: true,
    light: false,
  },

  whitespace: "" || "⸱" || "␣",

  customText: false,
  guidedLesson: false,

  time: 60,
  words: 50,
  number: false,
  punctuation: false,
  mode: "time" || "words" || "custom",

  highlightMode: "letter" || "word",
  flipHighlightModeColors: false,

  difficulty: "normal" || "expert" || "master",
  quickEnd: false,
  forgiveErrors: true,
  confidence: "low" || "high", // backspace | alt/ctrl + backspace | meta + backspace
  stopOnError: "letter" || "word",

  keymap: "on" || "off",

  liveStats: false,

  caretColor: "black",
  caretWidth: "thin" || "thick",
  caretStyle: "" || "line" || "underline" || "box" || "block",

  fontSize: "1.5rem",
  fontWeight: "thin" || "bold",
  fontFamily: "Roboto Mono, sans-serif",
};
