var x= document.getElementById('result');

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

    var countryCode=document.getElementById('countrycode').value;
  
    var number=document.getElementById('phonenumber').value;

    
    var countryCode=countryCode.toString()
    // Loop through the array of telephone number objects
    for (let i = 0; i < array.length; i++) {
      // Check if the country code matches
      if (array[i].CountryCode === countryCode) {
        // Convert the number to a string
       if(number.length==10  ){

        
// Check if the length of the number matches the expected length

          if (number.length === array[i].Number) {
let temp=!isNaN(number)
if(temp){
  x.innerHTML=true
  return true; // If it matches, return true (valid number)
}
     
          }
       }
  
        
        x.innerHTML=false
        return false; // If it doesn't match, return false (invalid number)
      }
    }
    x.innerHTML=false
    return false; // If the country code is not found, return false (invalid number)
  }
  
  // Call the telephoneNumberValidator function with a country code and number

  
  
//   let result = telephoneNumberValidator(countryCode, phoneNumber);
  
  // Print the result to the console
//   var result=telephoneNumberValidator();
//   console.log(result);
  