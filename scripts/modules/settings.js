import Config from "./config.js";
import { test } from "../main.js";
import * as Elements from "./elements.js";

function changeCaret(evt) {
  evt.preventDefault();

  let clickedcaret = this;

  if (clickedcaret.title === Config.caret) return;

  for (let caret of Elements.allcarettype) {
    if (clickedcaret !== caret) {
      caret.style.backgroundColor = "var(--settings-caret__bg)";
      if (caret === Elements.offtype) {
        Elements.offtype_icon.style.color = "var(--settings-offtypeIcon__color)";
      }
    }
  }

  if (clickedcaret === Elements.offtype) {
    Elements.offtype_icon.style.color = "#ff0000";
    Elements.offtype.style.backgroundColor = "#ffeaea";
  } else {
    clickedcaret.style.backgroundColor = "var(--settings-caret__bg-active)";
  }

  Config.caret = clickedcaret.title;
  test.start();
}

Elements.offtype.addEventListener      ("click", changeCaret);
Elements.boxtype.addEventListener      ("click", changeCaret);
Elements.linetype.addEventListener     ("click", changeCaret);
Elements.blocktype.addEventListener    ("click", changeCaret);
Elements.underlinetype.addEventListener("click", changeCaret);

Elements.inputbox.addEventListener("focus",     (evt) => { evt.preventDefault(); Config.typing = true;  });
Elements.inputbox.addEventListener("focusout",  (evt) => { evt.preventDefault(); Config.typing = false; });

Elements.btn_restart.addEventListener('click', (evt) => {
  evt.preventDefault();
  test.start();
});

Elements.btn_restart.addEventListener('focus', (evt) => { 
  Elements.btn_restart.style.border = "1px solid lightgray"
  Elements.btn_restart_icon.style.color = "black"
});

Elements.btn_restart.addEventListener('focusout', (evt) => { 
  Elements.btn_restart.style.border = ""
  Elements.btn_restart_icon.style.color = "#6b6b6b"
});