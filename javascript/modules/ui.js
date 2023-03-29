class CaretUI {
	constructor() {}
	addcaretto(letter) {
    letter.setAttribute("id", Config.caret.type);
  }
  removecaretfrom(letter) {
    letter.setAttribute("id", "");
  }
}

class SettingUI {
	constructor() {}
}

class KeyboardUI {
	constructor() {}
}

export { CaretUI, SettingUI, KeyboardUI };