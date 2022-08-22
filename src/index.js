const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let res = [];
  let string;
  let strRes = "";

  expr = expr.split("");
  for (let i = 0; i <= expr.length; i++) {
    string = expr.splice(0, 10);
    arr.push(string);
  }
    
  arr = arr.map((el) => el.join(""));
  arr = arr.map((el) => (el = el.replace(/00/g, "")));
  arr = arr.map((el) => (el = el.replace(/10/g, ".")));
  arr = arr.map((el) => (el = el.replace(/11/g, "-")));
  arr = arr.map((el) => (el = el.replace("**********", " ")));

  for (let i = 0; i < arr.length; i++) {
    res.push(MORSE_TABLE[arr[i]]);
  }

  res = res.map((el) => {
    el == undefined ? (strRes = strRes + " ") : (strRes = strRes + el);
  });
  
  return strRes;
}

module.exports = {
    decode
}
