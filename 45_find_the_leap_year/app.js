function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true;
        }
    }
    return false;
}

function checkLeapYear() {
    var year = document.getElementById('leapyear').value;

    if (isLeapYear(year)) {
        document.getElementById('result').innerHTML = year + " is a leap year."

    } else {
        document.getElementById('result').innerHTML = year + " is not a leap year."

    }

}
