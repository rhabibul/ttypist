export const css = getComputedStyle(document.querySelector(":root"));

export const notprintable = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp', 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

export const stopper = [ // _ and 0..9 are not considered as stopppers, they're part of text
  '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+',
  '[', ']', '{', '}', '|', ';', ':', '"', "'", ',', '.', '<', '>', '/', '?', '\\'
];

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