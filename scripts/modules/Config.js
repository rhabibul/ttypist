// Empty string means none/false/off
const Config = {
  // live_stats: false,
  // custom_text: false,
  // guided_lesson: false,
  // include_numbers: false,
  // include_punctuations: false,
	// whitespace: "&nbsp;", // ["&nbsp;", "⸱"]
  // keyboard: "on", // ["on", "off"]

  highlight_mode: "word", // ["letter", "word"]
  flip_highlightcolors: false,

  // beginner is the classic type test experience.
  // intermediate fails the test if you submit (press space) an incorrect word.
  // advanced fails if you press a single incorrect key.
  difficulty: "beginner", // ["beginner", "intermediate", "advanced"]

  forgive_errors: true, // Inserts wrongly typed letters
  deletion_allowed: true, // Enables backspace, (alt/ctrl + backspace) and (meta + backspace)

  caret_width: "thin", // ["thin", "thick"]
  caret_style: "line", // ["none", "line", "underline", "box", "block"],

  fontsize: "1.4",
  fontweight: "300",
  fontfamily: "Roboto Mono",
};


const SelectKeys = {
  numpad: false,
  numrow: false,
  alphanumeric: false,
  brackets: false, // {[()]}
  specialsymbols: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
  functionkeys: false, // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12

  // ArrowUp, ArrowLeft, ArrowRight, ArrowDown,
  // KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
  arrowkeys: false,
};

export { Config, SelectKeys };