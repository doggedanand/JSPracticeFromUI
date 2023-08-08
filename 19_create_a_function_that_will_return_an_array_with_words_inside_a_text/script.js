// a string variable created 
// let text = "Create a   function, that will return an array (of string), with the words inside the text";
var collectedArray=[]
// a name of getWords function created with text parameter
function getWords() {
  var text=document.getElementById('str').value
  // a variable created and value assigned
  let startWord = -1;
  // empty array variable created
  let ar = [];
  // loop will run till text length
  for (let i = 0; i <= text.length; i++) {
    // variable c is created and have checked the condition of i < text lenght
    // according to condition value will true of false
    let c = i < text.length ? text[i] : " ";
    // isSeprator and startWord both value would be true then i value will store in startWord
    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }
    // if both value will true then below codition will execute and 
    // word will push every time in arr variable
    if (isSeparator(c) && startWord >= 0) {
      let word = text.substring(startWord, i);
      ar.push(`"${word}"` );

      startWord = -1;
    }
  }
  // have returned the ar
  document.getElementById('result').innerHTML=`[ ${ar}]`;
  console.log(ar);
  return ar;
}
// isSeperator function created with on parameter
// and inside this function have checked the all possible things that will return above function
function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
  return separators.includes(c);
}
// print the output in console
// console.log(getWords(text));