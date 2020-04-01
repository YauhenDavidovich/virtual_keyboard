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
  '='
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
  '+'
];
const keyboardKeysEng = [
  'backspace',
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
  '\\',
  '|',
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
  'Del',
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

// function createKeys(
//   keyboardKeysShiftOff,
//   keyboardKeysShiftOn,
//   keyboardKeys
// ) {
//   for (let i = 0; i < keyboardKeysEngShiftOff.length; i += 1) {
//     const div = document.createElement('div');
//     div.className = 'key';
//     keyboard.append(div);    
// }
// }


keyboardKeysEng.forEach((key) => {
  const div = document.createElement('div');
  div.className = 'key';
  div.innerHTML = key;
  if (key === 'Enter') {
    const br = document.createElement('br');
    br.className = 'clearfix';
    keyboard.append(br);
  }
  keyboard.append(div);  
  });