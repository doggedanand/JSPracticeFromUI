// Function to perform ROT13 encryption on a string
function rotChiper(str) {
  var startWord = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var reverseWord = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var reversed = '';

  // Loop through each character in the input string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var index = -1;

    // Loop through the startWord to find the index of the character
    for (var j = 0; j < startWord.length; j++) {
      if (startWord[j] === char) {
        index = j;
        break;
      }
    }

    // If the character is found, add the corresponding character from reverseWord
    if (index > -1) {
      reversed += reverseWord[index];
    } else {
      // If the character is not found, keep it as it is
      reversed += char;
    }
  }

  return reversed; // Return the encrypted string
}

// Input string to be encrypted
var normalWord = 'Zl anzr vf Navy lnqni ahzore vf 1122112';

// Call the rotChiper function to encrypt the input string
var changedWord = rotChiper(normalWord);

// Print the encrypted string to the console
console.log(changedWord);
