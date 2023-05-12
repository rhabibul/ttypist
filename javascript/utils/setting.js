import Config from "../include/config.js"
import { Test, word, phrase } from "../main.js";

import * as Misc from "./misc.js";
import * as SettingUI from "../ui/SettingUI.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as ConfigHandler from "../handler/confighandler.js";
import { root } from "../HTMLElement/MiscElement.js";
import * as SettingElement from "../HTMLElement/SettingElement.js"
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";

// input field
TestAreaElement.phrase.addEventListener("click", () => { TestAreaElement.input.focus(); });

// reset button
SettingElement.reset.addEventListener("click", (evt) => { Test.restart(); });

// caret
SettingElement.caret.off.addEventListener("click", updatecaret);
SettingElement.caret.box.addEventListener("click", updatecaret);
SettingElement.caret.line.addEventListener("click", updatecaret);
SettingElement.caret.block.addEventListener("click", updatecaret);
SettingElement.caret.underline.addEventListener("click", updatecaret);

// pace caret
SettingElement.pacecaret.off.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.box.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.line.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.block.addEventListener("click", updatepacecaret);
SettingElement.pacecaret.underline.addEventListener("click", updatepacecaret);

// apply new caret styles to all the letters
function addcaretstyle_toletters(previouscaret, currentcaret) {
  Array.from(Misc.HTMLCollection("letter", { tagname: true })).forEach(function (letter) {
    letter.classList.remove(previouscaret); // remove previous caret's styling from this letter
    CaretHandler.removecaretfrom(word.activeletter);
    letter.classList.add(currentcaret); // add new caret's styling to this letter
    CaretHandler.addcaretto(word.activeletter);
    TestAreaElement.input.focus();
  });
}

function updatecaret(evt) {
  evt.preventDefault();

  if ( this.dataset.type === Config.caret.type ) return;

  TestAreaElement.input.blur(); // disable input field
  const previouscaret = Config.caret.type;
  SettingUI.changeUICaret(this);
  ConfigHandler.updateconfig_caret(this.dataset.type);
  addcaretstyle_toletters(previouscaret, Config.caret.type);
  TestAreaElement.input.focus(); // enable input field
  Misc.storeConfigInLocalStorage(); // store config in local storage
}

function updatepacecaret(evt) {
  evt.preventDefault();
  if ( this.dataset.type === Config.pacecaret.type ) return;
  SettingUI.changeUICaret(this);
  ConfigHandler.updateconfig_pacecaret(this.dataset.type);
}

SettingElement.fullscreenToggleButton.addEventListener("click", (evt) => {
	if (!document.fullscreenElement && !SettingElement.enterFullscreen.classList.contains("hidden")) {
		SettingElement.enterFullscreen.classList.add("hidden");
		SettingElement.exitFullscreen.classList.remove("hidden");
		document.documentElement.requestFullscreen();
    TestAreaElement.input.focus();
	} else {
    SettingElement.exitFullscreen.classList.add("hidden");
		SettingElement.enterFullscreen.classList.remove("hidden");
		document.exitFullscreen();
    TestAreaElement.input.focus();
	}
});


// sliders
const slider_fontsize = document.querySelector("input#slider.fsize");
const slider_fontweight = document.querySelector("input#slider.fweight");
const label_fontsize = document.querySelector(".fontsize-value");
const label_fontweight = document.querySelector(".fontweight-value");

slider_fontsize.addEventListener("input", () => {
	root.style.setProperty("--basetext-size", `${slider_fontsize.value}rem`);
	label_fontsize.textContent = `${slider_fontsize.value}rem`;
});
slider_fontweight.addEventListener("input", () => {
	root.style.setProperty("--basetext-weight", `${slider_fontweight.value}`);
	label_fontweight.textContent = `${slider_fontweight.value}`;
});
