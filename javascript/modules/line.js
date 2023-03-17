import Config from "./config.js";
import * as Misc from "./misc.js";
import * as Element from "./element.js";

// reset functionality won't be there with sentence object
// test object will have reset function

class Sentence {
	#words;
	#activewordindex;
	constructor() {
		this.#activewordindex = 0;
		this.#words = new Array(0);
	}

	size() {
		return this.#words.length;
	}
	clear() {
		this.#activewordindex = 0;
		this.#words.innerHTML = "";
	}

	loadwords() {}
	sentencetext() {}
	
	prevword() {}
	activeword() {}
	nextword() {}
};
let sentence = new Sentence();


class Word {
	#word;
	#activeletterindex;
	constructor() {
		this.#word = new Array(0);;
		this.#activeletterindex = 0;
	}
	
	size() {
		return this.#word.length;
	}
	clear() {
		this.#word = "";
		this.#activeletterindex = 0;
	}

	loadletters(nextword = true) { }
	wordtext() {}

	prevletter() {}
	activeletter() {}
	nextletter() {}
}


class Test {
	#sentence;
	#word;
	constructor() {
		this.#sentence = new Sentence();
		this.#word = new Word();
	}
}

let word = new Word();