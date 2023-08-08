function calculateDaysSinceBirth() {
  var age = document.getElementById('age').value;
  var currentDate = new Date();

  var birthDate = new Date(currentDate.getFullYear() - age, currentDate.getMonth(), currentDate.getDate());

  var birthYear = birthDate.getFullYear();
  var birthMonth = birthDate.getMonth();
  var birthDay = birthDate.getDate();

  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  var years = currentYear - birthYear;
  var months = currentMonth - birthMonth;
  var days = currentDay - birthDay;


  var totalDays = (years * 365) + (months * 30) + days;

  for (var i = birthYear; i < currentYear; i++) {
    if (isLeapYear(i)) {
      totalDays++;
    }
  }

  var result = `
  <h1>Age:</h1> <br>
  ${years} years ${months} months ${days} days <br>
  or ${months + years * 12} months ${days} days <br>
  or ${Math.floor(totalDays / 7)} weeks ${totalDays % 7} days <br>
  or ${totalDays} days <br>
  or ${totalDays * 24} hours <br>
  or ${totalDays * 24 * 60} minutes <br>
  or ${totalDays * 24 * 60 * 60} seconds`;

  document.getElementById('result').innerHTML = result;
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      return true;
    }
  }
  return false;
}
