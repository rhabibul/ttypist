export const css = document.querySelector(":root");

export const not_alphanumeric = [
  'Meta', 'MetaLeft', 'MetaRight', 'Alt', 'AltLeft', 'AltRight',
  'Shift', 'ShiftLeft', 'ShiftRight', 'Control', 'ControlLeft', 'ControlRight',
  'Backspace', 'Delete', 'CapsLock', 'Enter', 'NumpadEnter', 'Tab',
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

export function isPrintableCharacter(char) {
  if ( not_alphanumeric.includes(char) ) return false;
  return true;
}

export const stop_at = [ // _ and 0..9 are not considered as stopppers, they're part of text
  '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+',
  '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '<', '>', '/', '?', '\\'
];

export const whitespace = {
  "tab": "	", // 9 (tab)
  "space": " ", // 32 (ascii space)
  "nobreak": "&nbsp;", // 160 (non-breaking space)
  "ideographic": "　", // 12288 (ideographic space)
  "mathematical": " ", // 8287 (medium mathematical space)
  "narrow": " ", // 8239 (narrow no-break space) [width is usually 1/3 of normal space]
  "figure": " ", // 8199 (figure space)
  "punctuation": " ", // 8200 (punctuation space)
  "thin": " ", // 8201 (thin space)
  "hair": " " // 8202 (hair space)
}

const modifier = {
  "ctrlKey": false,
  "shiftKey": false,
  "altKey": false,
  "metaKey": false,
  "modifierAltGraph": false,
  "modifierCapsLock": false,
  "modifierFn": false,
  "modifierFnLock": false,
  "modifierHyper": false,
  "modifierNumLock": false,
  "modifierScrollLock": false,
  "modifierSuper": false,
  "modifierSymbol": false,
  "modifierSymbolLock": false,
  // KeyboardEvent.getModifierState(keyArg: string) -> boolean
}