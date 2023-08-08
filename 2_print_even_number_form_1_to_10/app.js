// will see how can print even number from 1 to 10 in javascript



var number = []
function printEvenNumber() {
    var y = document.getElementById('number').value
    // loop will execute 10 times
    for (let x = 0; x <= y; x++) {
        // will check condition if reminder will be 0 those number print
        if (x % 2 == 0) {
            number += (x + " ")

            // document.write('<br>');
        }
    }
    document.getElementById('result').innerHTML = number

}