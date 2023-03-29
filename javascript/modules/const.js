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

/*
ios
  Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15
  (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1

android
  Mozilla/5.0 (Linux; Android 11; moto e40) AppleWebKit/537.36
  (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36

arm mac (chrome browser)
  data not available

intel mac (chrome browser)
  Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36
  (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
intel mac (safari browser)
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15
  (KHTML, like Gecko) Version/16.3 Safari/605.1.15"

windows (edge browser)
  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
  (KHTML, like Geco) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54
windows (chrome browser)
  Mozilla/5.0 (Windows NT 10-0; Win64; X64) AppleWebKit/537,36
  (KHTML, like ecko) Chrome/111.0.0.0 Safari/537.36
*/