class History {
	#tests;
	#totaltests;
	constructor() {
		this.#tests = new Array();
		this.#totaltests = this.#tests.length;
	}
}

class Stats {
	
	#wpm;
	#cpm;
	#raw;
	#accuracy;
	
	constructor() {
		this.#cpm = 0;
		this.#wpm = 0;
		this.#raw = 0;
		this.#accuracy = 0;
	}
}

class Time {
	
	#testStartTime;
	#testEndTime;
	#duration;
	
	constructor() {
		this.#testStartTime = 0;
		this.#testEndTime = 0;
		this.#duration = 0;
	}
}

class Test {

		#stats;
		#words;
		#testHasStarted;

		constructor() {
			this.#words = new Words(generateRandomWords());
			this.#stats = new Stats();
			this.#testHasStarted = true;
		}
		get teststarted() {
			return this.#testHasStarted;
		}
		set teststarted(value) {
			this.#testHasStarted = value;
		}
		generateRandomWords(N);
}

class Words {

	#words;
	#length;
	#currentWordIndex;
	#currentLetterIndex;

	constructor(tmpwords) {
		this.#words = tmpwords;
		this.#length = this.#words.length;
		this.#currentWordIndex = 0;
		this.#currentLetterIndex = 0;
	}

	get totalwords() {
		return this.#length;
	} 	
	get activeWordIndex() {
		return this.#currentWordIndex;
	}		
	get activeLetterIndex() {
		return this.#currentLetterIndex;
	}		
	get activeWord() {
		return this.#words[this.activeWordIndex()];
	} 	
	get activeLetter() {
		return this.#words[this.activeWordIndex()][this.activeLetterIndex()];
	} 	
	resetIndexes() {
		this.#currentWordIndex = 0;
		this.#currentLetterIndex = 0;
	}
	resetWordIndex() {
		this.#currentWordIndex = 0;
	}
	resetLetterIndex() {
		this.#currentLetterIndex = 0;
	}
	goToNextWord() {
		this.#currentWordIndex++;
	}
	goToPreviousWord() {
		this.#currentWordIndex--;
	}
	goToNextLetter() {
		this.#currentLetterIndex++;
	}
	goToPreviousLetter() {
		this.#currentLetterIndex--;
	}
}