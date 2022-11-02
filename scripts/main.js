const initialstring = 'the quick brown fox jumps over the lazy dog';

const w1000 = [
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
  "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while",
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
  "lie", "beat", "excite", "natural", "view", "sense", "capital", "won't",
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

const special_characters = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp',, 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const speedtag = document.querySelector(".speed");
const wordsInput = document.querySelector("#wordsInput");
const wordsContainer = document.querySelector(".words");

const testwords = 10;

let active_word = 0;
let active_letter = 0;

let testStartTime = 0;
let testEndTime = 0;
let testStarted = true;

// use initial string when website loads for the first time.
const randomWords = generateRandomWords();

// load the initial string for first test for the typist
for (let i = 0; i < randomWords.length; ++i) {
  wordsContainer.insertAdjacentElement("beforeend", randomWords[i]);
}

let words = Array.from(document.getElementsByTagName("word"));
let totalwords = words.length;
let letters = words[active_word].children; // store letters of first word

words[active_word].classList.add("active");
letters[active_letter].classList.add("caret");

wordsInput.addEventListener("keydown", handleKeydown);

function handleKeydown(keyevent) {
  keyevent.preventDefault();

  if (testStarted) {
    // start timers as soon as the first letter is typed
    testStartTime = window.performance.now();
    testStarted = false;
  }

  const keytyped = keyevent.key;

  // move to next word if a space is typed
  if ( (letters[active_letter].textContent.charCodeAt(0) === 160) && (keytyped === " ") ) {
    // charCode is checked so that caret doesn't go to next word when user just
    // hits a space character

    letters[active_letter].classList.remove("caret"); // remove caret
    words[active_word].classList.remove("active"); // remove highlight from active word
    ++active_word; // move to next word
    letters = words[active_word].children; // store all letters of the next word
    words[active_word].classList.add("active"); // add highlight to next word
    active_letter = 0; // go to first letter of next word
    letters[active_letter].classList.add("caret"); // put caret on first letter of the next word
    
  } else if (keytyped === letters[active_letter].textContent) {

    // Move caret to next letter
    words[active_word].classList.remove("incorrect");
    letters[active_letter].classList.remove("caret");
    ++active_letter;
    letters[active_letter].classList.add("caret");

    if ( (active_word === totalwords - 1) && (active_letter === letters.length - 1) ) {
      // restart new test if user has finished typing all the words

      testEndTime = window.performance.now();
      words[active_word].classList.remove("active");
      letters[active_letter].classList.remove("caret");

      speed_wpm(testStartTime, testEndTime); // display typing speed
      wordsInput.removeEventListener("keydown", handleKeydown, false);
      newtest();
    }

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

    letters[active_letter].classList.add("caret");
  } else if (
    (keyevent.altKey && keytyped === "Backspace") ||
    (keyevent.ctrlKey && keytyped === "Backspace")
  ) {
    // (alt + backspace) || (opt + backspace)
    // clear one word at a time putting caret at first letter of previous word

    // remove caret & highlight color from current word
    letters[active_letter].classList.remove("caret");
    words[active_word].classList.remove("incorrect");

    // if caret is already at first letter of a word and user then goes back to
    // previous word
    if (active_letter === 0 && active_word > 0) {
      words[active_word].classList.remove("active"); // remove active word status

      --active_word;

      words[active_word].classList.add("active"); // highlight previous word
      letters = words[active_word].children; // store letters of previous word
      letters[active_letter].classList.add("caret"); // add caret to first letter
    }

    active_letter = 0; // point to first letter of current word

    letters[active_letter].classList.add("caret"); // add caret to first letter of the current word

  } else if (keytyped === "Backspace") { // Take caret one letter back.

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
    // insert '·' this instead of &nbsp; when user hits space character
    // in the wrong place
    if (!special_characters.includes(keytyped)) {
      words[active_word].classList.add("incorrect");
    }
  }
}

function newtest() {
  let wordsContainer = document.querySelector(".words");
  wordsContainer.innerHTML = "";
  wordsInput.value = "";

  const randomWords = generateRandomWords(testwords);

  for (let i = 0; i < randomWords.length; ++i) {
    wordsContainer.insertAdjacentElement("beforeend", randomWords[i]);
  }
  
  words = Array.from(document.getElementsByTagName("word"));
  totalwords = words.length;

  active_word = 0;
  active_letter = 0;
  testStarted = true;
  testStartTime = 0;
  testEndTime = 0;

  letters = words[active_word].children;
  words[active_word].classList.add("active");
  letters[active_letter].classList.add("caret");
  wordsInput.focus();
  wordsInput.addEventListener("keydown", handleKeydown); // this brings everything live again

  setTimeout(() => {
    speedtag.style.color = "lightgray";
  }, 1500);
}

function totalcharacters(words) {
  let chars = 0;
  for (let word of words) {
    chars += word.children.length;
  }
  return chars;
}

function speed_wpm(testStartTime, testEndTime) {

  const sec = (testEndTime - testStartTime) / 1000;
  const wordsTyped = totalcharacters(words) / 5;
  const wpm = (wordsTyped / sec) * 60;

  speedtag.textContent = `${Math.round(wpm)}wpm`;
  speedtag.style.color = "deeppink";
}

function generateRandomWords(noOfWordsToGenerate) {

  let wordsInStringForm = [];
  
  if ( arguments.length === 0 ) {
    wordsInStringForm = initialstring.split(" ");
  } else {
    wordsInStringForm = new Array(noOfWordsToGenerate);
    for (let i = 0; i < noOfWordsToGenerate; ++i) {
      wordsInStringForm[i] = w1000[Math.trunc(Math.random() * 1000)];
    }
  }

  let totalwords  = wordsInStringForm.length;
  let randomWords = new Array(totalwords);

  for (let i = 0; i < totalwords; ++i) {

    let word = document.createElement("word");
    let wordlength = wordsInStringForm[i].length;

    for (let j = 0; j < wordlength; ++j) {

      let letter = document.createElement("letter");
      letter.textContent = wordsInStringForm[i][j];
      word.appendChild(letter);
    }

    // letter with space
    let letterWithSpace = document.createElement("letter");
    letterWithSpace.innerHTML = "&nbsp;";
    word.appendChild(letterWithSpace);
  
    randomWords[i] = word;
  }

  return randomWords;
}