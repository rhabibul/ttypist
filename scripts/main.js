import * as Misc from "./modules/misc.js";
import * as Constants from "./modules/constants.js";

import Config from "./modules/config.js";
import Test from "./modules/test.js"
import Sentence from "./modules/sentence.js";

const root = document.querySelector(":root");
const restart = document.querySelector("#settings > button.restart");
const speedEl = document.querySelector(".speed");
const inputbox = document.getElementById("inputbox");
const wordcontainer = document.getElementById("sentence");

// let lastKeypressTimestamp = window.performance.now();
// let testStartTime = 0;
// let testEndTime = 0;
// let testNotStarted = true;

let test;

function showspeed(testStartTime, testEndTime) {
  const sec = (testEndTime - testStartTime) / 1000;
  const wordsTyped = this.sentence.totalcharacters() / 5;
  const wpm = (wordsTyped / sec) * 60;

  speedEl.textContent = `${Math.round(wpm)}wpm`;
  speedEl.style.color = "deeppink";
  speedEl.style.fontWeight = "400";
}

function startBrandNewTest() {

  test = new Test();

  test.start();
  
  setTimeout(() => {
    speedEl.style.color = "whitesmoke";
  }, 2000);
}

startBrandNewTest();

restart.addEventListener("click", function (evt) {
  evt.preventDefault();
  test.restart();
});


// let active_word = 0;
// let active_letter = 0;

// let testStartTime = 0;
// let testEndTime = 0;
// let testStarted = true;

// let randomWords, words, totalwords, letters;

// function loadwords(words) {
//   inputbox.value = "";
//   wordcontainer.innerHTML = "";

//   for (let word of words) {
//     wordcontainer.insertAdjacentElement("beforeend", word);
//   }
// }

// function totalcharacters(words) {
//   let chars = 0;
//   for (let word of words) {
//     chars += word.children.length;
//   }
//   return chars;
// }

// function showspeed(testStartTime, testEndTime) {
//   const sec = (testEndTime - testStartTime) / 1000;
//   const wordsTyped = totalcharacters(words) / 5;
//   const wpm = (wordsTyped / sec) * 60;

//   sppedEl.textContent = `${Math.round(wpm)}wpm`;
//   sppedEl.style.color = "deeppink";
//   sppedEl.style.fontWeight = "400";
// }

// function handleKeydown(keyevent) {
//   keyevent.preventDefault();

//   if (testStarted) {
//     // start timers as soon as the first letter is typed
//     testStartTime = window.performance.now();
//     testStarted = false;
//   }

//   const typedkey = keyevent.key;

//   // move to next word if a space is typed
//   if (
//     letters[active_letter].textContent.charCodeAt(0) === 160 &&
//     typedkey === " "
//   ) {
//     // charCode is checked so that caret doesn't go to next word when user just
//     // hits a space character

//     letters[active_letter].removeAttribute("id"); // remove caret
    
//     words[active_word].classList.remove("active"); // remove highlight from active word
//     ++active_word; // move to next word
//     words[active_word].classList.add("active"); // add highlight to next word
    
//     letters = words[active_word].children; // store all letters of the next word
//     active_letter = 0; // go to first letter of next word
//     letters[active_letter].setAttribute("id", Config.caret); // add caret
    
//   } else if (typedkey === letters[active_letter].textContent) {
//     // Move caret to next letter
//     words[active_word].classList.remove("incorrect");

//     letters[active_letter].removeAttribute("id"); // remove caret
//     ++active_letter;
//     letters[active_letter].setAttribute("id", Config.caret); // add caret

//     if ( active_word === totalwords - 1 && active_letter === letters.length - 1 ) {
//       // restart new test if user has finished typing all the words

//       testEndTime = window.performance.now();
//       words[active_word].classList.remove("active");
//       letters[active_letter].removeAttribute("id"); // remove caret

//       showspeed(testStartTime, testEndTime); // display typing speed
//       inputbox.removeEventListener("keydown", handleKeydown);
//       newtest();
//     }
//   } else if (keyevent.metaKey && typedkey === "Backspace") {
//     // cmd + backspace
//     // clear all typed words: restart without resetting the timer

//     letters[active_letter].removeAttribute("id"); // remove caret
//     words[active_word].classList.remove("active");

//     // remove error highlight from current word till first word
//     for (let i = words.length - 1; i >= 0; --i) {
//       words[i].classList.remove("incorrect");
//     }

//     // reset variables to initial state
//     active_letter = 0;
//     active_word = 0;

//     // store letters of the first word
//     letters = words[active_word].children;

//     words[active_word].classList.add("active"); // highlight first word

//     letters[active_letter].setAttribute("id", Config.caret); // add caret
//   } else if (
//     (keyevent.altKey && typedkey === "Backspace") ||
//     (keyevent.ctrlKey && typedkey === "Backspace")
//   ) {
//     // (alt + backspace) || (opt + backspace)
//     // clear one word at a time putting caret at first letter of previous word

//     letters[active_letter].removeAttribute("id"); // remove caret
//     words[active_word].classList.remove("incorrect"); // remove error from current word

//     // if caret is already at first letter of a word and user then goes back to
//     // previous word
//     if (active_letter === 0 && active_word > 0) {
      
//       words[active_word].classList.remove("active"); // remove active word status
//       --active_word;
//       words[active_word].classList.add("active"); // highlight previous word

//       letters = words[active_word].children; // store letters of previous word
//     }

//     words[active_word].classList.remove("incorrect");
//     active_letter = 0; // point to first letter of current word
//     letters[active_letter].setAttribute("id", Config.caret); // add caret

//   } else if (typedkey === "Backspace") {
//     // Take caret one letter back.

//     words[active_word].classList.remove("incorrect");

//     // Take caret to previous letter of the current word as long as there is a
//     // letter before it.
//     if (active_letter > 0) {

//       letters[active_letter].removeAttribute("id"); // remove caret
//       --active_letter;
//       letters[active_letter].setAttribute("id", Config.caret); // add caret
      
//     } else if (active_letter === 0 && active_word > 0) {
//       // if caret is on first letter of the current word then, put caret on space
//       // character of previous word i.e, caret should appear after last
//       // non-whitespace character of previous word.

//       letters[active_letter].removeAttribute("id"); // remove caret
      
//       words[active_word].classList.remove("active");
//       --active_word; // go to previous word
//       words[active_word].classList.add("active"); // highlight the previous word

//       letters = words[active_word].children; // store letters of previous word

//       active_letter = letters.length - 1; // point to last letter of previous word
//       letters[active_letter].setAttribute("id", Config.caret); // add caret
//     }
//   } else {
//     // insert '·' this instead of &nbsp; when user hits space character in the wrong place
//     if (!Constants.invisibles.includes(typedkey)) {
//       words[active_word].classList.add("incorrect");
//     }
//   }
// }

// function newtest() {

//   loadwords(Misc.getRandomWords());
  
//   words = Array.from(document.getElementsByTagName("word"));
//   totalwords = words.length;

//   active_word = 0;
//   active_letter = 0;
//   testStarted = true;
//   testStartTime = 0;
//   testEndTime = 0;

//   letters = words[active_word].children;
//   words[active_word].classList.add("active");
//   letters[active_letter].setAttribute("id", Config.caret); // add caret

//   inputbox.addEventListener("keydown", handleKeydown); // this brings everything live again
//   inputbox.focus();

//   setTimeout(() => {
//     sppedEl.style.color = "whitesmoke";
//   }, 2000);
// }

// newtest(); // start the first test

const offtype_icon = document.querySelector("#off-icon > .fa-ban");
const offtype = document.querySelector(".carettypes > .offtype");
const linetype = document.querySelector(".carettypes > .linetype");
const underlinetype = document.querySelector(".carettypes > .underlinetype");
const boxtype = document.querySelector(".carettypes > .boxtype");
const blocktype = document.querySelector(".carettypes > .blocktype");

const allcarettypes = document.querySelectorAll(".carettypes > .caret");

function changeCaret(evt) {
  evt.preventDefault();

  let clickedcaret = this;

  if (clickedcaret.title === Config.caret) return;

  for (let carettype of allcarettypes) {
    if (clickedcaret !== carettype) {
      carettype.style.backgroundColor = "var(--settings-caret__bg)";
      if (carettype === offtype) {
        offtype_icon.style.color = "var(--settings-offtypeIcon__color)";
      }
    }
  }

  if (clickedcaret === offtype) {
    offtype_icon.style.color = "#ff0000";
    offtype.style.backgroundColor = "#ffeaea";
  } else {
    clickedcaret.style.backgroundColor = "var(--settings-caret__bg-active)";
  }

  Config.caret = clickedcaret.title;
  newtest();
}

offtype.addEventListener      ("click", changeCaret);
boxtype.addEventListener      ("click", changeCaret);
linetype.addEventListener     ("click", changeCaret);
blocktype.addEventListener    ("click", changeCaret);
underlinetype.addEventListener("click", changeCaret);

inputbox.addEventListener("focus",     (evt) => { evt.preventDefault(); Config.typing = true;  });
inputbox.addEventListener("focusout",  (evt) => { evt.preventDefault(); Config.typing = false; });