// text area

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.setAttribute("autofocus", "");
document.body.append(textarea);

// keyboard

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
document.body.append(keyboard);

const keyboardKeysEngShiftOff = [
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
];
const keyboardKeysEngShiftOn = [
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
];
const keyboardKeysEng = [
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
];
const keyboardKeysRusShiftOff = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const keyboardKeysRusShiftOn = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace'];
const keyboardKeysRus = [
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Del',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];

const keyboardArea = document.querySelector("keyboard");

// keyboard keys

function createKeys(keyboardKeysShiftOn, keyboardKeys) {
  for (let i = 0; i < keyboardKeysShiftOn.length; i++) {
    const div = document.createElement("div");
    div.className = "key";
    div.innerHTML = keyboardKeysShiftOn[i];
    keyboard.append(div);
    if (i === 14) {
      const divBr = document.createElement("div");
      divBr.className = "break";
      keyboard.append(divBr);
    }
    if (keyboardKeysShiftOn[i] === "backspace") {
      div.className = "key key_extra";
    }
  }
  for (let i = 0; i < keyboardKeys.length; i++) {
    const div = document.createElement("div");
    div.className = "key";
    div.innerHTML = keyboardKeys[i];
    keyboard.append(div);
    if (i === 13 || i === 26 || i === 39) {
      const divBr = document.createElement("div");
      divBr.className = "break";
      keyboard.append(divBr);
    }
    if (
      keyboardKeys[i] === "CapsLock" ||
      keyboardKeys[i] === "Shift" ||
      keyboardKeys[i] === "Tab" ||
      keyboardKeys[i] === "Enter" ||
      keyboardKeys[i] === "Win" ||
      keyboardKeys[i] === "Alt"
    ) {
      div.className = "key key_extra";
    }
    if (keyboardKeys[i] === "space") {
      div.className = "key key_extra-wide";
    }
  }
}

// Language switch

if (localStorage.getItem('keyboard') === 'eng') {
  createKeys(keyboardKeysEngShiftOff, keyboardKeysEng);
} else if (localStorage.getItem('keyboard') === 'rus') {
  createKeys(keyboardKeysRusShiftOff, keyboardKeysEng);
} else createKeys(keyboardKeysEngShiftOff, keyboardKeysEng);



