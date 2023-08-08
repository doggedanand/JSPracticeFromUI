// Function to encrypt a string using ROT13 encryption with a given rotation
function encryptRotChiper(str, rotation) {

  var rotationValue = document.getElementById('rotation').value
  var rotation = rotationValue;

  var str = document.getElementById('encrypted').value;



  var startWord = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var reverseWord = startWord.substring(rotation) + startWord.substring(0, rotation);
  var reversed = '';

  // Loop through each character in the input string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var index = -1;

    var isUpperCase = char === char.toUpperCase();
    var isLowerCase = char === char.toLowerCase();

    // Loop through the startWord to find the index of the character
    for (var j = 0; j < startWord.length; j++) {
      if (startWord[j] === char) {
        index = j;
        break;
      }
    }

    // If the character is found, add the corresponding rotated character from reverseWord
    if (index > -1) {
      var rotatedChar = reverseWord[index];

      if (isUpperCase) {
        rotatedChar = rotatedChar.toUpperCase();
      } else if (isLowerCase) {
        rotatedChar = rotatedChar.toLowerCase();
      }

      reversed += rotatedChar;
    } else {
      // If the character is not found, keep it as it is
      reversed += str[i];
    }
  }
  document.getElementById('incryptedWord').innerHTML = reversed
  return reversed; // Return the encrypted string
}

// Input string to be encrypted


// Rotation value for encryption

// Call the encryptRotChiper function to encrypt the input string
// var changedWord = encryptRotChiper(normalWord, rotation);

// Print the encrypted string to the console
// console.log('Encrypted word is: ', changedWord);



// Function to decrypt a string encrypted with ROT13 encryption with a given rotation
function decryptRotChiper(rotatedWord, rotation) {


  var rotationValue = document.getElementById('rotation').value
  var rotation = rotationValue;

  var rotatedWord = document.getElementById('decrypted').value;

  
  var startWord = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  // Create the reverseWord by rotating the startWord
  var reverseWord = startWord.substring(rotation) + startWord.substring(0, rotation);

  // Rotate the startWord again to get the original startWord
  var againReverseWord = startWord.substring(26-rotation) + startWord.substring(0, 26-rotation);

  var reversed = '';

  // Loop through each character in the rotatedWord
  for (var i = 0; i < rotatedWord.length; i++) {
    var char = rotatedWord[i];
    var index = -1;

    var isUpperCase = char === char.toUpperCase();
    var isLowerCase = char === char.toLowerCase();

    // Loop through the startWord to find the index of the character
    for (var j = 0; j < startWord.length; j++) {
      if (startWord[j] === char) {
        index = j;
        break;
      }
    }

    // If the character is found, add the corresponding character from againReverseWord
    if (index > -1) {
      var rotatedChar = againReverseWord[index];

      if (isUpperCase) {
        rotatedChar = rotatedChar.toUpperCase();
      } else if (isLowerCase) {
        rotatedChar = rotatedChar.toLowerCase();
      }

      reversed += rotatedChar;
    } else {
      // If the character is not found, keep it as it is
      reversed += rotatedWord[i];
    }
  }
  document.getElementById('incryptedWord').innerHTML = reversed
  return reversed; // Return the decrypted string
}

// Input string to be decrypted
// var reverseWord = 'Zl anzr vf Navy lnqni ahzore vf 1122112';

// Call the decryptRotChiper function to decrypt the input string
// var result = decryptRotChiper(reverseWord, rotation);

// Print the decrypted string to the console
// console.log('Decrypted word is: ', result);
