// Array of telephone number objects
let array = [
  { "CountryCode": "+91", "Number": 10 },
  { "CountryCode": "+92", "Number": 8 },
  { "CountryCode": "+1", "Number": 6 },
  { "CountryCode": "+01", "Number": 5 },
  { "CountryCode": "+51", "Number": 4 }
];

// Function to validate a telephone number based on country code and number length
function telephoneNumberValidator(countryCode, number) {
  // Loop through the array of telephone number objects
  for (let i = 0; i < array.length; i++) {
    // Check if the country code matches
    if (array[i].CountryCode === countryCode) {
      // Convert the number to a string
      let temp = number.toString();

      // Check if the length of the number matches the expected length
      if (temp.length === array[i].Number) {
        return true; // If it matches, return true (valid number)
      }
      return false; // If it doesn't match, return false (invalid number)
    }
  }
  return false; // If the country code is not found, return false (invalid number)
}

// Call the telephoneNumberValidator function with a country code and number
let result = telephoneNumberValidator("+91", "9512682354");

// Print the result to the console
console.log(result);
