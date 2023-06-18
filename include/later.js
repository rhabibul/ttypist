// learn to touch type config
export default {
  guidedlessions: false, // learn touch typing using typing lessons
  customtext: false, // type custom ascii text
  practice: {
    arrows: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    brackets: false, // {[(<>)]}
    numpad: false, // number pad's digits and symbols only
    numrow: false, // number row's digits [0-9] only
    specials: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    alphanumeric: false, // ascii characters [a-z, A-Z] and digits [0-9]
    function: false,      // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  },

  // use opposite thumb for hitting space key [emulate opposite thumb by splitting space into two halves]
  oppositethumbforspace: false,
  
  warning: {
    focus: true, // user is out of focus (not typing anymore)
    capslock: false, // capslock key is left turned on
    numlock: false, // numlock key is left turned on
    scrolllock: false, // scolllock key is left turned on
  },
  keyboard: {
    off: false, // toggle UI keyboard
    reaction: {
      static: false,
      react: false,
      next: false,
    },
    language: "english", // english | hindi | bengali | arabic | russian | +languages(indian)
    layout: {
      map: "qwerty", // qwerty | dvorak | colemak | workman
      emulate: false,
    },
    section: {
      RowK: true, // Esc F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12         •   PrintScreen ScrollLock PauseBreak
      RowE: true, // ~` !1 @2 #3 $4 %5 ^6 &7 *8 (9 )0 _- += Backspace   •   Insert      Home       PageUp      •   NL /  *  -
      RowD: true, // Tab Q W E R T Y U I O P {[ }] |\                   •   Delete      End        PageDown    •   7  8  9  +
      RowC: true, // CapsLock A S D F G H J K L :; "' Enter             •                                      •   4  5  6  +
      RowB: true, // Shift Z X C V B N M <, >. ?/ Shift                 •               ArrowUp                •   1  2  3  Enter
      RowA: true, // Ctrl Alt Meta SPACE Alt-Gr Meta Alt Ctrl Fn        •   ArrowLeft   ArrowDown  ArrowUP     •   0  0  .  Enter
      arrowpad: true,
      controlpad: true,
      numpad: true,
      function: true,
      alphanumeric: {
        numrow: true,
        alphabets: true,
      }
    },
  },
  theme: "light", // light | dimmed | dark
}

export const govt_exam = {
	// big input boxes, one for text to type and the other [<textarea></textarea>] for typing
}