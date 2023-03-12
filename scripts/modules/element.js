const root 					= document.querySelector(":root");

const ttypist				= document.getElementsByTagName("ttypist")[0];
const input 				= document.querySelector("ttypist > input");
const sentence 			= document.querySelector("ttypist > sentence");

const keyboard 			= document.getElementsByTagName("keyboard")[0];

const speedtag 			= document.querySelector(".speed");
const restart 			= document.querySelector("button.restart");
const icon_restart 	= document.querySelector("button.restart > .fa-sharp");
const icon_offtype  = document.querySelector("#off-icon > .fa-ban");
const offtype       = document.querySelector(".carettypes > .offtype");
const boxtype       = document.querySelector(".carettypes > .boxtype");
const linetype      = document.querySelector(".carettypes > .linetype");
const blocktype     = document.querySelector(".carettypes > .blocktype");
const underlinetype = document.querySelector(".carettypes > .underlinetype");
const allcarettype  = document.querySelectorAll(".carettypes > .caret");

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
	icon_restart,
	speedtag,
	icon_offtype,
	offtype,
	boxtype,
	linetype,
	blocktype,
	underlinetype,
	allcarettype,
	ws_dot,
	ws_space,
	contactme,
	developer,
};