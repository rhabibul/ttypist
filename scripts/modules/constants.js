const ascii_equivalent = {
  "“": '"', // &ldquo;	&#8220;
  "”": '"', // &rdquo;	&#8221;
  "’": "'", // &lsquo;	&#8216;
  "‘": "'", // &rsquo;	&#8217;
  ",": ",", // &sbquo;	&#8218;
  "—": "-", // &mdash;  &#8212;
  "…": "...", // &hellip; &#8230;
  "«": "<<",
  "»": ">>",
  "–": "-",
  " ": " ",
  " ": " ",
  " ": " ",
};

const invisibles = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const carettypes = {
  off: "offtype",
  line: "linetype",
  underline: "underlinetype",
  box: "boxtype",
  block: "blocktype",
};

const whitespace = {
  dot: "⸱", // 11825
  space: "&nbsp;", // 160
};


const special = [

  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}",
  "[", "]", "'", '"', "/", "\\", "|", "?", ";", ":", ">", "<",
]

export { whitespace, carettypes, invisibles, ascii_equivalent };