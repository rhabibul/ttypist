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
  get length() {
    return this.#word.length;
  }
}

let errorsOfWord = new Array(totalWords);
let errorCountOfWord = new Array(totalWords);

errorsOfWord.fill(new Stack());
errorCountOfWord.fill(0);

// used for accessing second last element in stack
let cnt = errorCountOfWord[active_word];

++errorCountOfWord[active_word];
let error_id = `extra-${errorCountOfWord[active_word]}`;
let error_letter = document.createElement("letter");
error_letter.classList.add("error");
error_letter.id = error_id;
error_letter.style.textDecoration = "underline";
error_letter.style.textDecorationColor = "#ff8a8a";

if (keytyped === " ") {
  error_letter.textContent = "·";
  error_letter.style.fontWeight = "bold";
  error_letter.style.textDecoration = "";
  error_letter.style.textDecorationColor = "";
} else {
  error_letter.textContent = keytyped;
}

errorsOfWord[active_word].push(error_id);

if (errorsOfWord[active_word].length == 1) {
  letters[active_letter].insertAdjacentElement("beforebegin", error_letter);
} else {
  let previousErrorLetter = document.getElementById(`extra-${cnt}`);
  previousErrorLetter.insertAdjacentElement("afterend", error_letter);
}
