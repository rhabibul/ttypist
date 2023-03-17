import Config from "./config.js";
import * as Misc from "./misc.js";
import * as Element from "./element.js";

class Sentence {
	#words;
	#activewordindex;
	constructor() {
		this.#words = new Array(0);
		this.#activewordindex = 0;
	}

	wordcount() {
		return this.#words.length;
	}
	clear() {
		this.#activewordindex = 0;
		this.#words.innerHTML = "";
	}

	loadwords() {}

	prevword() {}
	activeword() {}
	nextword() {}
};

class Word {
	#word;
	#activeletterindex;
	constructor() {
		this.#word = new Array(0);
		this.#activeletterindex = 0;
	}
	lettercount() {
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

	registerkeydown() {};
	registerkeyup() {};

	firsttest() {};
	restart() {};
}