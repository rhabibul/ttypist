const invisible = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const caret = {
  off:       "offtype",
  line:      "linetype",
  underline: "underlinetype",
  box:       "boxtype",
  block:     "blocktype",
};

// whitespace unicode characters
// 				" "  	(U+0020 Space)
// 				" "  	(U+00a0 No-Break Space)
// 				" "  	(U+2009 Thin Space)
// 				"　"	(U+3000 Ideographic Space)
const whitespace = {
  dot: '⸱', // 11825
  bar: '␣', // U+2423 (open box unicode character)
  space: '&nbsp;', // 160
};

const specialsymbols = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}",
  "[", "]", "'", '"', "/", "\\", "|", "?", ";", ":", ">", "<",
]

export { whitespace, caret, invisible, specialsymbols };