import * as Misc from "./misc.js";
import * as Element from "./element.js";

class Sentence {

	#words; // array of <word></word> elements
	#wordindex; // index of the word which is being typed (active word)
	
	constructor() {
		this.#wordindex = 0;
		this.#words = Misc.wordelementsfrom(Misc.randomwords());
		for ( const word of this.#words ) {
			Element.sentence.insertAdjacentElement("beforeend", word); // load words to the dom
		}
	}

	resetwordindex() {
		this.#wordindex = 0;
	}
	decrementwordindex() {
		this.#wordindex = this.#wordindex - 1;
	}
	incrementwordindex() {
		this.#wordindex = this.#wordindex + 1;
	}
	get size() {
		return this.#words.length;
	}
	get prevword() {
		try {
			this.decrementwordindex();
			if ( this.#wordindex < 0 ) {
				throw `#wordindex is out of bounds (${this.#wordindex})`;
			}
			return this.#words[this.#wordindex];
		} catch ( outofbound ) {
			console.error(outofbound);
		}
	}
	get nextword() {
		try {
			this.incrementwordindex();
			if ( this.#wordindex >= this.#words.length ) {
				throw `#wordindex is out of bounds (${this.#wordindex})`;
			}
			return this.#words[this.#wordindex];
		} catch ( outofbound ) {
			console.error(outofbound);
		}
	}
	get activeword() {
		try {
			if ( this.#wordindex < 0 || this.#wordindex >= this.#words.length ) {
				throw `#wordindex is out of bounds (${this.#wordindex})`;
			}
			return this.#words[this.#wordindex];
		} catch (outofbound) {
			console.error(outofbound);
		}
	}
	get activewordindex() {
		return this.#wordindex;	
	}
};

class Word {

	#word;
	#letterindex;
	
	constructor(wordelement) {
		this.#letterindex = 0;
		this.#word = wordelement;
	}
	
	get size() {
		return this.#word.length;
	}
	loadprevword() {}
	loadnextword() {}
	get activeletter() {}
	get activeletterindex() {}
	inserterror() {}
	deleteerror() {}
}

class Test {

	#sentence;
	#word;

	constructor() {
		this.#sentence = new Sentence();
		this.#word = new Word(this.#sentence.activeword);
	}

	init() {
		// just add eventlisteners and you are good to go, user just needs to start
		// typing since sentence and word objects are already initialized
	};
	restart() {
		// ui change
		Element.input.value = ""; // clear input field
		Element.sentence.innerHTML = ""; // delete all words from words container

		this.#sentence = new Sentence(); // will load new words to the dom implicitly
		this.#word = new Word(this.#sentence.activeword);
	};
	over() {
		const itwaslastword = this.#sentence.activewordindex === this.#sentence.size;
		const itwaslastletter = this.#word.activeletterindex === this.#word.size;
		return itwaslastword && itwaslastletter;
	}

	registerkeydown() {};
	registerkeyup() {};
}

// no need for global sentence or word object to run the rest, test object has
// it and it will run the test
const test = new Test();

// sentence object
// 		now sentence has on job
// 		store all word elements in one place, it just has to care about active 
//  	word index you can query sentence object for size, previous word, 
//		next word, active word and active word index, you can also reset 
// 		word index you can increase or decrease active word index