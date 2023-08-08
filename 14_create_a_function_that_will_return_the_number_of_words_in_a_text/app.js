// function created
function countWords(text) {
    var text = document.getElementById('string').value
    // wordCount variable created and value 0 assigned
    let wordCount = 0;
    // isWord boolean variable created
    let isWord = false;
    // loop will run till text lenght
    for (let i = 0; i < text.length; i++) {
        // in text variable if not will be space, new line and tabular form then below code execute
        if (text[i] !== ' ' && text[i] !== '\n' && text[i] !== '\t') {
            // if isWord is true then will below code run
            if (!isWord) {
                wordCount++;
                isWord = true;
            }
        } else {
            isWord = false;
        }
    }
    // after the loop executes have returnd the word count
    document.getElementById('result').innerHTML = wordCount;
    return wordCount;
}


// const text = "Hi I'm Anand from    Jalalabad.   ";
// // console.log(text.length);
// const input = countWords(text);
// console.log(`Word count is ${input}`);


