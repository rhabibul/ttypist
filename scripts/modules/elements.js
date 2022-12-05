const root = document.querySelector(":root");
const btn_restart = document.querySelector("button.restart");
const btn_restart_icon = document.querySelector("button.restart > .fa-sharp");
const speedtag = document.querySelector(".speed");
const inputbox = document.getElementById("inputbox");
const wordcontainer = document.getElementById("sentence");

const offtype_icon  = document.querySelector("#off-icon > .fa-ban");
const offtype       = document.querySelector(".carettypes > .offtype");
const boxtype       = document.querySelector(".carettypes > .boxtype");
const linetype      = document.querySelector(".carettypes > .linetype");
const blocktype     = document.querySelector(".carettypes > .blocktype");
const underlinetype = document.querySelector(".carettypes > .underlinetype");
const allcarettype = document.querySelectorAll(".carettypes > .caret");

export { 
	root,
	btn_restart,
	btn_restart_icon,
	speedtag,
	inputbox,
	wordcontainer,
	offtype_icon,
	offtype,
	boxtype,
	linetype,
	blocktype,
	underlinetype,
	allcarettype,
};