
function checkStrCount() {
    var str = document.getElementById('words').value
    // Variable to store the vowel count
    var count = 0;
    // Array that contains the vowels
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
        // Loop through each vowel in the vowels array
        for (var j = 0; j < vowels.length; j++) {
            // Check if the current character matches the current vowel
            if (str[i] === vowels[j]) {
                // If there is a match, increment the count
                count++
            }
        }

    }
    // Return the total count of vowels
    document.getElementById('result').innerHTML = `This word contain ${count} vowel`
    return count;

}

// const str = 'my name is anand vishwakarma'

// const result = vowelCounter(str);
// console.log(result);