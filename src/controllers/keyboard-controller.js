class Render {
  constructor() {}
}

// https://www.w3.org/TR/uievents-code/#table-key-code-alphanumeric-writing-system
const keyboardevent = new Map([
  // Alphanumeric
  [`Digit1`, [`1`, `!`]],
  [`Digit2`, [`2`, `@`]],
  [`Digit3`, [`3`, `#`]],
  [`Digit4`, [`4`, `$`]],
  [`Digit5`, [`5`, `%`]],
  [`Digit6`, [`6`, `^`]],
  [`Digit7`, [`7`, `&`]],
  [`Digit8`, [`8`, `*`]],
  [`Digit9`, [`9`, `(`]],
  [`Digit0`, [`0`, `)`]],
  [`Backquote`, ["`", `~`]],
  [`Backslash`, [`\\`, `|`]],
  [`Backspace`, [`Backspace`, `delete`]],
  [`BracketLeft`, [`[`, `{`]],
  [`BracketRight`, [`]`, `}`]],
  [`Minus`, [`-`, `_`]],
  [`Equal`, [`=`, `+`]],
  [`Comma`, [`,`, `<`]],
  [`Period`, [`.`, `>`]],
  [`Quote`, [`'`, `"`]],
  [`Semicolon`, [`;`, `:`]],
  [`Slash`, [`/`, `?`]],
  [`KeyA`, `a`],
  [`KeyB`, `b`],
  [`KeyC`, `c`],
  [`KeyD`, `d`],
  [`KeyE`, `e`],
  [`KeyF`, `f`],
  [`KeyG`, `g`],
  [`KeyH`, `h`],
  [`KeyI`, `i`],
  [`KeyJ`, `j`],
  [`KeyK`, `k`],
  [`KeyL`, `l`],
  [`KeyM`, `m`],
  [`KeyN`, `n`],
  [`KeyO`, `o`],
  [`KeyP`, `p`],
  [`KeyQ`, `q`],
  [`KeyR`, `r`],
  [`KeyS`, `s`],
  [`KeyT`, `t`],
  [`KeyU`, `u`],
  [`KeyV`, `v`],
  [`KeyW`, `w`],
  [`KeyX`, `x`],
  [`KeyY`, `y`],
  [`KeyZ`, `z`],
  [`Tab`, `Tab`],
  [`Space`, ` `],
  [`Enter`, `Enter`],
  [`MetaLeft`, `Meta`],
  [`MetaRight`, `Meta`],
  [`ShiftLeft`, `Shift`],
  [`ShiftRight`, `Shift`],
  [`CapsLock`, `CapsLock`],
  [`ControlLeft`, `Control`],
  [`ControlRight`, `Control`],
  [`AltLeft`, `Alt`],
  [`AltRight`, [`Alt`, `AltGr`]],

  // control pad
  [`Delete`, ``],
  [`End`, ``],
  [`Help`, ``],
  [`Home`, ``],
  [`Insert`, ``],
  [`PageDown`, ``],
  [`PageUp`, ``],

  // arrow pad
  [`ArrowDown`, `ArrowDown`],
  [`ArrowLeft`, `ArrowLeft`],
  [`ArrowRight`, `ArrowRight`],
  [`ArrowUp`, `ArrowUp`],
  [`Escape`, `Escape`],
  
  // keypad/numpad:
  // These gives alternate values if Numpad is locked for event.key & event.code
  [`NumLock`, ``], // On Mac, NumLock is NumpadClear
  [`Numpad0`, [0, `Ins`]],
  [`Numpad1`, [1, `End`]],
  [`Numpad2`, [2, `ArrowDown`]],
  [`Numpad3`, [3, `PgDn`]],
  [`Numpad4`, [4, `ArrowLeft`]],
  [`Numpad5`, [5, `Clear`]], // 'Clear' in windows when Numpad is locked
  [`Numpad6`, [6, `ArrowRight`]],
  [`Numpad7`, [7, `Home`]],
  [`Numpad8`, [8, `ArrowUp`]],
  [`Numpad9`, [9, `PgUp`]],
  [`NumpadDecimal`, [`.`, `Delete`]],

  // These does gives same value for event.key & event.code where Numpad
  // is locked or not.
  [`NumpadAdd`, `+`],
  [`NumpadSubtract`, `-`],
  [`NumpadDivide`, `/`],
  [`NumpadMultiply`, `*`],
  [`NumpadClear`, ``],
  [`NumpadEqual`, `=`],
  [`NumpadEnter`, `Enter`],

  [`F1`, `F1`],
  [`F2`, `F2`],
  [`F3`, `F3`],
  [`F4`, `F4`],
  [`F5`, `F5`],
  [`F6`, `F6`],
  [`F7`, `F7`],
  [`F8`, `F8`],
  [`F9`, `F9`],
  [`F10`, `F10`],
  [`F11`, `F11`],
  [`F12`, `F12`],
]);

const standard_numpad = [
  ["NumLock", "NumpadDivide", "NumpadMultiply",  "NumpadSubtract"],
  ["Numpad7", "Numpad8",      "Numpad9",         "NumpadAdd"],
  ["Numpad4", "Numpad5",      "Numpad6",         "NumpadAdd"],
  ["Numpad1", "Numpad2",      "Numpad3",         "NumpadEnter"],
  ["Numpad0", "Numpad0",      "NumpadDecimal",   "NumpadEnter"],
];

const apple_numpad = [
  ["Clear",   "NumpadEqual", "NumpadDivide",  "NumpadMultiply"],
  ["Numpad7", "Numpad8",     "Numpad9",       "NumpadSubtract"],
  ["Numpad4", "Numpad5",     "Numpad6",       "NumpadAdd"],
  ["Numpad1", "Numpad2",     "Numpad3",       "NumpadEnter"],
  ["Numpad0", "Numpad0",     "NumpadDecimal", "NumpadEnter"],
];

const layouts = {
  qwerty: {
    "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
    "row2": ["qQ", "wW", "eE", "rR", "tT", "yY", "uU", "iI", "oO", "pP", "[{", "]}", "\\|"],
    "row3": ["aA", "sS", "dD", "fF", "gG", "hH", "jJ", "kK", "lL", ";:", "'\""],
    "row4": ["zZ", "xX", "cC", "vV", "bB", "nN", "mM", ",<", ".>", "/?"],
    "row5": [" "]
  },

  dvorak: {
    "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "[{", "]}"],
    "row2": ["'\"", ",<", ".>", "pP", "yY", "fF", "gG", "cC", "rR", "lL", "/?", "=+", "\\|"],
    "row3": ["aA", "oO", "eE", "uU", "iI", "dD", "hH", "tT", "nN", "sS", "-_"],
    "row4": [";:", "qQ", "jJ", "kK", "xX", "bB", "mM", "wW", "vV", "zZ"],
    "row5": [" "]
  },
    
  colemak: {
    "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
    "row2": ["qQ", "wW", "fF", "pP", "gG", "jJ", "lL", "uU", "yY", ";:", "[{", "]}", "\\|"],
    "row3": ["aA", "rR", "sS", "tT", "dD", "hH", "nN", "eE", "iI", "oO", "'\""],
    "row4": ["zZ", "xX", "cC", "vV", "bB", "kK", "mM", ",<", ".>", "/?"],
    "row5": [" "]
  },
    
  workman: {
    "row1": ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"],
    "row2": ["qQ", "dD", "rR", "wW", "bB", "jJ", "fF", "uU", "pP", ";:", "[{", "]}", "\\|"],
    "row3": ["aA", "sS", "hH", "tT", "gG", "yY", "nN", "eE", "oO", "iI", "'\""],
    "row4": ["zZ", "xX", "mM", "cC", "vV", "kK", "lL", ",<", ".>", "/?"],
    "row5": [" "]
  },
}