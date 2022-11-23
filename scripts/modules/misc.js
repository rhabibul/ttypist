import words1k from "./words1k";
import words3k from "./words3k";
import Config from "./Config";

function randomWords(count) {

  let wordarray = new Array();
  
  if (arguments.length === 0) {    
    wordarray = initialstring.split(" ");
  } else {
    wordarray = new Array(count);
    for (let i = 0; i < count; ++i) {
      let randomindex = Math.floor(Math.random() * words3k.length);
      wordarray[i] = words3k[randomindex];
    }
  }

  let wordelements = new Array(wordarray.length);
  let word, delimiter;
  for (let i = 0; i < wordarray.length; ++i) {

    word = document.createElement("word");

    for (let j = 0; j < wordarray[i].length; ++j) {

      let letter = document.createElement("letter");
      letter.textContent = wordarray[i][j];
      word.appendChild(letter);
      letter.classList.add(carettypes.get(Config.caret));
    }

    delimiter = document.createElement("letter"); // letter with space
    delimiter.classList.add(carettypes.get(Config.caret));
    delimiter.innerHTML = `${Config.wordseparator}`;
    word.appendChild(delimiter);
    

    wordelements[i] = word;
  }

  return wordelements;
}

// clearn custom text
const nonascii = {
  "“": '"', // &ldquo;	&#8220;
  "”": '"', // &rdquo;	&#8221;
  "’": "'", // &lsquo;	&#8216;
  "‘": "'", // &rsquo;	&#8217;
  ",": ",", // &sbquo;	&#8218;
  "—": "-", // &mdash;  &#8212;
  "…": "...", // &hellip; &#8230;
  "«": "<<",
  "»": ">>",
  "–": "-",
  " ": " ",
  " ": " ",
  " ": " ",
};

export { randomWords };
