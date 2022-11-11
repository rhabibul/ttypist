// Empty string means none/false/off
const Config = {
  theme: {
    name: "molokai",
    dark: true,
    light: false,
  },

  whitespace: "&nbsp;", // ["&nbsp;", "⸱"]

  only_numpad: false,
  only_numrow: false,

  live_stats: false,
  guided_lesson: false,

  time: 60,
  words: 25,
  include_numbers: false,
  include_punctuations: false,

  mode: "time" || "words" || "custom",

  flip_colors: false,
  highlight_mode: "letter" || "word",

  // Normal is the classic type test experience.
  // Expert fails the test if you submit (press space) an incorrect word.
  // Master fails if you press a single incorrect key.
  difficulty: "normal" || "expert" || "master",

  backspacing: true, // Enables backspace, (alt/ctrl + backspace) and (meta + backspace)
  forgive_errors: false, // Inserts wrongly typed letters

  keyboard: "on", // ["on", "off"]

  caret_width: "thin", // ["thin", "thick"]
  caret_style: "line", // ["none", "line", "underline", "box", "block"],

  fontSize: "1.5rem",
  fontWeight: "thin" || "bold",
  fontFamily: "Roboto Mono, sans-serif",
};
