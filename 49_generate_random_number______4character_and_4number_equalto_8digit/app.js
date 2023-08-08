

function generateRandomString() {
    var n=document.getElementById('number').value 
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var randomString = '';

    for (var i = 0; i < n; i++) {
        var randomCharacterIndex = Math.floor(Math.random() * characters.length);
        var randomCharacter = characters.charAt(randomCharacterIndex);
        randomString += randomCharacter;
    }

    for (var j = 0; j < n; j++) {
        var randomNumberIndex = Math.floor(Math.random() * numbers.length);
        var randomNumber = numbers.charAt(randomNumberIndex);
        randomString += randomNumber;
    }
document.getElementById('result').innerHTML=randomString
    return randomString;
}

 