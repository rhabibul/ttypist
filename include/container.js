export const text = {
	word: [],
	index: 0,

	load(payload) {
		this.word = payload;
		this.index = 0;
	},
  length() {
		return this.word.length;
	},
	self() {
		return this.word[0]?.parentElement;
	},
	getCurrentWordIndex() {
		return this.index;
	},
	setCurrentWordIndex(i) {
		this.index = i;
	},
	decrementWordIndex() {
		this.index = this.index - 1;
	},
  incrementWordIndex() {
		this.index = this.index + 1;
	},
	previous_word() {
		if ( this.index < 0 ) throw `w[${this.index}] - no word before`;
		return this.word[this.index - 1];
	},
  current_word() {
		if ( (this.index < 0) || (this.index > this.word.length - 1) ) throw `w[${this.index}] index is out of bounds`
		return this.word[this.index];
	},
  next_word() {
		if ( this.index >= this.word.length - 1 ) throw `w[${this.index}] - no word after`;
		return this.word[this.index + 1];
	},
	word_at(index) {
		if ( (index < 0) || (index > this.word.length() - 1) ) throw "index out of bounds";
		return this.word[index];
	},
}

export const word = {
	letter: [],
	index: 0,
	
	load(word, isPreviousWord = false) {

		this.letter = Array.from(word?.children);

		if ( !isPreviousWord ) {
			this.index = 0; // for next/current word
		} else {
			this.index = this.letter.length - 1; // for previous word
		}
	},
	length() {
		return this.letter.length;
	},
	self() {
		return this.letter[0]?.parentElement;
	},
	getCurrentLetterIndex() {
		return this.index;
	},
	setCurrentLetterIndex(index) {
		this.index = index;
	},
	decrementLetterIndex() {
		this.index = this.index - 1;
	},
  incrementLetterIndex() {
		this.index = this.index + 1;
	},
	previous_letter() {},
	current_letter() {
		if ( (this.index < 0) || (this.index > this.letter.length - 1) ) throw `l[${this.index}] index is out of bounds`
		return this.letter[this.index];
	},
	next_letter() {},
	letter_at(index) {
		if ( (index < 0) || (index > this.length() - 1) ) throw `index out of bound`;
		return this.letter[index];
	},
}