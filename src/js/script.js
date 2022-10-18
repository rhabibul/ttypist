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

    letters[active_letter].classList.add("caret"); // move caret to next word
    //
  } else if (keypressed === letters[active_letter].textContent) {
    words[active_word].classList.remove("incorrect");

    letters[active_letter].classList.remove("caret"); // remove caret
    letters[++active_letter].classList.add("caret"); // move caret
  } else {
    words[active_word].classList.add("incorrect");
  }
}

// next feature
// add random english word generator
