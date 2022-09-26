let wordsInput = document.querySelector("#wordsInput");

const words = Array.from(document.querySelectorAll(".word"));

for (word of words) {
  console.log(word);
}

let output = document.getElementsByTagName("output")[0];

wordsInput.addEventListener("keydown", function (keyevent) {
  output.textContent = keyevent.key;
});
