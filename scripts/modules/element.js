const root 					= document.querySelector(":root");

const ttypist				= document.getElementsByTagName("ttypist")[0];
const input 				= document.querySelector("ttypist > input");
const sentence 			= document.querySelector("ttypist > sentence");

const keyboard 			= document.getElementsByTagName("keyboard")[0];

const speedtag 			= document.querySelector(".speed");
const restart 			= document.querySelector("button.restart");
const icon_restart 	= document.querySelector("button.restart > .fa-sharp");
const icon_offtype  = document.querySelector("#off > .fa-ban");

const offtype       = document.querySelector("caret.off");
const boxtype       = document.querySelector("caret.box");
const linetype      = document.querySelector("caret.line");
const blocktype     = document.querySelector("caret.block");
const underlinetype = document.querySelector("caret.underline");
const carettype  = document.querySelectorAll("carettype caret");

const ws_dot = document.querySelector(".ws > .ws_dot");
const ws_space = document.querySelector(".ws > .ws_space");

const contactme = document.querySelector(".contactme");
const developer = document.querySelector(".developer");

export { 
	root,

	ttypist,
	input,
	sentence,
	
	keyboard,

	restart,
	carettype,
	
	icon_restart,
	speedtag,
	icon_offtype,
	offtype,
	boxtype,
	linetype,
	blocktype,
	underlinetype,
	ws_dot,
	ws_space,
	contactme,
	developer,
};