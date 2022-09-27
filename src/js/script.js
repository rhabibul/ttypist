let wordsInput = document.querySelector("#wordsInput");

const words = document.querySelectorAll(".word");

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
    letter[active_letter].classList.remove("caret");
    letter[++active_letter].classList.add("caret");
  } else {
    words[active_word].classList.toggle("incorrect");
  }
}
