const SPACE = " ";
const wordsInput = document.querySelector("#wordsInput");
const words = document.getElementsByTagName("word");

let active_word = 0;
let active_letter = 0;

let letters = words[active_word].children;

wordsInput.addEventListener("keydown", handle_keypress);

function handle_keypress(keyevent) {
  const keypressed = keyevent.key;

  if (keypressed === SPACE) {
    // move to next word
    if (active_word + 1 == words.length) {
      words[active_word].classList.remove("active");

      letters[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handle_keypress, false);
      return;
    }

    words[active_word].classList.remove("active");

    ++active_word;

    words[active_word].classList.add("active");

    letters[active_letter].classList.remove("caret");

    active_letter = 0;

    letters = words[active_word].children;

    // move caret to next word's first letter
    letters[active_letter].classList.add("caret");
    //
  } else if (keypressed === letters[active_letter].textContent) {
    words[active_word].classList.remove("incorrect");

    letters[active_letter].classList.remove("caret");

    letters[++active_letter].classList.add("caret");
  } else if (keyevent.altKey && keypressed == "Backspace") {
    letters[active_letter].classList.remove("caret");

    active_letter = 0;

    letters[active_letter].classList.add("caret");
  } else if (keyevent.metaKey && keypressed == "Backspace") {
    letters[active_letter].classList.remove("caret");

    active_letter = 0;

    letters[active_letter].classList.add("caret");
  } else if (keypressed == "Backspace") {
    letters[active_letter].classList.remove("caret");

    if (active_letter > 0) {
      active_letter--;
    }

    letters[active_letter].classList.add("caret");
  } else {
    words[active_word].classList.add("incorrect");
  }
}

// next feature
// add random english word generator
