import { config } from "../../include/config.js";

export function addCaretTo(letter) {
	letter.setAttribute("id", config.caret.style);
}

export function removeCaretFrom(letter) {
	letter.setAttribute("id", "");
}