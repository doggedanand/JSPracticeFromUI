function vowelRemover() {
  var str=  document.getElementById('words').value
    var removedStr = ''; // Variable to store the modified string

    var vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels

    for (var i = 0; i < str.length; i++) {
        var isVowel = false; // Flag to indicate if the current character is a vowel
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) { // Check if the current character is a vowel
                isVowel = true; // Set the flag to true
                break; // Exit the inner loop since a vowel is found
            }
        }
        if (!isVowel) { // If the current character is not a vowel
            removedStr += str[i]; // Append the character to the modified string
        }
    }
document.getElementById('result').innerHTML=removedStr
    return removedStr; // Return the modified string
}

// console.log(vowelRemover('anand 456@anil')); // Output: nnd 456@nl
