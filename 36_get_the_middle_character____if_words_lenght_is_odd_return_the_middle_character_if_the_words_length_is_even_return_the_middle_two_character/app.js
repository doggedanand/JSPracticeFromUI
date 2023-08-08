
function getMiddleCharacter() {

  var str=  document.getElementById('words').value
    // Check if the length of the string is odd
    if (str.length % 2 != 0) {
        // Calculate the index of the middle character
        var middleCharacter = (str.length - 1) / 2
        // Return the middle character
        document.getElementById('result').innerHTML=str[middleCharacter]
        return str[middleCharacter]
    } else {
        // If the length of the string is even
        // Calculate the index of the middle character
        var middleCharacter = str.length / 2
        // Return the concatenation of the two middle characters

        document.getElementById('result').innerHTML=str[middleCharacter - 1] + str[middleCharacter]
        return str[middleCharacter - 1] + str[middleCharacter]
    }
}

// var char = 'ejoty';
// var result = getMiddleCharacter(char)
// console.log(result);