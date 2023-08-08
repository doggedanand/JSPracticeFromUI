function capitalizeWords(text) {
    var text=document.getElementById('sentence').value 
    // split function will create an array to all text and store in word variable
    let words = text.split(' ');
    // empty capitalizedText variable created
    let capitalizedText = '';
    // loop will run till words length
    for (let i = 0; i < words.length; i++) {
        // words index value will store in word variable
        let word = words[i];
        // word first index word will be capital because of toUpperCase function and after first all character will be as it is
        let capitalizedWord = word[0].toUpperCase() + word.substring(1);
        // capitalizedWord and a space will store in in capitalixedText variable
        capitalizedText += capitalizedWord + ' ';
    }
    // would be return the capitalizedText
    document.getElementById('result').innerHTML=capitalizedText
    // return capitalizedText;
}

// // have created a variable text and assigned the value
// let text = "anand vishwakarma from jalalabad";
// // have called the function and store the function in capitalizedText variable
// let capitalizedText = capitalizeWords(text);
// // capitalizedText will print in console
// console.log(capitalizedText);

