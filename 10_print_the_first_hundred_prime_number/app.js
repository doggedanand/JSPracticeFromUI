
function primeNumber(){

   var x= document.getElementById('prime').value 
    let number = 1;

// have created the variable for store prime number
let collectPrimeNumber = [];

do {

    if (isPrime(number)) {
        // if isPrime get the number next condition will execute

        collectPrimeNumber.push(number);
        // number value will store in collectPrimeNumber variable
    }
    number++;
    // number would be number+1

} while (collectPrimeNumber.length < x)
// loop will run until collectPrimeNumber length must be 100 
document.getElementById('result').innerHTML=collectPrimeNumber
// console.log(collectPrimeNumber);
// all prime number will print in console 



function isPrime(num) {

    // below line will  square the num and take only integer value 
    var sqrtnum = Math.floor(Math.sqrt(num));

    // will check that num shouldn't be = 1
    var prime = num != 1;

    // loop will execute till sqrtnum+1 times 
    for (var i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
        // will be condition check if reminder would be 0 then prime false
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    // have return prime
    return prime;

}


}