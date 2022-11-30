import Config from "./config.js";
import { ignite } from "../main.js";

const offtype_icon  = document.querySelector("#off-icon > .fa-ban");
const offtype       = document.querySelector(".carettypes > .offtype");
const boxtype       = document.querySelector(".carettypes > .boxtype");
const linetype      = document.querySelector(".carettypes > .linetype");
const blocktype     = document.querySelector(".carettypes > .blocktype");
const underlinetype = document.querySelector(".carettypes > .underlinetype");

const carettypes = document.querySelectorAll(".carettypes > .caret");

function changeCaret(evt) {
  evt.preventDefault();

  let clickedcaret = this;

  if (clickedcaret.title === Config.caret) return;

  for (let carettype of carettypes) {
    if (clickedcaret !== carettype) {
      carettype.style.backgroundColor = "var(--settings-caret__bg)";
      if (carettype === offtype) {
        offtype_icon.style.color = "var(--settings-offtypeIcon__color)";
      }
    }
  }

  if (clickedcaret === offtype) {
    offtype_icon.style.color = "#ff0000";
    offtype.style.backgroundColor = "#ffeaea";
  } else {
    clickedcaret.style.backgroundColor = "var(--settings-caret__bg-active)";
  }

  Config.caret = clickedcaret.title;

	// you'll have to generate new random numbers in order to see the caret change
  ignite(true);
}

offtype.addEventListener      ("click", changeCaret);
boxtype.addEventListener      ("click", changeCaret);
linetype.addEventListener     ("click", changeCaret);
blocktype.addEventListener    ("click", changeCaret);
underlinetype.addEventListener("click", changeCaret);

inputbox.addEventListener("focus",     (evt) => { evt.preventDefault(); Config.typing = true;  });
inputbox.addEventListener("focusout",  (evt) => { evt.preventDefault(); Config.typing = false; });