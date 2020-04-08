// text area

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.setAttribute("autofocus", "");
document.body.append(textarea);

// keyboard

const Keyboard = {
  generateDescribe() {
    const divDescribe = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.className = 'describe';
    p1.innerText = 'Клавиатура создана в операционной системе Windows';
    p2.className = 'describe';
    p2.innerText = 'Для переключения языка используйте клавиши: ';
    p3.className = 'describe';
    p3.innerText = 'Уважаемый проверяющий, отложи ,пожалуйста, проверку до 12.04.2020(с учетом просрочки дедлайна) - не успел прикрутить функционал! ';
    document.body.append(p1);
    document.body.append(p2);
    document.body.append(p3);    
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

  keyboardKeysRusShiftOff: ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "\\", "backspace"],

  keyboardKeysRusShiftOn: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', "|", "backspace"],
  keyboardMainKeysRusShiftOff: [
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up',
    'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
  ],


  // keyboard keys

  createKeys(keyboardKeysShift, keyboardMainKeys) {
    const keyboardMake = document.createElement("div");
    keyboardMake.classList.add("keyboard");
    document.body.append(keyboardMake);
    for (let i = 0; i < keyboardKeysShift.length; i++) {
      const div = document.createElement("div");
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
    for (let i = 0; i < keyboardMainKeys.length; i++) {
      const div = document.createElement("div");
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
      if (keyboardMainKeys[i] === "space") {
        div.className = "key key_extra-wide";
      }
    }
  },

  properties: {
    capsLock: false,
    shift: false,
    rus: false,
  },


}

window.addEventListener('load', () => {
  
  if (localStorage.getItem('keyboard') === 'eng') {
    Keyboard.createKeys(keyboardKeysEngShiftOff, keyboardMainKeysEngShiftOff);
  } else if (localStorage.getItem('keyboard') === 'rus') {
    Keyboard.createKeys(keyboardKeysRusShiftOff, keyboardMainKeysRusShiftOff);
  } else Keyboard.createKeys(Keyboard.keyboardKeysRusShiftOff, Keyboard.keyboardMainKeysRusShiftOff);
  Keyboard.generateDescribe();
  Keyboard.listenPhysicalKeyboard();
  Keyboard.clickKeyboardHandler()
})