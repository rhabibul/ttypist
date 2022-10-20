// Next features
// 1. add random english word generator
// 2. option to reset everything without reloading the page

const SPACE = " ";
const wordsInput = document.querySelector("#wordsInput");
const words = document.getElementsByTagName("word");
const total_words = words.length;

let total_characters = 0;

for (let word of words) {
  total_characters += word.children.length;
}
// 1 word = 5 characters
// 93 / 5 = 18.6 => 19 words of length 5
// 14s = 93 characters

let active_word = 0;
let active_letter = 0;

let test_started = true;
let startTime = 0;
let endTime = 0;

// store letters of first word
let letters = words[active_word].children;

function handle_keypress(keyevent) {
  if (test_started) {
    startTime = Date.now();
    test_started = false;
  }

  keyevent.preventDefault();
  const keypressed = keyevent.key;

  // move to next word a space is typed
  if (keypressed === SPACE) {
    if (active_word + 1 == total_words) {
      endTime = Date.now();

      const milliseconds = endTime - startTime;
      console.log(milliseconds);
      console.log(`${(milliseconds / 1000).toFixed(1)}s`);
      // enter this block after uses has typed all words
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
  } else if (keypressed === letters[active_letter].textContent) {
    // move the caret to next letter in the word
    words[active_word].classList.remove("incorrect");

    letters[active_letter].classList.remove("caret");

    letters[++active_letter].classList.add("caret");
  } else if (keyevent.metaKey && keypressed == "Backspace") {
    // set caret to first letter of first word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    for (let i = active_word; i >= 0; --i) {
      words[i].classList.remove("incorrect");
    }

    active_letter = 0;
    active_word = 0;
    letters = words[active_word].children;

    words[active_word].classList.add("active");
    letters[active_letter].classList.add("caret");
  } else if (
    (keyevent.altKey && keypressed == "Backspace") ||
    (keyevent.ctrlKey && keypressed == "Backspace")
  ) {
    // if is already at first letter of a word and user hits ctrl+bs or opt+bs
    // then go back to previous word
    if (active_letter == 0 && active_word > 0) {
      letters[active_letter].classList.remove("caret");
      words[active_word].classList.remove("active");
      words[active_word].classList.remove("incorrect");
      if (active_word > 0) {
        --active_word;
        words[active_word].classList.add("active");
        letters = words[active_word].children;
        letters[active_letter].classList.add("caret");
      }
    }

    // set caret to first letter of the current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("incorrect");

    active_letter = 0;

    letters[active_letter].classList.add("caret");
  } else if (keypressed == "Backspace") {
    words[active_word].classList.remove("incorrect");

    if (active_letter > 0) {
      letters[active_letter].classList.remove("caret");
      --active_letter;
      letters[active_letter].classList.add("caret");
    }

    // Now user can go all the way to first letter of first word of the sentence
    // by continously hitting backspace
    if (active_letter == 0 && active_word > 0) {
      words[active_word].classList.remove("incorrect");
      letters[active_letter].classList.remove("caret");
      words[active_word].classList.remove("active");

      --active_word;

      words[active_word].classList.add("active");

      letters = words[active_word].children;

      active_letter = letters.length - 1;

      letters[active_letter].classList.add("caret");
    }
  } else {
    words[active_word].classList.add("incorrect");
  }
}

// Event Listeners
wordsInput.addEventListener("keydown", handle_keypress);

// function detect_os(userAgent) {
//   if (userAgent.search("Mac") !== -1) {
//     return "Mac";
//   } else if (userAgent.search("Windows") !== -1) {
//     return "Windows";
//   } else if (
//     userAgent.search("X11") !== -1 &&
//     !(userAgent.search("Linux") !== -1)
//   ) {
//     return "Unix";
//   } else if (
//     userAgent.search("Linux") !== -1 &&
//     !(userAgent.search("X11") !== -1)
//   ) {
//     return "Linux";
//   }
// }

// let operating_system = detect_os(navigator.userAgent);
