// This function checks if the second argument is a substring at the end of the first argument
function confirmThEnding() {
    var firstArgument = document.getElementById('firstArgument').value;
    var secondArgument = document.getElementById('secondArgument').value;
    var firstLength = firstArgument.length; // Store the length of the first argument
    var secondLength = secondArgument.length; // Store the length of the second argument

    // Loop through the characters of the second argument
    for (var i = 0; i < secondLength; i++) {
        // Compare each character of the second argument with the corresponding character from the end of the first argument
        if (firstArgument[firstLength - secondLength + i] !== secondArgument[i]) {
            document.getElementById('result').innerHTML = false;
            return false; // If any characters don't match, return false
        }
    }
    document.getElementById('result').innerHTML = true;
    return true; // If all characters match, return true
}

 