const speedtag = document.querySelector(".speed");
const wordsInput = document.querySelector("#wordsInput");
let words = Array.from(document.getElementsByTagName("word"));
let totalWords = words.length;

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

const words1000 = [
  "as", "I", "his", "that", "he", "was", "for", "on", "are", "with", "they",
  "be", "at", "one", "have", "this", "from", "by", "hot", "word", "but", "what",
  "some", "is", "it", "you", "or", "had", "the", "of", "to", "and", "a", "in",
  "we", "can", "out", "other", "were", "which", "do", "their", "time", "if",
  "will", "how", "said", "an", "each", "tell", "does", "set", "three", "want",
  "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand",
  "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high",
  "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind",
  "off", "need", "house", "picture", "try", "us", "again", "animal", "point",
  "mother", "world", "near", "build", "self", "earth", "father", "any", "new",
  "work", "part", "take", "get", "place", "made", "live", "where", "after",
  "back", "little", "only", "round", "man", "year", "came", "show", "every",
  "good", "me", "give", "our", "under", "name", "very", "through", "just", "form",
  "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn",
  "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same",
  "she", "all", "there", "when", "up", "use", "your", "way", "about", "many",
  "then", "them", "write", "would", "like", "so", "these", "her", "long", "make",
  "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go",
  "come",  "did", "number", "sound", "no", "most", "people", "my", "over",
  "know", "water", "than", "call", "first", "who", "may", "down", "side", "been",
  "now", "find", "head", "stand", "own", "page", "should", "country", "found",
  "answer", "school", "grow", "study", "still", "learn", "plant", "cover",
  "food", "sun", "four", "between", "state", "keep", "eye", "never", "last",
  "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might",
  "story", "saw", "far", "sea", "draw", "left", "late", "run", "don’t", "while",
  "press", "close", "night", "real", "life", "few", "north", "book", "carry",
  "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain",
  "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color",
  "face", "wood", "main", "open", "seem", "together", "next", "white", "children",
  "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music",
  "those", "both", "mark", "often", "letter", "until", "mile", "river", "car",
  "feet", "care", "second", "enough", "plain", "girl", "usual", "young", "ready",
  "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon",
  "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door",
  "product", "black", "short", "numeral", "class", "wind", "question", "happen",
  "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem",
  "piece", "told", "knew", "pass", "since", "top", "whole", "king", "street",
  "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force",
  "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system",
  "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead",
  "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape",
  "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes",
  "distant", "fill", "east", "paint", "language", "among", "unit", "power", "town",
  "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait",
  "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound",
  "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final",
  "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute",
  "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "space",
  "heard", "best", "hour", "better", "TRUE", "during", "hundred", "five", "remember",
  "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb",
  "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple",
  "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center",
  "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule",
  "govern", "pull", "cold", "notice", "voice", "energy", "hunt", "probable", "bed",
  "brother", "egg", "ride", "cell", "believe", "perhaps", "pick", "sudden", "count",
  "square", "reason", "length", "represent", "art", "subject", "region", "size",
  "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle",
  "pair", "include", "divide", "syllable", "felt", "grand", "ball", "yet", "wave",
  "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm",
  "wide", "sail", "material", "fraction", "forest", "sit", "race", "window",
  "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall",
  "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild",
  "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit",
  "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear",
  "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "trade", "melody",
  "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least",
  "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean",
  "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew",
  "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal",
  "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save",
  "control", "decimal", "ear", "else", "quite", "broke", "case", "middle", "kill",
  "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight",
  "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay",
  "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb",
  "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single",
  "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "jump", "baby",
  "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether",
  "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe",
  "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century",
  "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall",
  "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight",
  "lie", "beat", "excite", "natural", "view", "sense", "capital", "wont",
  "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate",
  "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "crop",
  "modern", "element", "hit", "student", "corner", "party", "supply", "whose",
  "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio",
  "spoke", "atom", "human", "history", "effect", "electric", "expect", "bone",
  "rail", "imagine", "provide", "agree", "thus", "gentle", "woman", "captain",
  "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat",
  "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend",
  "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin",
  "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie",
  "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print",
  "dead", "spot", "desert", "suit", "current", "lift", "rose", "arrive", "master",
  "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect",
  "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad",
  "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant",
  "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink",
  "occur", "support", "speech", "nature", "range", "steam", "motion", "path",
  "liquid", "log", "meant", "quotient", "teeth", "shell", "neck", "oxygen",
  "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet",
  "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid",
  "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience",
  "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band",
  "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total",
  "basic", "smell", "valley", "nor", "double", "seat", "continue", "block", "chart",
  "hat", "sell", "success", "company", "subtract", "event", "particular", "deal",
  "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange",
  "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck",
  "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine",
  "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require",
  "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent",
];
let active_word = 0;
let active_letter = 0;


let testStarted = true;
let testStartTime = 0;
let testEndTime = 0;

// store letters of first word
let letters = words[active_word].children; 


function total_characters(words) {
  let chars = 0;
  for (let word of words) {
    chars += word.children.length;
  }
  return chars;
}

function calculate_speed(testStartTime, testEndTime) {
  const sec = (testEndTime - testStartTime) / 1000;
  const wordsTyped = total_characters(words) / 5;
  const wpm = (wordsTyped / sec) * 60;

  return Math.round(wpm);
}


function handleKeydown(keyevent) {
  keyevent.preventDefault();

  if (testStarted) {
    // start timers as soon as the first letter is typed
    testStartTime = window.performance.now();
    testStarted = false;
  }

  const keytyped = keyevent.key;

  // charCode is checked so that caret doesn't go to next word by just
  // hitting space character
  if (
    keytyped === " " &&
    letters[active_letter].textContent.charCodeAt(0) == 160
  ) { // move to next word if a space is typed

    if (active_word + 1 === totalWords) {
      // exit if finished typing all words
      testEndTime = window.performance.now();

      words[active_word].classList.remove("active");
      letters[active_letter].classList.remove("caret");

      wordsInput.removeEventListener("keydown", handleKeydown, false);

      let wpm = calculate_speed(testStartTime, testEndTime);
      speedtag.textContent = `${wpm}wpm`;

      function restart_test() {
        let wordsContainer = document.querySelector(".words");
        wordsContainer.innerHTML = "";
        wordsInput.value = "";

        const randomWords = generateRandomWords(20);

        for (let i = 0; i < randomWords.length; ++i) {
          wordsContainer.insertAdjacentElement("beforeend", randomWords[i]);
        }
        words = Array.from(document.getElementsByTagName("word"));
        totalWords = words.length;

        active_word = 0;
        active_letter = 0;
        testStarted = true;
        testStartTime = 0;
        testEndTime = 0;

        letters = words[active_word].children;
        words[active_word].classList.add('active');
        letters[active_letter].classList.add("caret");
        wordsInput.focus();
        wordsInput.addEventListener("keydown", handleKeydown);  

        setTimeout(() => {
          speedtag.textContent = '';
        }, 2000);
      }

      restart_test();
      
      return;
    }

    // remove caret and color highlight from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("active");

    ++active_word; // move to next word
    letters = words[active_word].children; // store all letters of the next word
    words[active_word].classList.add("active"); // highlight the next word

    active_letter = 0; // point active_letter to first letter of next word

    letters[active_letter].classList.add("caret"); // put caret on first letter of the next word

  } else if ( keytyped === letters[active_letter].textContent ) { // Move caret to next letter
    
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
    letters[active_letter].classList.add("caret");
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

    letters[active_letter].classList.add("caret"); // add caret to first letter of the current word
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
    }
  } else {
    // INCORRECTLY TYPED: Inserted the wrongly typed letter
    words[active_word].classList.add("incorrect");

    // let cnt = errorCountOfWord[active_word]; // used for accessing second last element in stack
    // ++errorCountOfWord[active_word];
    // let error_id = `extra-${errorCountOfWord[active_word]}`;
    // let error_letter = document.createElement('letter');
    // error_letter.classList.add('error');
    // error_letter.id = error_id;
    // // error_letter.style.textDecoration = 'underline';

    // if ( keytyped === ' ' ) {
    //   error_letter.innerHTML = "•";
    // } else {
    //   error_letter.textContent = keytyped;
    // }

    // errorsOfWord[active_word].push(error_id);
    
    // if ( errorsOfWord[active_word].length == 1 ) {
    //   letters[active_letter].insertAdjacentElement('beforebegin', error_letter);
      
    // } else {
    //   let previousErrorLetter = document.getElementById(`extra-${cnt}`);
    //   previousErrorLetter.insertAdjacentElement('afterend', error_letter);
    // }
  }
}

// Event Listeners
wordsInput.addEventListener("keydown", handleKeydown);

function generateRandomWords(noOfWordsToGenerate) {
  let randomWords = new Array(noOfWordsToGenerate);

  for (let i = 0; i < noOfWordsToGenerate; ++i) {
    randomWords[i] = words1000[Math.trunc(Math.random() * 1000)];
  }

  let wordtags = new Array(noOfWordsToGenerate);

  for (let i = 0; i < noOfWordsToGenerate; ++i) {
    let word = document.createElement("word");

    for (let j = 0; j < randomWords[i].length; ++j) {
      let letter = document.createElement("letter");

      letter.textContent = randomWords[i][j];
      word.appendChild(letter);
    }
    let letterWithSpace = document.createElement("letter");
    letterWithSpace.innerHTML = "&nbsp;";
    word.appendChild(letterWithSpace);

    wordtags[i] = word;
  }

  return wordtags;
}