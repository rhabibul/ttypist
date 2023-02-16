const root 					= document.querySelector(":root");
const btn_restart 	= document.querySelector("button.restart");
const icon_restart 	= document.querySelector("button.restart > .fa-sharp");
const speedtag 			= document.querySelector(".speed");
const inputbox 			= document.getElementById("inputbox");
const wordcontainer = document.getElementById("sentence");

const icon_offtype  = document.querySelector("#off-icon > .fa-ban");
const offtype       = document.querySelector(".carettypes > .offtype");
const boxtype       = document.querySelector(".carettypes > .boxtype");
const linetype      = document.querySelector(".carettypes > .linetype");
const blocktype     = document.querySelector(".carettypes > .blocktype");
const underlinetype = document.querySelector(".carettypes > .underlinetype");
const allcarettype  = document.querySelectorAll(".carettypes > .caret");

const ws_dot = document.querySelector(".ws > .ws_dot");
const ws_space = document.querySelector(".ws > .ws_space");

export { 
	root,
	btn_restart,
	icon_restart,
	speedtag,
	inputbox,
	wordcontainer,
	icon_offtype,
	offtype,
	boxtype,
	linetype,
	blocktype,
	underlinetype,
	allcarettype,
	ws_dot,
	ws_space
};