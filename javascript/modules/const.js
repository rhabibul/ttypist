const notprintable = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

// stop symbols (except '_')
const notalphabet = [
  '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
  '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '<', '>', '/', '?', '\\'
];

const whitespace = {
  dot: {
    code: 11825,
    character: '⸱',
  },
  bar: {
    code: 9251,
    character: '␣',
  },
  space: {
    code: 160,
    character: '&nbsp;',
  },
}

export {
  whitespace,
  notprintable,
  notalphabet,
};