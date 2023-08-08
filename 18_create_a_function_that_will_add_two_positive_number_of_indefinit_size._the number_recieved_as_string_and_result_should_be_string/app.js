// two variable x and y created and assigned the value

// a addTwoString function created with two parameter
function addTwoString() {
    var x = document.getElementById('firstNumber').value
    var y = document.getElementById('secondNumber').value
    // string x converted in number and stored in a variable 
    // and also y 
    let a = Number(x);
    let b = Number(y);

    // add of a and b stored in result variable 
    let result = a + b;
    // print the output in console
    document.getElementById('result').innerHTML = result
    // console.log(result.toString());
}
// function called
// addTwoString(x, y);
