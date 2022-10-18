let wordsInput = document.querySelector("#wordsInput");

const words = document.getElementsByTagName("word");

let active_word = 0;
let active_letter = 0;

let letter = words[active_word].children;

wordsInput.addEventListener("keydown", handle_keypress);

function handle_keypress(keyevent) {
  const keypressed = keyevent.key;

  if (keypressed === " ") {
    if (active_word + 1 == words.length) {
      words[active_word].classList.remove("active");

      letter[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handle_keypress, false);
      // wordsInput.disabled = true;
      // wordsInput.remove();
      return;
    }

    words[active_word].classList.remove("active");

    ++active_word;

    words[active_word].classList.add("active");

    letter[active_letter].classList.remove("caret");

    active_letter = 0;

    letter = words[active_word].children;

    letter[active_letter].classList.add("caret");
  } else if (keypressed === letter[active_letter].textContent) {
    words[active_word].classList.remove("incorrect");

    letter[active_letter].classList.remove("caret"); // remove caret from correctly typed letter

    letter[++active_letter].classList.add("caret"); // move caret to next letter in the word
  } else {
    words[active_word].classList.add("incorrect");
  }
}

// next feature
// add random english word generator
