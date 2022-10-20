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

  return Math.round(wpm);
}

function handle_keypress(keyevent) {

  keyevent.preventDefault();

  if (test_started) { // start timers as soon as the first letter is typed
    startTime = Date.now();
    test_started = false;
  }

  const keypressed = keyevent.key;

  if (keypressed === ' ') { // move to next word if a space is typed

    if (active_word + 1 == totalWords) { // exit if finished typing all words
      endTime = Date.now();

      words[active_word].classList.remove("active");
      letters[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handle_keypress, false);

      let wpm = calculate_speed(startTime, endTime);
      speedtag.textContent = `${wpm}wpm`;
      return;
    }

    // remove caret and color highlight from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    ++active_word; // move to next word
    letters = words[active_word].children; // store all letters of the next word
    words[active_word].classList.add("active"); // highlight the next word

    active_letter = 0; // point active_letter to first letter of next word

    letters[active_letter].classList.add("caret"); // put caret on first letter of the word

  } else if (keypressed === letters[active_letter].textContent) {
    // CORRECTLY TYPED: Move caret to next letter

    words[active_word].classList.remove("incorrect");
    letters[active_letter].classList.remove("caret");

    ++active_letter;

    letters[active_letter].classList.add("caret");
  } else if (keyevent.metaKey && keypressed == "Backspace") {
    // cmd + backspace
    // clear all typed words: restart without resetting the timer

    // remove caret and color highlight from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    // remove error highlight from current word till first word
    for (let i = active_word - 1; i >= 0; --i) {
      words[i].classList.remove("incorrect");
      words[i].classList.add('caret');
      words[i].classList.remove('caret');
    }

    // reseet variables to initial state
    active_letter = 0;
    active_word = 0;

    // store letters of first word
    letters = words[active_word].children;

    // highlight first word & set care to first letter of first word
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
    // BACKSPACE: Take caret one letter back.

    words[active_word].classList.remove("incorrect");

    // Take caret to previous letter of the current word as long as there is a
    // letter before it.
    if (active_letter > 0) {
      letters[active_letter].classList.remove("caret");
      --active_letter;
      letters[active_letter].classList.add("caret");
    }

    // If caret is at first letter of current word then put the caret after last
    // letter of previous word.
    if (active_letter == 0 && active_word > 0) {

      // remove caret and highlight color from current word
      letters[active_letter].classList.remove("caret");
      words[active_word].classList.remove("active");

      --active_word; // go to previous word
      letters = words[active_word].children; // store letters of previous word
      words[active_word].classList.add("active"); // highlight the previous word

      active_letter = letters.length - 1; // point to last letter of previous word

      // put caret on space character of previous word i.e, caret should appear
      // after last non-whitespace character of previous word
      letters[active_letter].classList.add("caret");
    }
  } else  {
    // INCORRECTLY TYPED: Inserted the wrongly typed letter
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
