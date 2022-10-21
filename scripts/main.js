const speedtag = document.querySelector(".stats > .speed");
const wordsInput = document.querySelector("#wordsInput");
const words = document.getElementsByTagName("word");
const totalWords = words.length;

class Stack {
  #word;
  constructor() {
    this.#word = new Array();
  }
  push(element) {
    this.#word.push(element);
  }
  pop() {
    let letter = this.#word.pop();
    return letter;
  }
  empty() {
    return this.#word.length == 0;
  }
  top() {
    if (this.empty()) return -1;
    return this.#word[this.#word.length - 1];
  }
}

let active_word = 0;
let active_letter = 0;

let test_started = true;
let startTime = 0;
let endTime = 0;
let caret_blinking = true;

let letters = words[active_word].children; // store letters of first word
letters[active_word].classList.add('blink'); // add a blinking caret to first letter of first word

function total_characters(words) {
  let chars = 0;
  for (let word of words) {
    chars += word.children.length;
  }
  return chars;
}

function calculate_speed(startTime, endTime) {

  const sec = (endTime - startTime) / 1000;
  const wordsTyped = (total_characters(words) / 5);
  const wpm = (wordsTyped / sec) * 60;

  return Math.round(wpm);
}

function handleKeydown(keyevent) {
  keyevent.preventDefault();

  if ( caret_blinking ) {
    letters[active_letter].classList.remove('blink');
    caret_blinking = false;
  }

  if (test_started) {
    // start timers as soon as the first letter is typed
    startTime = Date.now();
    test_started = false;
  }

  const keytyped = keyevent.key;

  // ===================== HIGHLIGHT MODE: Word =====================

  // charCode is checked so that caret doesn't go to next word by just
  // hitting space character
  if (
    keytyped === " " &&
    letters[active_letter].textContent.charCodeAt(0) == 160
  ) {
    // move to next word if a space is typed

    if (active_word + 1 === totalWords) {
      // exit if finished typing all words
      endTime = Date.now();

      words[active_word].classList.remove("active");
      letters[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handleKeydown, false);

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

    letters[active_letter].classList.add("caret"); // put caret on 1st letter of the next word

  } else if ( keytyped === letters[active_letter].textContent ) {
    // Move caret to next letter
    words[active_word].classList.remove("incorrect");
    letters[active_letter].classList.remove("caret");
    ++active_letter;
    letters[active_letter].classList.add("caret");
  } else if (keyevent.metaKey && keytyped === "Backspace") {
    // cmd + backspace
    // clear all typed words: restart without resetting the timer

    // remove caret and color highlight from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    // remove error highlight from current word till first word
    for (let i = words.length - 1; i >= 0; --i) {
      words[i].classList.remove("incorrect");
    }

    // reset variables to initial state
    active_letter = 0;
    active_word = 0;

    // store letters of the first word
    letters = words[active_word].children;

    words[active_word].classList.add("active"); // highlight first word
    
    caret_blinking = true;
    letters[active_letter].classList.add("blink"); // add blinking caret to first letter of first word
  } else if (
    (keyevent.altKey && keytyped === "Backspace") ||
    (keyevent.ctrlKey && keytyped === "Backspace")
  ) {
    // (alt + backspace) || (opt + backspace)
    // clear one word at a time putting caret at first letter of previous word

    // if care is already at first letter of a word and user then go back
    // to previous word
    if (active_letter === 0 && active_word > 0) {
      // remove incorrect or active highlight as well as caret from current word
      words[active_word].classList.remove("incorrect");
      letters[active_letter].classList.remove("caret");
      words[active_word].classList.remove("active");

      --active_word;

      words[active_word].classList.add("active"); // highlight previous word
      letters = words[active_word].children; // store letters of previous word
      letters[active_letter].classList.add("caret"); // add caret to first letter

    }

    // remove caret & highlight color from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("incorrect");

    active_letter = 0; // point to first letter of current word

    if ( active_word === 0 ) {
      caret_blinking = true;
      letters[active_letter].classList.add("blink"); // add a blinking caret to first letter of first word
    } else {
      letters[active_letter].classList.add("caret"); // add caret to first letter of the current word
    }
  } else if (keytyped === "Backspace") {
    // BACKSPACE: Take caret one letter back.

    words[active_word].classList.remove("incorrect");

    // Take caret to previous letter of the current word as long as there is a
    // letter before it.
    if (active_letter > 0) {
      letters[active_letter].classList.remove("caret");
      --active_letter;
      letters[active_letter].classList.add("caret");
    } else if (active_letter === 0 && active_word > 0) {
      // if caret is on first letter of the current word then, put caret on space
      // character of previous word i.e, caret should appear after last
      // non-whitespace character of previous word.

      // remove caret and highlight color from current word
      letters[active_letter].classList.remove("caret");
      words[active_word].classList.remove("active");

      --active_word; // go to previous word

      letters = words[active_word].children; // store letters of previous word
      words[active_word].classList.add("active"); // highlight the previous word

      active_letter = letters.length - 1; // point to last letter of previous word

      letters[active_letter].classList.add("caret"); // add caret to first letter of the current word
    } else if (active_letter === 0 && active_word === 0) {
      caret_blinking = true;
      letters[active_letter].classList.add("blink"); // add a blinking caret to first letter of first word
    } 
  } else {
    // INCORRECTLY TYPED: Inserted the wrongly typed letter
    words[active_word].classList.add("incorrect");
  }
}

// Event Listeners
wordsInput.addEventListener("keydown", handleKeydown);
