let str = "This is  javascript tutorial (_) MANOJ for begginers !!! ,,, .";
let splitText = str.split(" ");
//delimiter 


let shortedArray = []

function isCharLetter(char) {
  return /["a-z"]/i.test(char);
}

function returnArray() {

  for (let x = 0; x < splitText.length; x++) {
    if (isCharLetter(splitText[x]) == true) {

      shortedArray.push(splitText[x]);


    }
  }
  console.log(shortedArray);
}
returnArray();