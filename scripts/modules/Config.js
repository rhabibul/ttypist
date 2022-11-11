// Empty string means none/false/off
const Config = {
  theme: {
    name: "molokai",
    dark: true,
    light: false,
  },

  whitespace: "" || "⸱" || "␣",

  practiceNumpad: false,
  practiceNumrow: false,

  liveStats: false,
  guidedLesson: false,

  time: 60,
  words: 25,
  includeNumbers: false,
  includePunctuations: false,

  mode: "time" || "words" || "custom",

  highlightMode: "letter" || "word",
  flipHighlightModeColors: false,

  // Normal is the classic type test experience.
  // Expert fails the test if you submit (press space) an incorrect word.
  // Master fails if you press a single incorrect key.
  difficulty: "normal" || "expert" || "master",

  forgiveErrors: false,
  confidence: "low" || "high", // backspace | alt/ctrl + backspace | meta + backspace

  keymap: "on" || "off",

	caret_type: "solid",
  caret_width: "thin", // ["thin", "thick"]
  caret_style: "line", // ["none", "line", "underline", "box", "block"],

  fontSize: "1.5rem",
  fontWeight: "thin" || "bold",
  fontFamily: "Roboto Mono, sans-serif",
};
