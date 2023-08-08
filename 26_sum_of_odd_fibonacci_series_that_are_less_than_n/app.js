function sumOddFibonacci(n) {

  var n = document.getElementById('number').value
  // Check if the input number is zero
  if (n == 0) {
    return 1; // Return 1 if the input is zero
  }

  let sum = 0; // Variable to store the sum of odd Fibonacci numbers
  let fib1 = 0; // First Fibonacci number (initialized to 0)
  let fib2 = 1; // Second Fibonacci number (initialized to 1)

  // Loop until fib2 exceeds the input number n
  while (fib2 <= n) {
    // Check if the current Fibonacci number (fib2) is odd
    if (fib2 % 2 !== 0) {
      sum += fib2; // Add the odd Fibonacci number to the sum
    }

    let temp = fib1 + fib2; // Calculate the next Fibonacci number
    fib1 = fib2; // Update fib1 to the previous fib2
    fib2 = temp; // Update fib2 to the calculated next Fibonacci number
  }
document.getElementById('result').innerHTML=`Sum of odd Fibonacci numbers up to ${n} : ${sum}`;
  return sum; // Return the sum of odd Fibonacci numbers
}

// const n = 11; // The limit up to which we want to calculate the sum
// const result = sumOddFibonacci(n); // Call the sumOddFibonacci function with n as an argument
// console.log("Sum of odd Fibonacci numbers up to", n, ":", result); // Print the result to the console
