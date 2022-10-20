// Next features
// 1. add random english word generator
// 2. option to reset everything without reloading the page

const SPACE = " ";
const speedtag = document.querySelector(".stats > .speed");
const wordsInput = document.querySelector("#wordsInput");
const words = document.getElementsByTagName("word");
const totalWords = words.length;

let totalCharacters = 0;

for (let word of words) {
  totalCharacters += word.children.length;
}
// 1 word = 5 characters
// 93 / 5 = 18.6 => 19 words of length 5
//
// 14s = 19 words
// 1s = 19/14 words
// 60s = 19/14 * 60 => 81wpm

let active_word = 0;
let active_letter = 0;

let test_started = true;
let startTime = 0;
let endTime = 0;

let letters = words[active_word].children; // store letters of first word

function calculate_speed(startTime, endTime) {

  const totalSeconds = (endTime - startTime) / 1000;
  const totalWordsTyped = totalCharacters / 5;
  const wpm = (totalWordsTyped / totalSeconds) * 60;

  return wpm;
}

function handle_keypress(keyevent) {

  keyevent.preventDefault();

  if (test_started) { // start timers as soon as the first letter is typed
    startTime = Date.now();
    test_started = false;
  }

  const keypressed = keyevent.key;

  if (keypressed === SPACE) { // move to next word a space is typed

    if (active_word + 1 == totalWords) { // finished typing all words
      endTime = Date.now();

      words[active_word].classList.remove("active");
      letters[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handle_keypress, false);

      let wpm = calculate_speed(startTime, endTime);
      speedtag.textContent = `${wpm.toFixed(2)} wpm`;
      return;
    }

    // remove caret and color hightlight from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    ++active_word;
    letters = words[active_word].children; // store all letters of the next word

    words[active_word].classList.add("active"); // make the next word active word

    active_letter = 0; // reset active_letter to first letter for next word

    letters[active_letter].classList.add("caret"); // put caret on first letter of the word

  } else if (keypressed === letters[active_letter].textContent) {
    // move the caret to next letter in the word
    
    words[active_word].classList.remove("incorrect");
    letters[active_letter].classList.remove("caret");

    ++active_letter;

    letters[active_letter].classList.add("caret");

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
