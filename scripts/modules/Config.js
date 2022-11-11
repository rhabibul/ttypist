// Empty string means none/false/off
const Config = {
  liveStats: false,
  customText: false,
  guidedLessons: false,
  includeNumbers: false,
  includePunctuations: false,

  highlight_mode: "word", // ["letter", "word"]
  flip_highlightcolors: false,

  // Normal is the classic type test experience.
  // Expert fails the test if you submit (press space) an incorrect word.
  // Master fails if you press a single incorrect key.
  difficulty: "normal", // ["normal", "expert", "master"]

  forgive_errors: true, // Inserts wrongly typed letters
  deletion_allowed: true, // Enables backspace, (alt/ctrl + backspace) and (meta + backspace)

  keyboard: "on", // ["on", "off"]

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