import { config } from "../../include/config.js";

export function addcaretto(letter) {
	letter.setAttribute("id", config.caret.style);
}

export function removecaretfrom(letter) {
	letter.setAttribute("id", "");
}