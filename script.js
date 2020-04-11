// text area
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.setAttribute("autofocus", "");
document.body.append(textarea);
// keyboard
const Keyboard = {
  generateDescribe() {
    const divDescribe = document.createElement("div");
    document.body.append(divDescribe);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    divDescribe.className = "describe";
    p1.innerText = "Клавиатура создана в операционной системе Windows";
    p2.innerText = "Для переключения языка используйте клавиши: ";
    divDescribe.append(p1);
    divDescribe.append(p2);
  },
  keyboardKeysEngShiftOff: [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "\\",
    "backspace",
  ],

  keyboardKeysEngShiftOn: [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "|",
    "backspace",
  ],

  keyboardMainKeysEngShiftOff: [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "Del",
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "?",
    "Shift",
    "Up",
    "Ctrl",
    "Win",
    "Alt",
    "space",
    "Alt",
    "Ctrl",
    "Left",
    "Down",
    "Right",
  ],

  keyboardKeysRusShiftOff: [
    "ё",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "\\",
    "backspace",
  ],

  keyboardKeysRusShiftOn: [
    "Ё",
    "!",
    '"',
    "№",
    ";",
    "%",
    ":",
    "?",
    "*",
    "(",
    ")",
    "_",
    "+",
    "|",
    "backspace",
  ],
  keyboardMainKeysRusShiftOff: [
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "Del",
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    "Enter",
    "Shift",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "Shift",
    "Up",
    "Ctrl",
    "Win",
    "Alt",
    "space",
    "Alt",
    "Ctrl",
    "Left",
    "Down",
    "Right",
  ],

  keyCodes: [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backslash",
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Delete",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "ArrowUp",
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ],
  // keyboard keys
  createKeys(keyboardKeysShift, keyboardMainKeys) {
    const keyboardMake = document.createElement("div");
    keyboardMake.id = "keyboard";
    if (keyboardKeysShift === Keyboard.keyboardKeysEngShiftOff)
      keyboardMake.classList.add("english");
    if (keyboardKeysShift === Keyboard.keyboardKeysRusShiftOff)
      keyboardMake.classList.add("russian");
    keyboardMake.classList.add("keyboard");
    document.body.append(keyboardMake);
    for (let i = 0; i < keyboardKeysShift.length; i += 1) {
      const div = document.createElement("button");
      div.className = "key";
      div.innerHTML = keyboardKeysShift[i];
      keyboardMake.append(div);
      if (i === 14) {
        const divBr = document.createElement("div");
        divBr.className = "break";
        keyboardMake.append(divBr);
      }
      if (keyboardKeysShift[i] === "backspace") {
        div.className = "key key_extra";
      }
    }
    for (let i = 0; i < keyboardMainKeys.length; i += 1) {
      const div = document.createElement("button");
      div.className = "key";
      div.innerHTML = keyboardMainKeys[i];
      keyboardMake.append(div);
      if (i === 13 || i === 26 || i === 39) {
        const divBr = document.createElement("div");
        divBr.className = "break";
        keyboardMake.append(divBr);
      }
      if (
        keyboardMainKeys[i] === "CapsLock" ||
        keyboardMainKeys[i] === "Shift" ||
        keyboardMainKeys[i] === "Tab" ||
        keyboardMainKeys[i] === "Enter" ||
        keyboardMainKeys[i] === "Win" ||
        keyboardMainKeys[i] === "Alt"
      ) {
        div.className = "key key_extra";
      }
      if (keyboardMainKeys[i] === "Alt" || keyboardMainKeys[i] === "Ctrl") {
        div.className = "key key_extra alt";
      }
      if (keyboardMainKeys[i] === "space") {
        div.className = "key key_extra-wide";
      }
    }
  },
  languageChange() {
    const keyarea = document.getElementById("keyboard");
    if (keyarea.classList.contains("russian")) {
      keyarea.classList.remove("russian");
      keyarea.parentNode.removeChild(keyarea);
      Keyboard.createKeys(
        Keyboard.keyboardKeysEngShiftOff,
        Keyboard.keyboardMainKeysEngShiftOff
      );
      localStorage.setItem("language", "eng");
    } else if (keyarea.classList.contains("english")) {
      keyarea.classList.remove("english");
      keyarea.parentNode.removeChild(keyarea);
      Keyboard.createKeys(
        Keyboard.keyboardKeysRusShiftOff,
        Keyboard.keyboardMainKeysRusShiftOff
      );
      localStorage.setItem("language", "rus");
    }
  },
};

if (localStorage.getItem("language") === "eng") {
  Keyboard.createKeys(
    Keyboard.keyboardKeysEngShiftOff,
    Keyboard.keyboardMainKeysEngShiftOff
  );
} else if (localStorage.getItem("language") === "rus") {
  Keyboard.createKeys(
    Keyboard.keyboardKeysRusShiftOff,
    Keyboard.keyboardMainKeysRusShiftOff
  );
} else
  Keyboard.createKeys(
    Keyboard.keyboardKeysRusShiftOff,
    Keyboard.keyboardMainKeysRusShiftOff
  );
Keyboard.generateDescribe();

window.addEventListener("keydown", (evt) => {
  const buttons = document.querySelectorAll("button");
  Keyboard.keyCodes.forEach((item, index) => {
    if (evt.code === item) {      
      buttons[index].classList.add("active");
    }
    if (
      buttons[42].classList.contains("active") &&
      buttons[57].classList.contains("active")
    ) {
      Keyboard.languageChange();      
    }
  });
});

window.addEventListener("keyup", (evt) => {
  const buttons = document.querySelectorAll("button");
  Keyboard.keyCodes.forEach((item, index) => {
    if (evt.code === item) {      
      buttons[index].classList.remove("active");
    }
  });
});

const containerBoard = document.getElementById("keyboard");
containerBoard.addEventListener("mousedown", (event) => {
  const activeButton = event.target.closest("button");
  activeButton.classList.add("active");
  const cursor = textarea.selectionEnd;
  const text = textarea.value.split("");
  text.push(activeButton.textContent);
  textarea.value = text.join("");
  textarea.selectionEnd = cursor + 1;
  activeButton.classList.remove("active");
});
