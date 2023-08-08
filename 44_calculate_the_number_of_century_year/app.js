function centuryYear(year) {
  // Function to calculate the century given a year
  var year = document.getElementById('year').value;
  if (year < 100) {
    // If the year is less than 100
    document.getElementById('result').innerHTML='Year is less than : 100'
    console.log('Year is less than :', 100);
  } else {
    var century = year / 100; // Calculate the century by dividing the year by 100

    var temp = Math.floor(century); // Round down the century value using Math.floor
    document.getElementById('result').innerHTML=`In ${year}, Century will be ${temp}`
    console.log(`In ${year}, Century will be ${temp}`);
  }
}

// var year = 900; // Assign the value 900 to the 'year' variable
// var result = centuryYear(year); // Call the 'centuryYear' function with the 'year' value
