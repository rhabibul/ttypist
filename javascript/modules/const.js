const notprintable = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const notalphabet = [
  '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
  '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '<', '>', '/', '?', '\\'
];

const char = {
  space: ' ',
}

// store the code values instead of unicode characters here and config object
const whitespace = {
  dot: '⸱', // 11825
  bar: '␣', // 9251 (open box)
  space: '&nbsp;', // 160 (non-break space) | (ascii space 32)
  thinspace: ' ', // 8201 (thin space)
  ideographicspace: '　', // 12288 (ideographic space)
};

export {
  whitespace,
  notprintable,
  notalphabet,
  char,
};