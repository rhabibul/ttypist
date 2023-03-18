import * as Misc from "./misc.js";
import * as Element from "./element.js";
import { whitespace } from "./const.js";

class Sentence {

	#words; // array of <word></word> tag, each of these <word></word> tag contains one or more <letter></letter> tags
	#wordindex; // keeps track of the index of <word></word> tag which is active (being typed)
	
	constructor(wordelements) {
		this.#wordindex = 0;
		this.#words = wordelements;
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
	get activewordindex() {
		return this.#wordindex;	
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
	get activewordtext() {
		try {
			if ( this.#wordindex < 0 || this.#wordindex >= this.#words.length ) {
				throw `#wordindex is out of bounds (${this.#wordindex})`;
			}
			let ws_code = 0;
			let text = new String();
			for ( const letter of this.#words[this.#wordindex].children ) {
				ws_code = letter.textContent.charCodeAt(0);
				if ( ws_code === 160 || ws_code === 11825 || ws_code === 9251 ) {
					text += " ";
				} else {
					text += letter.textContent;	
				}
			}
			return text;
		} catch (outofbound) {
			console.error(outofbound);
		}
	}
};

class Word {

	#word; // container for single <word></word> tag element, which contains one or more <letter></letter> tags
	#letterindex; // keeps track of the index of <letter></letter> tag which is active (being typed)
	
	constructor(wordelement) {
		this.#letterindex = 0;
		this.#word = wordelement;
	}

	setwith_prevword(word) {
		this.#word = word;
		this.#letterindex = this.#word.length - 1; // caret should be on last letter (i.e, on space)
	}
	setwith_nextword(word) {
		this.#word = word;
		this.#letterindex = 0;
	}
	
	resetletterindex() {
		this.#letterindex = 0;
	}
	decrementletterindex() {
		this.#letterindex = this.#letterindex - 1;
	}
	incrementletterindex() {
		this.#letterindex = this.#letterindex + 1;
	}
	get size() {
		return this.#word?.children.length;
	}
	get prevletter() {
		try {
			this.decrementletterindex();
			if ( this.#letterindex < 0 ) {
				throw `#letterindex is out of bounds (${this.#letterindex})`;
			}
			return this.#word?.children[this.#letterindex];
		} catch (outofbound) {
			console.error(outofbound);
		}	
	}
	
	get nextletter() {
		try {
			this.incrementletterindex();
			if ( this.#letterindex >= this.#word.length ) {
				throw `#letterindex is out of bounds (${this.#letterindex})`;
			}
			return this.#word?.children[this.#letterindex];
		} catch (outofbound) {
			console.error(outofbound);
		}
	}
	get activeletterindex() {
		return this.#letterindex;
	}
	get activeletter() {
		try {
			if ( this.#letterindex < 0 || this.#letterindex >= this.#word.children.length ) {
				throw `#letterindex is out of bounds (${this.#letterindex})`;
			}
			return this.#word?.children[this.#letterindex];
		} catch (outofbound) {
			console.error(outofbound);
		}
	}
	get activelettertext() {
		try {
			if ( this.#letterindex < 0 || this.#letterindex >= this.#word?.children.length ) {
				throw `#letterindex is out of bounds (${this.#letterindex})`;
			}
			return this.#word?.children[this.#letterindex].textContent;
		} catch (outofbound) {
			console.error(outofbound);
		}
	}
	
	inserterror() {}
	deleteerror() {}
}

class Test {

	#sentence;
	#word;

	constructor() {
		this.#sentence = new Sentence(Misc.wordelementsfrom(Misc.randomwords()));
		this.#word = new Word(this.#sentence.activeword);
	}

	init() {
		// just add eventlisteners and you are good to go, user just needs to start
		// typing since sentence and word objects are already initialized
	};
	restart() {
		// ui change
		Element.input.value = "";
		Element.sentence.innerHTML = "";

		this.#sentence = new Sentence(Misc.wordelementsfrom(Misc.randomwords()));
		this.#word = new Word(this.#sentence.activeword);
	};
	over() {
		const islastword = (this.#sentence.activewordindex === (this.#sentence.size - 1));
		const islastletter = (this.#word.activeletterindex === (this.#word.size - 1));
		return islastword && islastletter;
	}

	// registerkeydown will manage caret
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