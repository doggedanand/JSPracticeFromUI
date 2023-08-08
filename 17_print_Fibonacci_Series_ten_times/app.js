

var collect=[]
function printFibonacciNumber(){
var x=document.getElementById('number').value 
// three variable created and have assigned the value
var num1 = 0;
var num2 = 1;
var fnum = 0;
// loop will run till 10
for (let i = 0; i < x; i++) {
    //if i will be less then 1 so i value will store in fum variable
    if (i <= 0) {
        fnum = i;
        
    } else {
        // add of num2 and num1 will store in fnum variable
        fnum = num1 + num2;
        // num2 value stored in num1
        num1 = num2;
        // fnum value stored in num2 
        num2 = fnum;
    }
    // output print in console
    collect+=`${num1} + ${num2} = ${num1 + num2} <br>`
    // document.getElementById('result').innerHTML=`${num1} + ${num2} = ${num1 + num2} <br>`
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
document.getElementById('result').innerHTML=collect
}