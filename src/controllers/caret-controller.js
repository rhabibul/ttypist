import Config from "../include/config.js";

export function addcaretto(letter) {
	letter.setAttribute("id", Config.caret.type);
}

export function removecaretfrom(letter) {
	letter.setAttribute("id", "");
}