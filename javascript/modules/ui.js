const CaretUI = {
	addcaretto(letter) {
    letter.setAttribute("id", Config.caret.type);
  },
  removecaretfrom(letter) {
    letter.setAttribute("id", "");
  },
}

const SettingUI = {

	settextcolor(element, color) {},	
	setbackgroundcolor(element, color) {},
	setproperty(property, value) {},
}

const KeyboardUI = {

}

export { CaretUI, SettingUI, KeyboardUI };