/* eslint-disable no-plusplus */
// text area

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', '');
document.body.append(textarea);

// keyboard

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const keyboardKeysEngShiftOff = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  '\\',
  'backspace'
];
const keyboardKeysEngShiftOn = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  '|',
  'backspace'
];
const keyboardKeysEng = [
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  'Del',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '?',
  'Shift',
  'Up',
  'Ctrl',
  'Win',
  'Alt',
  'space',
  'Alt',
  'Ctrl',
  'Left',
  'Down',
  'Right'
];

const keyboardArea = document.querySelector('keyboard');

// keyboard keys

function createKeys(keyboardKeysEngShiftOn) {
  for (let i = 0; i < keyboardKeysEngShiftOn.length; i++) {
    const div = document.createElement('div');
    div.className = 'key';
    div.innerHTML = keyboardKeysEngShiftOn[i];
    if (keyboardKeysEngShiftOn[i] === 'backspace') {
      div.className = 'key key--extra';
    }
    keyboard.append(div);
    if (i === 14) {
      const divBr = document.createElement('div');
      divBr.className = 'clearfix';
      keyboard.append(divBr);
    }
  }
  for (let i = 0; i < keyboardKeysEng.length; i++) {
    const div = document.createElement('div');
    div.className = 'key';
    div.innerHTML = keyboardKeysEng[i];
    if (
      keyboardKeysEng[i] === 'CapsLock' ||
      keyboardKeysEng[i] === 'Shift' ||
      keyboardKeysEng[i] === 'Tab' ||
      keyboardKeysEng[i] === 'Enter'
    ) {
      div.className = 'key key--extra';
    }
    if (keyboardKeysEng[i] === 'space') {
      div.className = 'key key--extra__extra';
    }
    if (i === 14 || i === 27 || i === 40) {
      const divBr = document.createElement('div');
      divBr.className = 'clearfix';
      keyboard.append(divBr);
    }

    keyboard.append(div);
  }
}

if (keyboardKeysEngShiftOn)
  createKeys(keyboardKeysEngShiftOn, keyboardKeysEngShiftOn);

// keyboardKeysEng.forEach((key) => {
//   const div = document.createElement("div");
//   div.className = "key";
//   div.innerHTML = key;
//   if (key === "Shift") {
//     const br = document.createElement("br");
//     br.className = "clearfix";
//     keyboard.append(br);
//   }
//   keyboard.append(div);
// });
